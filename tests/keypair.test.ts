import { describe, it, expect } from 'vitest';
import { Keypair } from '../src/Keypair';
import { Buffer } from 'buffer';

describe('Keypair', () => {
  it('should generate a new keypair', () => {
    const keypair = Keypair.generate();
    expect(keypair).toBeInstanceOf(Keypair);
    expect(keypair.getPrivateKey()).toHaveLength(64);
    expect(keypair.publicKey).toHaveLength(66);
  });

  it('should create a keypair from a private key', () => {
    const privateKey = Keypair.generate().getPrivateKey();
    const keypair = new Keypair(privateKey);
    expect(keypair.getPrivateKey()).toBe(privateKey);
  });

  it('should encrypt and decrypt a private key', () => {
    const privateKey = Keypair.generate().getPrivateKey();
    const password = 'a_strong_password';
    const encryptedPrivateKey = Keypair.encryptPrivateKey(privateKey, password);
    const keypair = new Keypair(encryptedPrivateKey, password);
    expect(keypair.getPrivateKey()).toBe(privateKey);
  });

  it('should throw an error with an invalid password', () => {
    const privateKey = Keypair.generate().getPrivateKey();
    const password = 'a_strong_password';
    const encryptedPrivateKey = Keypair.encryptPrivateKey(privateKey, password);
    expect(() => new Keypair(encryptedPrivateKey, 'wrong_password')).toThrow(
      'Failed to decrypt private key: Invalid password'
    );
  });

  it('should sign data', () => {
    const keypair = Keypair.generate();
    const data = Buffer.from('some_data_to_sign');
    const signature = keypair.sign(data);
    expect(signature).toBeInstanceOf(Uint8Array);
    expect(signature).toHaveLength(65); // 64 bytes for signature + 1 for recovery id
  });

  it('should derive a public key from a private key', () => {
    const privateKey = Keypair.generate().getPrivateKey();
    const publicKey = Keypair.getPublicKey(privateKey);
    const keypair = new Keypair(privateKey);
    expect(keypair.publicKey).toBe(publicKey);
  });

  // === Additional edge and error case tests ===
  it('should encrypt and decrypt private key directly', () => {
    const privateKey = Keypair.generate().getPrivateKey();
    const password = 'test_password';
    const encrypted = Keypair.encryptPrivateKey(privateKey, password);
    const decrypted = (Keypair as any).decryptPrivateKey(encrypted, password);
    expect(decrypted).toBe(privateKey);
  });

  it('should throw when decrypting with wrong password', () => {
    const privateKey = Keypair.generate().getPrivateKey();
    const password = 'test_password';
    const encrypted = Keypair.encryptPrivateKey(privateKey, password);
    expect(() => (Keypair as any).decryptPrivateKey(encrypted, 'wrong')).toThrow();
  });

  it('should throw when decrypting invalid encrypted data', () => {
    const password = 'test_password';
    expect(() => (Keypair as any).decryptPrivateKey('deadbeef', password)).toThrow();
    expect(() => (Keypair as any).decryptPrivateKey('', password)).toThrow();
  });

  it('should throw when getPublicKey with invalid private key', () => {
    expect(() => Keypair.getPublicKey('1234')).toThrow();
    expect(() =>
      Keypair.getPublicKey('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz')
    ).toThrow();
  });

  it('should throw when constructing Keypair with invalid private key', () => {
    expect(() => new Keypair('1234')).toThrow();
    expect(() => new Keypair('')).toThrow();
    expect(() => new Keypair('nothexstring')).toThrow();
  });

  it('should throw when sign with empty data', () => {
    const keypair = Keypair.generate();
    expect(() => keypair.sign(new Uint8Array([]))).toThrow();
  });

  it('should throw when sign with non-Uint8Array', () => {
    const keypair = Keypair.generate();
    // @ts-expect-error: purposely passing wrong type to test error handling
    expect(() => keypair.sign('not a buffer')).toThrow();
  });
});
