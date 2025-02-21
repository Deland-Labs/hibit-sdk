// @ts-ignore
import cbor from 'borc';
import { Buffer } from 'buffer';
import BigNumber from 'bignumber.js';
import 'reflect-metadata';
import { Chain, ChainAssetType, ChainNetwork } from '../types';
import { ReflectHelper } from './reflect-helper.ts';

export class HibitChainSerializer {
  private static createCborArray(data: any): any[] {
    if (!data) {
      return [];
    }

    const names = Object.getOwnPropertyNames(data);
    const cborData = [];

    for (const name of names) {
      const value = data[name];
      const index = ReflectHelper.getCborIndex(data, name);

      if (index !== undefined) {
        cborData[index] = this.processValue(value, data, name);
      }
    }

    return cborData;
  }

  private static processValue(value: any, data: any, name: string): any {
    if (value === undefined) {
      return null;
    } else if (value instanceof BigNumber) {
      return value;
    } else if (value instanceof Chain || value instanceof ChainNetwork || value instanceof ChainAssetType) {
      return value.value;
    } else if (value instanceof Uint8Array) {
      return value;
    } else if (value instanceof Array) {
      return this.processArray(value);
    } else if (value instanceof Object) {
      return this.createCborArray(value);
    } else {
      return this.processPrimitive(value, data, name);
    }
  }

  private static processArray(array: any[]): any[] {
    return array.map((item) => this.createCborArray(item));
  }

  private static processPrimitive(value: any, data: any, name: string): any {
    const isBigUint = ReflectHelper.isCborBigUint(data, name);

    if (isBigUint) {
      return value == null ? null : BigNumber(value.toString());
    } else {
      return value;
    }
  }

  public static Encode(data: any): Buffer {
    const reorganizedData = this.createCborArray(data);
    return Buffer.from(cbor.encode(reorganizedData));
  }
}
