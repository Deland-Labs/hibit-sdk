export enum WalletSignatureSchema {
  BtcEcdsa = '0x3e8',
  EvmEcdsa = '0x3e9',
  TronEcdsa = '0x3ea',
  TonEddsaOpenMask = '0x7d0',
  SolanaEddsa = '0x7da',
  IcpEddsa = '0x7e4',
  KaspaSchnorr = '0xbc2'
}

export enum Ecosystem {
  EVM = 'EVM',
  Bitcoin = 'Bitcoin',
  Solana = 'Solana',
  Tron = 'Tron',
  Ton = 'Ton',
  IC = 'ICP',
  Kaspa = 'Kaspa'
}

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

/**
 * Enum representing the different categories of orders.
 *
 * @enum {number}
 * @property {number} LimitOrder - A limit order.
 * @property {number} SwapOrder - A swap order.
 */
export enum OrderCategory {
  LimitOrder,
  SwapOrder
}

/**
 * Enum representing signature schema types for ex3 key signatures.
 * Used for cryptographic operations in the trading system.
 *
 * @enum {number}
 * @property {number} Secp256k1 - The secp256k1 elliptic curve signature schema
 */
export enum SignaturesSchema {
  /**
   * The secp256k1 elliptic curve signature schema.
   * Used for Bitcoin-style public key cryptography.
   */
  Secp256k1
}

/**
 * Enum representing the token type specification for V2 swaps.
 * Determines whether the exact amount specified is for input or output tokens.
 *
 * @enum {number}
 * @property {number} Source - Exact amount specified is input tokens
 * @property {number} Target - Exact amount specified is output tokens
 *
 * @example
 * ```typescript
 * // For exact input amount
 * const swapType = SwapV2ExactTokensType.Source;
 *
 * // For exact output amount
 * const swapType = SwapV2ExactTokensType.Target;
 * ```
 */
export enum SwapV2ExactTokensType {
  /**
   * Indicates the exact amount specified is for source/input tokens
   */
  Source,
  /**
   * Indicates the exact amount specified is for target/output tokens
   */
  Target
}
