import 'reflect-metadata';

export const cborIndexMetadataKey = Symbol('format');
export const cborBigUintKey = Symbol('cbor_biguint');

export function cborIndex(index: number) {
  return Reflect.metadata(cborIndexMetadataKey, index);
}

export function cborBigInt() {
  return Reflect.metadata(cborBigUintKey, true);
}
