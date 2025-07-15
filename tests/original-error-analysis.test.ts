import { describe, it, expect } from 'vitest';
import {
  Transaction,
  OriginWalletTransaction,
  TransactionType,
  Chain,
  ChainNetwork,
  AbstractWalletApi,
  WalletSignatureSchema,
  WithdrawInput,
  HexString
} from '../src';
import { Buffer } from 'buffer';

// Mock wallet for testing
class MockWallet extends AbstractWalletApi {
  signatureSchema = WalletSignatureSchema.EvmEcdsa;

  async signMessage(message: string): Promise<HexString> {
    return '0x' + 'a'.repeat(130); // Mock signature
  }
}

describe('Original Error Analysis', () => {
  it('should analyze the original hash mismatch error', () => {
    console.log('=== ORIGINAL ERROR ANALYSIS ===');

    // Original error data
    const originalError = {
      localHash: 'd5798939e23bb24a7b6d08ea563F486de1d9d8a97e8b8b024843e7a366368511',
      serverHash: '28c8af68fded93c5852†7a7c37C7a0ad19e1ce0039e5ef425de62еec5а47eе08',
      testData: {
        FromWalletAddress: '0x9098f1fcfa18564b3efe694dd6ed5e88620fa1f2',
        hin: '10102',
        targetChain: '60',
        targetChainNetwork: '331',
        destinationAddress: '0xb605cefaeb6f0c8e79d53155629F49574ab56095',
        assetId: '10030',
        assetDecimals: '18',
        amount: '1'
      }
    };

    console.log('Original Local Hash:', originalError.localHash);
    console.log('Original Server Hash:', originalError.serverHash);
    console.log('');

    // Clean the server hash (remove non-hex characters)
    const cleanServerHash = originalError.serverHash.replace(/[^0-9a-fA-F]/g, '');
    console.log('Cleaned Server Hash:', cleanServerHash);
    console.log('Cleaned Hash Length:', cleanServerHash.length);
    console.log('');

    // Analyze the server hash corruption
    console.log('Server Hash Analysis:');
    console.log('- Original length:', originalError.serverHash.length);
    console.log('- Expected length: 64 (for SHA-256)');
    console.log('- Contains special chars: †, е, а, е, е');
    console.log('- This suggests encoding/transmission corruption');
    console.log('');

    // Test with unknown nonce (what could produce the local hash?)
    console.log('=== REVERSE ENGINEERING LOCAL HASH ===');
    console.log('Trying to find what nonce produces the local hash...');

    const { testData } = originalError;
    const userId = BigInt(testData.hin);
    const chain = new Chain(BigInt(testData.targetChain));
    const chainNetwork = new ChainNetwork(BigInt(testData.targetChainNetwork));
    const assetId = BigInt(testData.assetId);
    const assetDecimals = parseInt(testData.assetDecimals);
    const amount = parseFloat(testData.amount);
    const fee = 0;

    const mockWallet = new MockWallet();

    // Try different nonces to see if any produce the local hash
    const testNonces = [1n, 2n, 3n, 10n, 100n, 1000n, 12345n];

    for (const nonce of testNonces) {
      const withdrawInput: WithdrawInput = {
        nonce,
        targetChain: chain,
        targetChainNetwork: chainNetwork,
        address: testData.destinationAddress,
        assetId,
        assetDecimals,
        amount,
        fee
      };

      const withdrawMessage = mockWallet.generateWithdrawMessage(withdrawInput, userId);
      const originWalletTx = new OriginWalletTransaction(chain, withdrawMessage, chainNetwork, 'mock-signature');

      const transaction = new Transaction(TransactionType.Withdraw, userId, nonce, originWalletTx);

      const hash = transaction.hash();
      const hashHex = Buffer.from(hash).toString('hex');

      console.log(`Nonce ${nonce}: ${hashHex}`);

      if (hashHex === originalError.localHash) {
        console.log(`🎯 FOUND MATCHING NONCE: ${nonce}`);
        break;
      }
    }

    console.log('');
    console.log('=== CONCLUSIONS ===');
    console.log('1. Server hash appears corrupted during transmission');
    console.log('2. Need to identify the actual nonce used in the original request');
    console.log('3. The hash calculation logic itself appears to be working correctly');
  });

  it('should test different nonce values systematically', () => {
    console.log('=== SYSTEMATIC NONCE TESTING ===');

    const testData = {
      FromWalletAddress: '0x9098f1fcfa18564b3efe694dd6ed5e88620fa1f2',
      hin: '10102',
      targetChain: '60',
      targetChainNetwork: '331',
      destinationAddress: '0xb605cefaeb6f0c8e79d53155629F49574ab56095',
      assetId: '10030',
      assetDecimals: '18',
      amount: '1'
    };

    const targetHash = 'd5798939e23bb24a7b6d08ea563F486de1d9d8a97e8b8b024843e7a366368511';

    const userId = BigInt(testData.hin);
    const chain = new Chain(BigInt(testData.targetChain));
    const chainNetwork = new ChainNetwork(BigInt(testData.targetChainNetwork));
    const assetId = BigInt(testData.assetId);
    const assetDecimals = parseInt(testData.assetDecimals);
    const amount = parseFloat(testData.amount);
    const fee = 0;

    const mockWallet = new MockWallet();

    console.log(`Looking for nonce that produces hash: ${targetHash}`);
    console.log('Testing nonces from 1 to 100...');

    let found = false;
    for (let n = 1; n <= 100; n++) {
      const nonce = BigInt(n);

      const withdrawInput: WithdrawInput = {
        nonce,
        targetChain: chain,
        targetChainNetwork: chainNetwork,
        address: testData.destinationAddress,
        assetId,
        assetDecimals,
        amount,
        fee
      };

      const withdrawMessage = mockWallet.generateWithdrawMessage(withdrawInput, userId);
      const originWalletTx = new OriginWalletTransaction(chain, withdrawMessage, chainNetwork, 'mock-signature');

      const transaction = new Transaction(TransactionType.Withdraw, userId, nonce, originWalletTx);

      const hash = transaction.hash();
      const hashHex = Buffer.from(hash).toString('hex');

      if (hashHex === targetHash) {
        console.log(`🎯 FOUND! Nonce ${nonce} produces the target hash`);
        console.log(`Withdrawal message for nonce ${nonce}:`);
        console.log(withdrawMessage);
        found = true;
        break;
      }
    }

    if (!found) {
      console.log('❌ Target hash not found in nonce range 1-100');
      console.log('The original hash might be from a different message content or nonce value');
    }

    // Test what we know works (nonce 12345)
    const knownWorkingNonce = 12345n;
    const withdrawInput: WithdrawInput = {
      nonce: knownWorkingNonce,
      targetChain: chain,
      targetChainNetwork: chainNetwork,
      address: testData.destinationAddress,
      assetId,
      assetDecimals,
      amount,
      fee
    };

    const withdrawMessage = mockWallet.generateWithdrawMessage(withdrawInput, userId);
    const originWalletTx = new OriginWalletTransaction(chain, withdrawMessage, chainNetwork, 'mock-signature');

    const transaction = new Transaction(TransactionType.Withdraw, userId, knownWorkingNonce, originWalletTx);

    const hash = transaction.hash();
    const hashHex = Buffer.from(hash).toString('hex');

    console.log('');
    console.log(`Known working hash (nonce ${knownWorkingNonce}): ${hashHex}`);
    expect(hashHex).toBe('b45d31daf0ec5479926d9918eb711300f0a45c3244cef6fd17993517fc82d8ae');
  });
});
