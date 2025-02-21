import 'reflect-metadata';

/**
 * Metadata key for CBOR index.
 */
export const cborIndexMetadataKey = Symbol('format');

/**
 * Metadata key for CBOR BigUint.
 */
export const cborBigUintKey = Symbol('cbor_biguint');

/**
 * Decorator to define the CBOR index for a property.
 *
 * @param index - The index to be used in CBOR serialization.
 * @returns A property decorator function.
 */
export function cborIndex(index: number) {
  return Reflect.metadata(cborIndexMetadataKey, index);
}

/**
 * Decorator to mark a property as a BigUint for CBOR serialization.
 *
 * @returns A property decorator function.
 */
export function cborBigUint() {
  return Reflect.metadata(cborBigUintKey, true);
}