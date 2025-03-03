import { BigNumber } from 'bignumber.js';

export class OrderId {
  value: BigNumber;

  constructor(value: BigNumber) {
    this.value = value;
  }

  static fromString(value: string): OrderId {
    if (!value) {
      throw new Error('Invalid OrderId');
    }
    // Remove '0x' prefix if it exists, then add it back to ensure consistent format
    const cleanedValue = value.toLowerCase().startsWith('0x') ? value.slice(2) : value;

    // Validate that it's a valid hex string
    if (!/^[0-9a-f]+$/i.test(cleanedValue)) {
      throw new Error('Invalid OrderId: not a valid hex string');
    }

    return new OrderId(new BigNumber(`0x${cleanedValue}`));
  }

  toString(): string {
    return this.value.toString();
  }

  equals(other: OrderId): boolean {
    if (!other) {
      return false;
    }
    return this.value.isEqualTo(other.value);
  }
}
