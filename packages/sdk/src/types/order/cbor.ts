import { OrderCategory, OrderSide } from '../enums';
import BigNumber from 'bignumber.js';
import { CancelSpotOrderInput, LimitOrderDetails, SubmitSpotOrderInput, SwapV2OrderDetails } from '.';
import { cborIndex, cborBigUint } from '../../encoder/decorator.ts';

/**
 * Input class for creating a new spot order in the trading system.
 * Supports both limit orders and swap V2 orders through their respective detail objects.
 */
export class SubmitSpotOrderCborInput {
  /**
   * The category of the order (e.g., LIMIT, MARKET, SWAP_V2)
   * @decorators {@cborIndex(0)} {@cborBigUint()}
   */
  @cborIndex(0)
  @cborBigUint()
  // @ts-ignore
  public orderCategory: OrderCategory;

  /**
   * The ID of the market where the order will be placed
   * @decorators {@cborIndex(1)}
   */
  @cborIndex(1)
  // @ts-ignore
  public marketId: bigint;

  /**
   * Optional details specific to limit orders
   * Required when orderCategory is OrderCategory.LIMIT
   * @decorators {@cborIndex(2)}
   */
  @cborIndex(2)
  public limitOrderDetails?: LimitOrderDetailsCbor;

  /**
   * Optional details specific to swap V2 orders
   * Required when orderCategory is OrderCategory.SWAP_V2
   * @decorators {@cborIndex(3)}
   */
  @cborIndex(3)
  public swapV2OrderDetails?: SwapV2OrderDetailsCbor;

  /**
   * Creates a new instance of SubmitSpotOrderCborInput
   * @param {Partial<SubmitSpotOrderInput>} init - Initial values for the spot order
   */
  constructor(init?: Partial<SubmitSpotOrderCborInput>) {
    Object.assign(this, init);
  }
}

/**
 * Details for a limit order in the trading system.
 * Used when creating a new spot order with OrderCategory.LIMIT.
 *
 * @class LimitOrderDetails
 * @example
 * ```typescript
 * const limitDetails = new LimitOrderDetails({
 *   orderSide: OrderSide.BUY,
 *   price: BigNumber.from("100"),
 *   volume: BigNumber.from("10")
 * });
 * ```
 */
export class LimitOrderDetailsCbor {
  /**
   * The side of the order (buy/sell)
   * @decorators {@cborIndex(0)} {@cborBigUint()}
   */
  @cborIndex(0)
  @cborBigUint()
  // @ts-ignore
  public orderSide: OrderSide;

  /**
   * The limit price for the order
   * @decorators {@cborIndex(1)}
   */
  @cborIndex(1)
  // @ts-ignore
  public price: BigNumber;

  /**
   * The volume of tokens to trade
   * @decorators {@cborIndex(2)}
   */
  @cborIndex(2)
  // @ts-ignore
  public volume: BigNumber;

  /**
   * Creates a new instance of LimitOrderDetailsCbor
   * @param {Partial<LimitOrderDetailsCbor>} init - Initial values for the limit order details
   */
  public constructor(init?: Partial<LimitOrderDetailsCbor>) {
    Object.assign(this, init);
  }
}

export class CancelOrdersCborInput {
  @cborIndex(0)
  // @ts-ignore
  public marketId?: bigint;
  @cborIndex(1)
  public orderId?: string;
  @cborIndex(2)
  @cborBigUint()
  public orderSide?: OrderSide;
  @cborIndex(3)
  public isCancelAll: boolean;

  public constructor(init?: Partial<CancelOrdersCborInput>) {
    this.isCancelAll = false;
    Object.assign(this, init);
  }
}

/**
 * Details for a V2 swap order in the trading system.
 * Used when creating a new spot order with OrderCategory.SWAP_V2.
 */
export class SwapV2OrderDetailsCbor {
  /**
   * The exact amount of tokens to swap
   * @decorators {@cborIndex(0)}
   */
  @cborIndex(0)
  // @ts-ignore
  public exactTokens: BigNumber;

  /**
   * Specifies whether exactTokens is input or output amount
   * @decorators {@cborIndex(1)} {@cborBigUint()}
   */
  @cborIndex(1)
  @cborBigUint()
  // @ts-ignore
  public exactTokensType: SwapV2ExactTokensType;

  /**
   * The side of the swap order (buy/sell)
   * @decorators {@cborIndex(2)} {@cborBigUint()}
   */
  @cborIndex(2)
  @cborBigUint()
  // @ts-ignore
  public orderSide: OrderSide;

  /**
   * Minimum output amount for the swap
   * Required when exactTokensType is INPUT
   * @decorators {@cborIndex(3)}
   */
  @cborIndex(3)
  public minOut?: BigNumber;

  /**
   * Maximum input amount for the swap
   * Required when exactTokensType is OUTPUT
   * @decorators {@cborIndex(4)}
   */
  @cborIndex(4)
  public maxIn?: BigNumber;

  /**
   * Creates a new instance of SwapV2OrderDetailsCbor
   *
   * @param {Partial<SwapV2OrderDetailsCbor>} init - Initial values for the swap order details
   */
  public constructor(init?: Partial<SwapV2OrderDetailsCbor>) {
    Object.assign(this, init);
  }
}

// TODO: add decimals mapping
export function mapSwapV2OrderDetails(swapV2OrderDetails: SwapV2OrderDetails): SwapV2OrderDetailsCbor {
  return {
    exactTokens: new BigNumber(swapV2OrderDetails.exactTokens),
    exactTokensType: swapV2OrderDetails.exactTokensType,
    orderSide: swapV2OrderDetails.orderSide,
    minOut: swapV2OrderDetails.minOut ? new BigNumber(swapV2OrderDetails.minOut) : undefined,
    maxIn: swapV2OrderDetails.maxIn ? new BigNumber(swapV2OrderDetails.maxIn) : undefined
  };
}

// TODO: add decimals mapping
export function mapLimitOrderDetails(limitOrderDetails: LimitOrderDetails): LimitOrderDetailsCbor {
  return {
    orderSide: limitOrderDetails.orderSide,
    price: new BigNumber(limitOrderDetails.price),
    volume: new BigNumber(limitOrderDetails.volume)
  };
}

export function mapSubmitSpotOrderCborInput(input: SubmitSpotOrderInput): SubmitSpotOrderCborInput {
  return {
    orderCategory: input.orderCategory,
    marketId: input.marketId,
    limitOrderDetails: input.limitOrderDetails ? mapLimitOrderDetails(input.limitOrderDetails) : undefined,
    swapV2OrderDetails: input.swapV2OrderDetails ? mapSwapV2OrderDetails(input.swapV2OrderDetails) : undefined
  };
}

export function mapCancelOrdersCborInput(input: CancelSpotOrderInput): CancelOrdersCborInput {
  return {
    marketId: input.marketId,
    orderId: input.orderId,
    orderSide: input.orderSide,
    isCancelAll: input.isCancelAll!
  };
}
