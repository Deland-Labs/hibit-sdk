import { OrderCategory, OrderSide, SwapV2ExactTokensType } from '../enums';
import { CancelSpotOrderInput, DecimalOptions, LimitOrderDetails, SubmitSpotOrderInput, SwapV2OrderDetails } from '.';
import { cborIndex, cborBigUint } from '../../encoder/decorator';
import { toSmallestUnit } from '../../utils';
import { PRICE_DECIMALS } from '../../constant';

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
  //@ts-expect-error no initializer and is not definitely assigned in the constructor
  public orderCategory: OrderCategory;

  /**
   * The ID of the market where the order will be placed
   * @decorators {@cborIndex(1)}
   */
  @cborIndex(1)
  //@ts-expect-error no initializer and is not definitely assigned in the constructor
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
  //@ts-expect-error no initializer and is not definitely assigned in the constructor
  public orderSide: OrderSide;

  /**
   * The limit price for the order
   * @decorators {@cborIndex(1)}
   */
  @cborIndex(1)
  //@ts-expect-error no initializer and is not definitely assigned in the constructor
  public price: bigint;

  /**
   * The volume of tokens to trade
   * @decorators {@cborIndex(2)}
   */
  @cborIndex(2)
  //@ts-expect-error no initializer and is not definitely assigned in the constructor
  public volume: bigint;

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
  //@ts-expect-error no initializer and is not definitely assigned in the constructor
  public exactTokens: bigint;

  /**
   * Specifies whether exactTokens is input or output amount
   * @decorators {@cborIndex(1)} {@cborBigUint()}
   */
  @cborIndex(1)
  @cborBigUint()
  //@ts-expect-error no initializer and is not definitely assigned in the constructor
  public exactTokensType: SwapV2ExactTokensType;

  /**
   * The side of the swap order (buy/sell)
   * @decorators {@cborIndex(2)} {@cborBigUint()}
   */
  @cborIndex(2)
  @cborBigUint()
  //@ts-expect-error no initializer and is not definitely assigned in the constructor
  public orderSide: OrderSide;

  /**
   * Minimum output amount for the swap
   * Required when exactTokensType is INPUT
   * @decorators {@cborIndex(3)}
   */
  @cborIndex(3)
  public minOut?: bigint;

  /**
   * Maximum input amount for the swap
   * Required when exactTokensType is OUTPUT
   * @decorators {@cborIndex(4)}
   */
  @cborIndex(4)
  public maxIn?: bigint;

  /**
   * Creates a new instance of SwapV2OrderDetailsCbor
   *
   * @param {Partial<SwapV2OrderDetailsCbor>} init - Initial values for the swap order details
   */
  public constructor(init?: Partial<SwapV2OrderDetailsCbor>) {
    Object.assign(this, init);
  }
}

export function mapSwapV2OrderDetails(
  swapV2OrderDetails: SwapV2OrderDetails,
  decimalOptions: DecimalOptions
): SwapV2OrderDetailsCbor {
  let exactTokenDecimals: number;
  let minOutDecimals: number;
  let maxInDecimals: number;

  if (swapV2OrderDetails.exactTokensType === SwapV2ExactTokensType.Source) {
    exactTokenDecimals =
      swapV2OrderDetails.orderSide === OrderSide.Ask
        ? decimalOptions.baseAssetDecimals
        : decimalOptions.quoteAssetDecimals;
    minOutDecimals =
      swapV2OrderDetails.orderSide === OrderSide.Ask
        ? decimalOptions.quoteAssetDecimals
        : decimalOptions.baseAssetDecimals;
    maxInDecimals =
      swapV2OrderDetails.orderSide === OrderSide.Ask
        ? decimalOptions.baseAssetDecimals
        : decimalOptions.quoteAssetDecimals;
  } else {
    exactTokenDecimals =
      swapV2OrderDetails.orderSide === OrderSide.Ask
        ? decimalOptions.quoteAssetDecimals
        : decimalOptions.baseAssetDecimals;
    minOutDecimals =
      swapV2OrderDetails.orderSide === OrderSide.Ask
        ? decimalOptions.baseAssetDecimals
        : decimalOptions.quoteAssetDecimals;
    maxInDecimals =
      swapV2OrderDetails.orderSide === OrderSide.Ask
        ? decimalOptions.quoteAssetDecimals
        : decimalOptions.baseAssetDecimals;
  }

  return new SwapV2OrderDetailsCbor({
    exactTokens: toSmallestUnit(swapV2OrderDetails.exactTokens, exactTokenDecimals),
    exactTokensType: swapV2OrderDetails.exactTokensType,
    orderSide: swapV2OrderDetails.orderSide,
    minOut: swapV2OrderDetails.minOut ? toSmallestUnit(swapV2OrderDetails.minOut, minOutDecimals) : undefined,
    maxIn: swapV2OrderDetails.maxIn ? toSmallestUnit(swapV2OrderDetails.maxIn, maxInDecimals) : undefined
  });
}

export function mapLimitOrderDetails(
  limitOrderDetails: LimitOrderDetails,
  decimalOptions: DecimalOptions
): LimitOrderDetailsCbor {
  return new LimitOrderDetailsCbor({
    orderSide: limitOrderDetails.orderSide,
    price: toSmallestUnit(limitOrderDetails.price, PRICE_DECIMALS),
    volume: toSmallestUnit(limitOrderDetails.volume, decimalOptions.baseAssetDecimals)
  });
}

export function mapSubmitSpotOrderCborInput(
  input: SubmitSpotOrderInput,
  decimalOptions: DecimalOptions
): SubmitSpotOrderCborInput {
  return new SubmitSpotOrderCborInput({
    orderCategory: input.orderCategory,
    marketId: input.marketId,
    limitOrderDetails: input.limitOrderDetails
      ? mapLimitOrderDetails(input.limitOrderDetails, decimalOptions)
      : undefined,
    swapV2OrderDetails: input.swapV2OrderDetails
      ? mapSwapV2OrderDetails(input.swapV2OrderDetails, decimalOptions)
      : undefined
  });
}

export function mapCancelOrdersCborInput(input: CancelSpotOrderInput): CancelOrdersCborInput {
  return new CancelOrdersCborInput({
    marketId: input.marketId,
    orderId: input.orderId,
    orderSide: input.orderSide,
    isCancelAll: input.isCancelAll!
  });
}
