import { HexString, Transaction, TransactionType, Version } from './types';
import { TxPayloadEncoder } from './encoder';

/**
 * Manages transaction creation and signing operations.
 * Provides utilities for creating and signing transactions with user key pair.
 *
 * @class TransactionManager
 * @example
 * ```typescript
 * const tx = TransactionManager.createTransaction(
 *   TransactionType.Transfer,
 *   BigInt("123"),
 *   BigInt("1"),
 *   transfer
 * );
 * const signedTx = TransactionManager.sign(tx, privateKey);
 * ```
 */
export class TransactionManager {
  /**
   * Creates a new transaction with the specified parameters and encoded payload.
   *
   * @template T - The type of the transaction data
   * @param {TransactionType} type - The type of transaction to create
   * @param {bigint} from - The sender's wallet ID
   * @param {bigint} nonce - Transaction sequence number
   * @param {T} data - The transaction data to encode
   * @param {Version} version - The transaction protocol version, default is V0
   * @returns {Transaction} A new transaction instance with encoded payload
   *
   * @example
   * ```typescript
   * const transfer = { to: "0x123", amount: "100" };
   * const tx = TransactionManager.createTransaction(
   *   TransactionType.Transfer,
   *   BigInt("123"),
   *   BigInt("1"),
   *   transfer
   * );
   * ```
   */
  static createL2Transaction<T>(
    type: TransactionType,
    from: bigint,
    nonce: bigint,
    data: T,
    version: Version = Version.V0
  ): Transaction {
    const payload = TxPayloadEncoder.encode(data);
    return new Transaction(type, from, nonce, payload, version);
  }

  /**
   * Signs a transaction using the provided user keypair.
   * Creates a recoverable signature that includes the recovery ID.
   *
   * @param {Transaction} transaction - The transaction to sign
   * @param {privateKey} privateKey - The user's private key
   * @returns {Transaction} A new transaction instance with the signature attached
   * @throws {Error} If signing fails or the private key is invalid
   *
   * @example
   * ```typescript
   * const signedTx = TransactionManager.sign(tx, privateKey);
   * ```
   */
  static sign(transaction: Transaction, privateKey: HexString): Transaction {
    return transaction.sign(privateKey);
  }
}
