import { cborBigUintKey, cborIndexMetadataKey } from './decorator.ts';

export class ReflectHelper {
  /**
   * Retrieves the CBOR index metadata for a property.
   *
   * @param target - The target object.
   * @param propertyKey - The property key.
   * @returns The CBOR index metadata.
   */
  static getCborIndex(target: any, propertyKey: string) {
    return Reflect.getMetadata(cborIndexMetadataKey, target, propertyKey);
  }

  /**
   * Checks if a property is marked as a BigUint for CBOR serialization.
   *
   * @param target - The target object.
   * @param propertyKey - The property key.
   * @returns `true` if the property is marked as a BigUint, otherwise `undefined`.
   */
  static isCborBigUint(target: any, propertyKey: string) {
    return Reflect.getMetadata(cborBigUintKey, target, propertyKey);
  }
}
