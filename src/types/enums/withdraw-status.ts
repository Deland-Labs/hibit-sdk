/**
 * Enum representing the status of a withdrawal.
 */
export enum WithdrawalStatus {
  /**
   * The withdrawal is pending.
   */
  Pending = 0,

  /**
   * The withdrawal has been completed.
   */
  Completed = 1
}

/**
 * Utility function to convert a string to WithdrawalStatus enum.
 * @param value - The string value to convert
 * @returns The corresponding WithdrawalStatus enum value or undefined if not found
 */
export function toWithdrawalStatus(value: string | number): WithdrawalStatus | undefined {
  if (typeof value === 'number') {
    return Object.values(WithdrawalStatus).includes(value) ? (value as WithdrawalStatus) : undefined;
  }

  const enumKey = Object.keys(WithdrawalStatus).find((key) => key.toLowerCase() === value.toLowerCase());

  return enumKey ? WithdrawalStatus[enumKey as keyof typeof WithdrawalStatus] : undefined;
}
