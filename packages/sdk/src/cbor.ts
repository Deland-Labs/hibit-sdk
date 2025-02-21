import { Buffer } from 'buffer';
// @ts-ignore
import cbor from 'borc';
import * as secp from '@noble/secp256k1';
import { Signature } from '@noble/secp256k1';
import BigNumber from 'bignumber.js';
import 'reflect-metadata';
import { Chain, ChainAssetType, ChainNetwork, TransactionType } from './types';
import { cborIndexMetadataKey, cborBigUintKey } from './cbor.metadata';

export type HexString = string;

function getCborIndex(target: any, propertyKey: string) {
  return Reflect.getMetadata(cborIndexMetadataKey, target, propertyKey);
}

function getCborBigInt(target: any, propertyKey: string) {
  // if the property is a bigint, then return true

  return Reflect.getMetadata(cborBigUintKey, target, propertyKey);
}

export class CborDataFactory {
  public static createCborArray(data: any): any[] {
    if (!data) {
      return [];
    }
    const names = Object.getOwnPropertyNames(data);
    const cborData = [];
    for (const name of names) {
      const value = data[name];
      const index = getCborIndex(data, name);
      const isBigUint = getCborBigInt(data, name);
      if (index !== undefined) {
        // is value is a class, then recursively call createCborData
        if (value === undefined) {
          cborData[index] = null;
        } else if (value instanceof BigNumber) {
          cborData[index] = value;
        } else if (value instanceof Chain) {
          cborData[index] = value.value;
        } else if (value instanceof ChainNetwork) {
          cborData[index] = value.value;
        } else if (value instanceof ChainAssetType) {
          cborData[index] = value.value;
        } else if (value instanceof Uint8Array) {
          cborData[index] = value;
        } else {
          if (value instanceof Array) {
            const valueArray = [];
            for (let i = 0; i < value.length; i++) {
              valueArray.push(this.createCborArray(value[i]));
            }
            cborData[index] = valueArray;
          } else if (value instanceof Object) {
            cborData[index] = this.createCborArray(value);
          } else {
            if (isBigUint || typeof value === 'bigint' || typeof value === 'number') {
              if (value == null) {
                cborData[index] = null;
              } else {
                cborData[index] = BigNumber(value.toString());
              }
            } else {
              cborData[index] = value;
            }
          }
        }
      }
    }
    return cborData;
  }

  public static Encode(data: any): Buffer {
    return Buffer.from(cbor.encode(CborDataFactory.createCborArray(data)));
  }
}

export interface ClientRequest {
  type: TransactionType;
  version: number;
  userId: BigNumber;
  nonce: BigNumber;
  message: HexString;
  hash: HexString;
  signature: HexString;
}

export interface UserKeyPair {
  privateKey: string;
}

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
    userId: BigNumber,
    nonce: BigNumber,
    data: T,
    userKeyPair: UserKeyPair
  ): Promise<ClientRequest> {
    const messageBytes = CborDataFactory.Encode(data);
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
