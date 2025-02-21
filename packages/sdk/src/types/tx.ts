import { HexString, TransactionType } from './index.ts';

export interface Transaction {
  type: TransactionType;
  version: number;
  userId: bigint;
  nonce: bigint;
  message: HexString;
  hash: HexString;
  signature: HexString;
}
