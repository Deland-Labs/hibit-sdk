import { BigNumber } from 'bignumber.js';

/**
 * Convert value to the smallest unit based on decimals
 * @param {number} amount - Value to convert
 * @param {number} decimals - Number of decimals
 * @returns {string} - Smallest unit value as string
 *
 * Example:
 * ```typescript
 * const amount = 1.5;  // 1.5 value
 * const decimals = 18;  // Number of decimals
 * const smallestUnitAmount = toSmallestUnit(amount, decimals);
 * console.log(`${amount} converted to smallest unit equals ${smallestUnitAmount}`);
 * ```
 */
export function toSmallestUnit(amount: number, decimals: number): bigint {
  const amountBN = new BigNumber(amount);
  const decimalsBN = new BigNumber(10).pow(decimals);
  return BigInt(amountBN.multipliedBy(decimalsBN).toFixed(0));
}

/**
 * Convert value from the smallest unit back to decimal format based on decimals
 * @param {bigint | string} smallestUnitAmount - Smallest unit value to convert
 * @param {number} decimals - Number of decimals
 * @returns {number} - Decimal value as number
 *
 * Example:
 * ```typescript
 * const smallestUnitAmount = BigInt("1500000000000000000");  // 1.5 ETH in wei
 * const decimals = 18;  // ETH decimals
 * const amount = fromSmallestUnit(smallestUnitAmount, decimals);
 * console.log(`${smallestUnitAmount} smallest unit converts to ${amount}`); // 1.5
 * ```
 */
export function fromSmallestUnit(smallestUnitAmount: bigint | string, decimals: number): number {
  const amountBN = new BigNumber(smallestUnitAmount.toString());
  const decimalsBN = new BigNumber(10).pow(decimals);
  return amountBN.dividedBy(decimalsBN).toNumber();
}
