// @ts-ignore
import cbor from 'borc';
import { Buffer } from 'buffer';
import BigNumber from 'bignumber.js';
import 'reflect-metadata';
import { Chain, ChainNetwork } from '../types';
import { ReflectHelper } from './reflect-helper.ts';

/**
 * Hibit chain transaction's payload encoder.
 */
export class TxPayloadEncoder {
  /**
   * Encodes the given data into a CBOR buffer.
   *
   * @param data - The data to encode.
   * @returns The encoded data as a Buffer.
   */
  public static encode(data: Object): Buffer {
    const reorganizedData = this.createCborArray(data);
    return Buffer.from(cbor.encode(reorganizedData));
  }

  /**
   * Creates a CBOR array from the given data.
   *
   * @param data - The data to convert.
   * @returns The CBOR array.
   */
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

  /**
   * Processes a value for CBOR encoding.
   *
   * @param value - The value to process.
   * @param data - The original data object.
   * @param name - The property name of the value.
   * @returns The processed value.
   */
  private static processValue(value: any, data: any, name: string): any {
    if (value === undefined) {
      return null;
    } else if (value instanceof BigNumber) {
      return value;
    } else if (value instanceof Chain || value instanceof ChainNetwork) {
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

  /**
   * Processes an array for CBOR encoding.
   *
   * @param array - The array to process.
   * @returns The processed array.
   */
  private static processArray(array: any[]): any[] {
    return array.map((item) => this.createCborArray(item));
  }

  /**
   * Processes a primitive value for CBOR encoding.
   *
   * @param value - The value to process.
   * @param data - The original data object.
   * @param name - The property name of the value.
   * @returns The processed value.
   */
  private static processPrimitive(value: any, data: any, name: string): any {
    const isBigUint = ReflectHelper.isCborBigUint(data, name);

    if (isBigUint || typeof value === 'bigint' || typeof value === 'number') {
      return value == null ? null : BigNumber(value.toString());
    } else {
      return value;
    }
  }
}
