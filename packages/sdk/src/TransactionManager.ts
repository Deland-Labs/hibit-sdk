// @ts-ignore
import cbor from 'borc';
import { Transaction, TransactionType, UserKeyPair } from './types';
import * as secp from '@noble/secp256k1';
import { Buffer } from 'buffer';
import { Signature } from '@noble/secp256k1';
import { HibitChainSerializer } from './serialize/serializer.ts';

export class ClientRequestFactory {
  static async createEx3L2HeaderToken(userKeyPair: UserKeyPair): Promise<string> {
    const msg = `Ex3L2:${new Date().getTime()}`;
    const hash = await secp.utils.sha256(Buffer.from(msg, 'utf-8'));
    let [signature, recId] = await secp.sign(hash, Buffer.from(userKeyPair.privateKey, 'hex'), {
      recovered: true
    });
    const s = Signature.fromDER(Buffer.from(signature).toString('hex'));

    // concat recId to signature
    const recoverableSignature = Buffer.concat([s.toCompactRawBytes(), Buffer.from([recId])]);
    // hasHex.messageHex:signatureHex
    return `${Buffer.from(msg).toString('hex')}.${Buffer.from(recoverableSignature).toString('hex')}`;
  }

  static async createRequest<T>(
    txType: TransactionType,
    version: number,
    userId: bigint,
    nonce: bigint,
    data: T,
    userKeyPair: UserKeyPair
  ): Promise<Transaction> {
    const messageBytes = HibitChainSerializer.Encode(data);
    let txData = [version, txType.value, userId, nonce, messageBytes];
    const txBytes = cbor.encode(txData);

    let hash = await secp.utils.sha256(txBytes);
    let [signature, recId] = await secp.sign(hash, Buffer.from(userKeyPair.privateKey, 'hex'), {
      recovered: true
    });
    const s = Signature.fromDER(Buffer.from(signature).toString('hex'));

    // concat recId to signature
    const recoverableSignature = Buffer.concat([s.toCompactRawBytes(), Buffer.from([recId])]);
    return {
      type: txType,
      version,
      userId,
      nonce,
      message: Buffer.from(messageBytes).toString('hex'),
      hash: Buffer.from(hash).toString('hex'),
      signature: Buffer.from(recoverableSignature).toString('hex')
    };
  }
}
