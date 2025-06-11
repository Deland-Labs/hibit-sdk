/**
 * Enum representing the status of an agent order.
 */
export enum AgentOrderStatus {
  /**
   * The order has been accepted.
   */
  Accepted = 0,

  /**
   * The order related payment tx has been confirmed.
   */
  PaymentConfirmed = 1,

  /**
   * The order is pending execution.
   */
  PendingExecution = 2,

  /**
   * The order has been executed.
   */
  Executed = 3,

  /**
   * The order tx has been submitted successfully.
   */
  Succeeded = 4,

  /**
   * The order has been rejected.
   */
  Cancelled = 5,

  /**
   * The order is pending withdrawal.
   */
  PendingWithdraw = 6,

  /**
   * The order has been withdrawn.
   */
  Withdrawn = 7,

  /**
   * The order is pending refund.
   */
  PendingRefund = 8,

  /**
   * The order refunded.
   */
  Refunded = 9
}

/**
 * Utility function to convert a string to AgentOrderStatus enum.
 * @param value - The string value to convert
 * @returns The corresponding AgentOrderStatus enum value or undefined if not found
 */
export function toAgentOrderStatus(value: string | number): AgentOrderStatus | undefined {
  if (typeof value === 'number') {
    return Object.values(AgentOrderStatus).includes(value) ? (value as AgentOrderStatus) : undefined;
  }

  const enumKey = Object.keys(AgentOrderStatus).find((key) => key.toLowerCase() === value.toLowerCase());

  return enumKey ? AgentOrderStatus[enumKey as keyof typeof AgentOrderStatus] : undefined;
}
