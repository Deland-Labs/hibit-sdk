import * as secp from '@noble/secp256k1';
import { sha256 } from '@noble/hashes/sha256';
import { hmac } from '@noble/hashes/hmac';
import { Buffer } from 'buffer';
import { HexString } from './types';
import CryptoJS from 'crypto-js';

// Configure secp256k1 to use the correct HMAC function
secp.etc.hmacSha256Sync = (key, ...msgs) => hmac(sha256, key, secp.etc.concatBytes(...msgs));

/**
 * Represents a cryptographic keypair used for signing transactions.
 * Manages both private and public keys in hexadecimal format.
 */
export class Keypair {
  /**
   * The private key in hex format
   */
  private readonly privateKey: HexString;

  /**
   * The public key in hex format
   */
  public readonly publicKey: HexString;

  /**
   * Creates a new Keypair instance from a private key.
   *
   * @param privateKey - The private key in hex format (can be encrypted if password is provided)
   * @param password - Optional password to decrypt the private key
   * @throws {Error} If decryption fails due to incorrect password
   */
  constructor(privateKey: HexString, password?: string) {
    // If a password is provided, try to decrypt the private key
    if (password) {
      try {
        this.privateKey = Keypair.decryptPrivateKey(privateKey, password);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_error) {
        throw new Error('Failed to decrypt private key: Invalid password');
      }
    } else {
      // Use the key directly if no password is provided
      this.privateKey = privateKey;
    }

    this.publicKey = Keypair.getPublicKey(this.privateKey);
  }

  /**
   * Encrypts a private key with a password using AES.
   *
   * @param privateKey - The private key to encrypt
   * @param password - The password for encryption
   * @returns The encrypted private key as a string
   */
  static encryptPrivateKey(privateKey: HexString, password: string): HexString {
    return Buffer.from(CryptoJS.AES.encrypt(privateKey, password).toString()).toString('hex');
  }

  /**
   * Decrypts an encrypted private key with a password.
   *
   * @param encryptedPrivateKey - The encrypted private key
   * @param password - The password for decryption
   * @returns The decrypted private key
   * @throws {Error} If decryption fails
   */
  private static decryptPrivateKey(encryptedPrivateKey: string, password: string): string {
    // Convert hex back to base64 string
    const base64String = Buffer.from(encryptedPrivateKey, 'hex').toString();
    const bytes = CryptoJS.AES.decrypt(base64String, password);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) {
      throw new Error('Failed to decrypt private key');
    }

    return decrypted;
  }

  /**
   * Generates a new random keypair.
   *
   * @returns A new randomly generated keypair
   */
  static generate(): Keypair {
    const privateKeyBytes = secp.utils.randomPrivateKey();
    const privateKey = Buffer.from(privateKeyBytes).toString('hex');
    return new Keypair(privateKey);
  }

  /**
   * Derives a public key from a private key.
   *
   * @param privateKey - The private key in hex format
   * @returns The corresponding public key in hex format
   */
  static getPublicKey(privateKey: HexString): string {
    const publicKeyBytes = secp.getPublicKey(privateKey, true); // Get compressed public key
    return Buffer.from(publicKeyBytes).toString('hex');
  }

  /**
   * Signs data with the private key.
   *
   * @param data - The data to sign
   * @returns The signature with recovery ID as Uint8Array
   */
  sign(data: Uint8Array): Uint8Array {
    const signature = secp.sign(data, Buffer.from(this.privateKey, 'hex'));
    // Include recovery ID with the signature
    return Buffer.concat([signature.toCompactRawBytes(), Buffer.from([signature.recovery])]);
  }

  /**
   * Gets the private key.
   *
   * @returns The private key in hex format
   */
  getPrivateKey(): HexString {
    return this.privateKey;
  }
}
