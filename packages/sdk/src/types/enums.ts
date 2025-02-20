/**
 * Enum representing different time intervals for tick spacing.
 */
export enum TickSpace {
  /**
   * 1 minute
   */
  OneMinute = 1,

  /**
   * 5 minutes
   */
  FiveMinutes = 2,

  /**
   * 15 minutes
   */
  FifteenMinutes = 3,

  /**
   * 30 minutes
   */
  ThirtyMinutes = 4,

  /**
   * 1 hour
   */
  OneHour = 5,

  /**
   * 4 hours
   */
  FourHours = 6,

  /**
   * 1 day
   */
  OneDay = 7,

  /**
   * 1 week
   */
  OneWeek = 8,

  /**
   * 1 month
   */
  OneMonth = 9
}

/**
 * Enum representing the side of an order.
 */
export enum OrderSide {
  /**
   * Ask
   */
  Ask = 1,

  /**
   * Bid
   */
  Bid = 2
}

/**
 * Enumeration representing different depth levels.
 *
 * @enum {number}
 * @property {number} L1 - Level 1 depth.
 * @property {number} L2 - Level 2 depth.
 * @property {number} L3 - Level 3 depth.
 * @property {number} L4 - Level 4 depth.
 * @property {number} L5 - Level 5 depth.
 * @property {number} L6 - Level 6 depth.
 */
export enum DepthIndex {
  L1 = 1,
  L2 = 2,
  L3 = 3,
  L4 = 4,
  L5 = 5,
  L6 = 6
}
