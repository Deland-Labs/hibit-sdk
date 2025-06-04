import { TransactionType, Version } from './enums';
import { hmac } from '@noble/hashes/hmac';
import { sha256 } from '@noble/hashes/sha256';
//@ts-expect-error no types for borc
import cbor from 'borc';
import * as secp from '@noble/secp256k1';
import { Chain, ChainNetwork, HexString } from './index';
import { Buffer } from 'buffer';
import { PostV1TxSubmitSpotOrderData } from '../openapi';
import { Options } from '@hey-api/client-fetch';
import BigNumber from 'bignumber.js';
import { Keypair } from '../Keypair.ts';

/**
 * Represents a transaction with the original signature.
 * Used for wallet operations that require signature verification.
 */
export class OriginWalletTransaction {
  /**
   * The blockchain type of the wallet.
   */
  chain: Chain;

  /**
   * The network of the blockchain.
   */
  chainNetwork: ChainNetwork;

  /**
   * The message content of the request, typically a plain text.
   */
  message: string;

  /**
   * The cryptographic signature.
   */
  signature: string;

  /**
   * Creates a new OriginWalletTransaction instance.
   *
   * @param chain - The blockchain type of the wallet
   * @param chainNetwork - The network of the blockchain
   * @param message - The message content of the request
   * @param signature - The cryptographic signature (optional)
   */
  constructor(chain: Chain, chainNetwork: ChainNetwork, message: string, signature?: string) {
    this.chain = chain;
    this.chainNetwork = chainNetwork;
    this.message = message;
    this.signature = signature || '';
  }
}

// Set the hmacSha256Sync function
secp.etc.hmacSha256Sync = (key, ...msgs) => hmac(sha256, key, secp.etc.concatBytes(...msgs));
/**
 * Represents a transaction in the system.
 * Handles transaction data encoding, hashing, and signature management.
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
   * @param {TransactionType} type - The type of transaction
   * @param {bigint} from - The sender's wallet ID
   * @param {bigint} nonce - Transaction sequence number
   * @param {Uint8Array} payload - Encoded transaction payload
   * @param {Version} version - The transaction version, defaults to V0
   */
  constructor(type: TransactionType, from: bigint, nonce: bigint, payload: Uint8Array, version: Version = Version.V0) {
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
    const txData = [
      this.version,
      BigNumber(this.type),
      BigNumber(this.from.toString()),
      BigNumber(this.nonce.toString()),
      this.payload
    ];
    return cbor.encode(txData);
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

  /**
   * Signs the transaction with the provided private key using secp256k1.
   * The signature includes a recovery ID for public key recovery.
   *
   * @param {HexString} privateKey - The private key in hex format to sign the transaction
   * @returns {Transaction} The transaction instance with the signature attached
   * @throws {Error} If signing fails or the private key is invalid
   *
   * @example
   * ```typescript
   * const tx = new Transaction(
   *   TransactionType.Transfer,
   *   BigInt("123"),
   *   BigInt("1"),
   *   payload
   * );
   * tx.sign("0123456789abcdef..."); // hex private key
   * ```
   */
  sign(privateKey: HexString): Transaction {
    // Create a keypair from the private key and use it to sign the hash
    const keypair = new Keypair(privateKey);
    this.signature = keypair.sign(this.hash());
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

/**
 * Maps a Transaction instance to the API request format.
 * Converts internal transaction representation to the format expected by the API.
 *
 * @param {Transaction} transaction - The transaction to convert
 * @returns {Ex3TransactionsL2Request} The formatted API request object
 * @throws {Error} If the transaction is not signed
 */
export function mapTransactionToApiRequest(transaction: Transaction): Options<PostV1TxSubmitSpotOrderData, boolean> {
  if (!transaction.isSigned()) {
    throw new Error('Transaction must be signed before mapping to API request');
  }

  const options = {} as Options<PostV1TxSubmitSpotOrderData, boolean>;
  options.body = {
    type: transaction.type.toString(),
    userId: transaction.from.toString(),
    nonce: transaction.nonce.toString(),
    message: Buffer.from(transaction.payload).toString('hex'),
    hash: Buffer.from(transaction.hash()).toString('hex'),
    signature: Buffer.from(transaction.signature!).toString('hex')
  };

  return options;
}
