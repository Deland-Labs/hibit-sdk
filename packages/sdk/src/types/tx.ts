import { TransactionType, Version } from './enums.ts';
import { sha256 } from '@noble/hashes/sha256';
import { TxPayloadEncoder } from '../encoder';
import * as secp from '@noble/secp256k1';
import { UserKeyPair } from './index.ts';
import { Buffer } from 'buffer';

/**
 * Represents a transaction in the system.
 * Handles transaction data encoding, hashing, and signature management.
 *
 * @class Transaction
 * @example
 * ```typescript
 * const tx = new Transaction(
 *   Version.V0,
 *   TransactionType.Transfer,
 *   BigInt("123"),
 *   BigInt("1"),
 *   new Uint8Array([1, 2, 3])
 * );
 * const hash = tx.hash();
 * tx.setSignature(signatureBytes);
 * ```
 */
export class Transaction {
  /**
   * The version of the transaction protocol
   */
  version: Version;

  /**
   * The type of transaction being performed
   */
  type: TransactionType;

  /**
   * The wallet ID of the transaction sender
   */
  from: bigint;

  /**
   * Transaction sequence number to prevent replay attacks
   */
  nonce: bigint;

  /**
   * The encoded transaction payload data
   */
  payload: Uint8Array;

  /**
   * Optional signature of the transaction
   */
  signature?: Uint8Array;

  /**
   * Creates a new Transaction instance.
   *
   * @param {Version} version - The transaction protocol version
   * @param {TransactionType} type - The type of transaction
   * @param {bigint} from - The sender's wallet ID
   * @param {bigint} nonce - Transaction sequence number
   * @param {Uint8Array} payload - Encoded transaction payload
   */
  constructor(version: Version, type: TransactionType, from: bigint, nonce: bigint, payload: Uint8Array) {
    this.version = version;
    this.type = type;
    this.from = from;
    this.nonce = nonce;
    this.payload = payload;
  }

  /**
   * Converts the transaction data into encoded bytes.
   * Used for transaction hashing and signing.
   *
   * @returns {Uint8Array} The encoded transaction data bytes
   */
  toTxDataBytes(): Uint8Array {
    const txData = [this.version, this.type, this.from, this.nonce, this.payload];
    return TxPayloadEncoder.encode(txData);
  }

  /**
   * Calculates the SHA-256 hash of the encoded transaction data.
   * This hash uniquely identifies the transaction.
   *
   * @returns {Uint8Array} The SHA-256 hash of the transaction data
   */
  hash(): Uint8Array {
    return sha256(this.toTxDataBytes());
  }

  sign(userKeyPair: UserKeyPair): Transaction {
    const signature = secp.sign(this.hash(), Buffer.from(userKeyPair.privateKey, 'hex'));

    // concat recId to signature
    this.signature = Buffer.concat([signature.toCompactRawBytes(), Buffer.from([signature.recovery])]);
    return this;
  }

  /**
   * Checks if the transaction has been signed.
   *
   * @returns {boolean} True if the transaction is signed, false otherwise
   */
  isSigned(): boolean {
    return !!this.signature;
  }
}
