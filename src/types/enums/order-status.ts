/**
 * Enum representing the status of an order.
 *
 * @enum {number}
 * @property {number} Created - The order has been created.
 * @property {number} Fulfilled - The order has been fulfilled.
 * @property {number} Cancelled - The order has been cancelled.
 */
export enum OrderStatus {
  Created = 0,
  Fulfilled = 1,
  Cancelled = 2
}
