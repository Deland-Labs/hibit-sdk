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
    return new OrderId(new BigNumber(`0x${value}`));
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
