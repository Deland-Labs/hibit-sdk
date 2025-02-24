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
