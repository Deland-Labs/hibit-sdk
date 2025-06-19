import { describe, it, expect } from 'vitest';
import { Transaction, OriginWalletTransaction, TransactionType, Chain, ChainNetwork, Version } from '../src';
import { Buffer } from 'buffer';

describe('Transaction Constructor Tests', () => {
  describe('Traditional Constructor', () => {
    it('should create transaction with Uint8Array payload', () => {
      const payload = new Uint8Array([1, 2, 3, 4, 5]);
      const tx = new Transaction(TransactionType.CreateSpotOrder, BigInt(123), BigInt(1), payload);

      expect(tx.type).toBe(TransactionType.CreateSpotOrder);
      expect(tx.from).toBe(BigInt(123));
      expect(tx.nonce).toBe(BigInt(1));
      expect(tx.version).toBe(Version.V0);
      expect(Array.from(tx.payload)).toEqual([1, 2, 3, 4, 5]);
    });

    it('should create transaction with custom version', () => {
      const payload = new Uint8Array([1, 2, 3]);
      const tx = new Transaction(TransactionType.Withdraw, BigInt(456), BigInt(2), payload, Version.V0);

      expect(tx.version).toBe(Version.V0);
      expect(tx.type).toBe(TransactionType.Withdraw);
      expect(tx.from).toBe(BigInt(456));
      expect(tx.nonce).toBe(BigInt(2));
    });
  });

  describe('OriginWalletTransaction Constructor', () => {
    it('should create transaction from OriginWalletTransaction', () => {
      const originWalletTx = new OriginWalletTransaction(
        Chain.Kaspa,
        'Test message for transaction',
        ChainNetwork.MainNet,
        'test-signature'
      );

      const tx = new Transaction(TransactionType.Withdraw, BigInt(789), BigInt(3), originWalletTx);

      expect(tx.type).toBe(TransactionType.Withdraw);
      expect(tx.from).toBe(BigInt(789));
      expect(tx.nonce).toBe(BigInt(3));
      expect(tx.version).toBe(Version.V0);

      // Verify that the message was converted to UTF-8 bytes
      const expectedPayload = Buffer.from('Test message for transaction', 'utf8');
      expect(Buffer.from(tx.payload)).toEqual(expectedPayload);
      expect(Buffer.from(tx.payload).toString('utf8')).toBe('Test message for transaction');
    });

    it('should create transaction from OriginWalletTransaction with custom version', () => {
      const originWalletTx = new OriginWalletTransaction(
        Chain.Ethereum,
        'Another test message',
        ChainNetwork.EvmMainNet,
        'another-signature'
      );

      const tx = new Transaction(TransactionType.CreateSpotOrder, BigInt(999), BigInt(5), originWalletTx, Version.V0);

      expect(tx.version).toBe(Version.V0);
      expect(tx.type).toBe(TransactionType.CreateSpotOrder);
      expect(tx.from).toBe(BigInt(999));
      expect(tx.nonce).toBe(BigInt(5));
      expect(Buffer.from(tx.payload).toString('utf8')).toBe('Another test message');
    });

    it('should handle empty message from OriginWalletTransaction', () => {
      const originWalletTx = new OriginWalletTransaction(Chain.Kaspa, '', undefined, 'signature');

      const tx = new Transaction(TransactionType.Withdraw, BigInt(100), BigInt(1), originWalletTx);

      expect(Buffer.from(tx.payload).toString('utf8')).toBe('');
      expect(tx.payload.length).toBe(0);
    });

    it('should handle Unicode characters in message', () => {
      const unicodeMessage = '测试消息 🚀 Test Message';
      const originWalletTx = new OriginWalletTransaction(Chain.Kaspa, unicodeMessage, undefined, 'signature');

      const tx = new Transaction(TransactionType.Withdraw, BigInt(200), BigInt(2), originWalletTx);

      expect(Buffer.from(tx.payload).toString('utf8')).toBe(unicodeMessage);
    });
  });

  describe('Transaction Hash and Signing', () => {
    it('should generate consistent hash for traditional payload', () => {
      const payload = new Uint8Array([1, 2, 3, 4, 5]);
      const tx1 = new Transaction(TransactionType.CreateSpotOrder, BigInt(123), BigInt(1), payload);
      const tx2 = new Transaction(TransactionType.CreateSpotOrder, BigInt(123), BigInt(1), payload);

      const hash1 = tx1.hash();
      const hash2 = tx2.hash();

      expect(hash1).toEqual(hash2);
      expect(hash1.length).toBeGreaterThan(0);
    });

    it('should generate consistent hash for OriginWalletTransaction payload', () => {
      const message = 'Consistent test message';
      const originWalletTx1 = new OriginWalletTransaction(Chain.Kaspa, message, undefined, 'signature');
      const originWalletTx2 = new OriginWalletTransaction(Chain.Kaspa, message, undefined, 'signature');

      const tx1 = new Transaction(TransactionType.Withdraw, BigInt(456), BigInt(2), originWalletTx1);
      const tx2 = new Transaction(TransactionType.Withdraw, BigInt(456), BigInt(2), originWalletTx2);

      const hash1 = tx1.hash();
      const hash2 = tx2.hash();

      expect(hash1).toEqual(hash2);
    });

    it('should generate different hashes for different messages', () => {
      const originWalletTx1 = new OriginWalletTransaction(Chain.Kaspa, 'Message 1', undefined, 'signature');
      const originWalletTx2 = new OriginWalletTransaction(Chain.Kaspa, 'Message 2', undefined, 'signature');

      const tx1 = new Transaction(TransactionType.Withdraw, BigInt(100), BigInt(1), originWalletTx1);
      const tx2 = new Transaction(TransactionType.Withdraw, BigInt(100), BigInt(1), originWalletTx2);

      const hash1 = tx1.hash();
      const hash2 = tx2.hash();

      expect(hash1).not.toEqual(hash2);
    });

    it('should initially be unsigned', () => {
      const payload = new Uint8Array([1, 2, 3]);
      const tx = new Transaction(TransactionType.CreateSpotOrder, BigInt(123), BigInt(1), payload);

      expect(tx.isSigned()).toBe(false);
      expect(tx.signature).toBeUndefined();
    });
  });

  describe('Type Safety and Edge Cases', () => {
    it('should correctly identify payload type using instanceof', () => {
      const regularPayload = new Uint8Array([1, 2, 3]);
      const originWalletTx = new OriginWalletTransaction(Chain.Kaspa, 'test', undefined, 'sig');

      const tx1 = new Transaction(TransactionType.CreateSpotOrder, BigInt(1), BigInt(1), regularPayload);
      const tx2 = new Transaction(TransactionType.CreateSpotOrder, BigInt(1), BigInt(1), originWalletTx);

      // Both should be valid but have different payload contents
      expect(Array.from(tx1.payload)).toEqual([1, 2, 3]);
      expect(Buffer.from(tx2.payload).toString('utf8')).toBe('test');
    });

    it('should handle large messages', () => {
      const largeMessage = 'x'.repeat(10000); // 10KB message
      const originWalletTx = new OriginWalletTransaction(Chain.Kaspa, largeMessage, undefined, 'signature');

      const tx = new Transaction(TransactionType.Withdraw, BigInt(1), BigInt(1), originWalletTx);

      expect(Buffer.from(tx.payload).toString('utf8')).toBe(largeMessage);
      expect(tx.payload.length).toBe(10000);
    });
  });
});
