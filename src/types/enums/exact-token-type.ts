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
