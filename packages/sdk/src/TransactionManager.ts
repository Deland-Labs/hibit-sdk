import { Transaction, TransactionType, UserKeyPair } from './types';
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
 *   Version.V0,
 *   BigInt("123"),
 *   BigInt("1"),
 *   transferData
 * );
 * const signedTx = TransactionManager.sign(tx, userKeyPair);
 * ```
 */
export class TransactionManager {
  /**
   * Creates a new transaction with the specified parameters and encoded payload.
   *
   * @template T - The type of the transaction data
   * @param {TransactionType} type - The type of transaction to create
   * @param {number} version - The transaction protocol version
   * @param {bigint} from - The sender's wallet ID
   * @param {bigint} nonce - Transaction sequence number
   * @param {T} data - The transaction data to encode
   * @returns {Transaction} A new transaction instance with encoded payload
   *
   * @example
   * ```typescript
   * const transferData = { to: "0x123", amount: "100" };
   * const tx = TransactionManager.createTransaction(
   *   TransactionType.Transfer,
   *   Version.V0,
   *   BigInt("123"),
   *   BigInt("1"),
   *   transferData
   * );
   * ```
   */
  static createTransaction<T>(
    type: TransactionType,
    version: number,
    from: bigint,
    nonce: bigint,
    data: T
  ): Transaction {
    const payload = TxPayloadEncoder.encode(data);
    return new Transaction(version, type, from, nonce, payload);
  }

  /**
   * Signs a transaction using the provided user keypair.
   * Creates a recoverable signature that includes the recovery ID.
   *
   * @param {Transaction} transaction - The transaction to sign
   * @param {UserKeyPair} userKeyPair - The keypair to sign with
   * @returns {Transaction} A new transaction instance with the signature attached
   * @throws {Error} If signing fails or the keypair is invalid
   *
   * @example
   * ```typescript
   * const userKeyPair = {
   *   publicKey: "04...",
   *   privateKey: "..."
   * };
   * const signedTx = TransactionManager.sign(tx, userKeyPair);
   * ```
   */
  static sign(transaction: Transaction, userKeyPair: UserKeyPair): Transaction {
    return transaction.sign(userKeyPair);
  }
}
