import { Options } from '@hey-api/client-fetch';
import {
  Ex3ExchangeOpenApiAppServicesWalletOrderDto,
  Ex3ExchangeOpenApiAppServicesWalletOrderTradeListItem,
  GetV1OrdersData,
  GetV1OrdersTradesData
} from '../client';
import { OrderCategory, OrderSide, OrderStatus } from './enums';
import { cborIndex, cborBigInt } from '../cbor.metadata';
import BigNumber from 'bignumber.js';

export type GetOrdersInput = {
  /**
   * status to filter the orders, if null, means all statuses.
   */
  status?: Array<OrderStatus>;
  /**
   * marketId, if null, means all markets
   */
  marketId?: string;
  /**
   * order category, if null, means all categories.
   */
  orderCategory?: OrderCategory;
  /**
   * order side, if null, means all sides.
   */
  orderSide?: OrderSide;
  /**
   * order created at after this time
   */
  createdAtStart?: unknown;
  /**
   * order created at before this time
   */
  createdAtEnd?: unknown;
  /**
   * maximum number of items to return. maximum value is 500.
   */
  limit?: number;
  /**
   * number of items to skip before starting to collect the result set.
   */
  offset?: number;
  /**
   * the sorting parameters for the list.
   *
   * see https://learn.microsoft.com/en-us/azure/search/search-query-odata-orderby#examples for the format of the OrderBy string.
   *
   *  supported sorting parameters are: "CreatedAt".
   *
   * default sorting is by " CreatedAt desc".
   */
  orderBy?: string;
};

export type Order = {
  /**
   * order id
   */
  id: string;
  /**
   * market id
   */
  marketId: bigint;
  /**
   * wallet id
   */
  walletId: bigint;

  /**
   * category of the order
   */
  category: OrderCategory;
  /**
   * side of the order
   */
  side: OrderSide;
  /**
   * volume of the order filled
   */
  filledVolume: number;
  /**
   * amount of the order filled
   */
  filledAmount: number;
  /**
   * total volume of the order
   */
  totalVolume: number;
  /**
   * total amount of the order
   */
  totalAmount: number;
  /**
   * price of the order filled
   */
  filledPrice: number;
  /**
   * price of the order placed
   */
  price: number;

  status: OrderStatus;
  /**
   * submitted time of the order
   */
  timestamp: number;
};

export type FillRecord = {
  /**
   * trade id
   */
  tradeId: string;
  /**
   * filled price
   */
  filledPrice: number;
  /**
   * filled volume
   */
  filledVolume: number;
  /**
   * filled amount
   */
  filledAmount: number;

  /**
   * trade side
   */
  tradeSide: OrderSide;
  /**
   * time of trade
   */
  timestamp: number;
};

/**
 * Input class for creating a new spot order in the trading system.
 * Supports both limit orders and swap V2 orders through their respective detail objects.
 *
 * @class SubmitSpotOrderInput
 * @example
 * ```typescript
 * const spotOrder = new SubmitSpotOrderInput({
 *   orderCategory: OrderCategory.LIMIT,
 *   marketId: BigNumber.from("1234"),
 *   limitOrderDetails: new LimitOrderDetails({
 *     orderSide: OrderSide.BUY,
 *     price: BigNumber.from("100"),
 *     volume: BigNumber.from("10")
 *   })
 * });
 * ```
 */
export class SubmitSpotOrderInput {
  /**
   * The category of the order (e.g., LIMIT, MARKET, SWAP_V2)
   * @decorators {@cborIndex(0)} {@cborBigInt()}
   */
  @cborIndex(0)
  @cborBigInt()
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
  public limitOrderDetails?: LimitOrderDetails;

  /**
   * Optional details specific to swap V2 orders
   * Required when orderCategory is OrderCategory.SWAP_V2
   * @decorators {@cborIndex(3)}
   */
  @cborIndex(3)
  public swapV2OrderDetails?: SwapV2OrderDetails;

  /**
   * Creates a new instance of SubmitSpotOrderInput
   * @param {Partial<SubmitSpotOrderInput>} init - Initial values for the spot order
   */
  constructor(init?: Partial<SubmitSpotOrderInput>) {
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
export class LimitOrderDetails {
  /**
   * The side of the order (buy/sell)
   * @decorators {@cborIndex(0)} {@cborBigInt()}
   */
  @cborIndex(0)
  @cborBigInt()
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
   * Creates a new instance of LimitOrderDetails
   * @param {Partial<LimitOrderDetails>} init - Initial values for the limit order details
   */
  public constructor(init?: Partial<LimitOrderDetails>) {
    Object.assign(this, init);
  }
}

/**
 * Details for a V2 swap order in the trading system.
 * Used when creating a new spot order with OrderCategory.SWAP_V2.
 *
 * @class SwapV2OrderDetails
 * @example
 * ```typescript
 * const swapDetails = new SwapV2OrderDetails({
 *   exactTokens: BigNumber.from("100"),
 *   exactTokensType: SwapV2ExactTokensType.INPUT,
 *   orderSide: OrderSide.BUY,
 *   minOut: BigNumber.from("95"),
 *   maxIn: BigNumber.from("105")
 * });
 * ```
 */
export class SwapV2OrderDetails {
  /**
   * The exact amount of tokens to swap
   * @decorators {@cborIndex(0)}
   */
  @cborIndex(0)
  // @ts-ignore
  public exactTokens: BigNumber;

  /**
   * Specifies whether exactTokens is input or output amount
   * @decorators {@cborIndex(1)} {@cborBigInt()}
   */
  @cborIndex(1)
  @cborBigInt()
  // @ts-ignore
  public exactTokensType: SwapV2ExactTokensType;

  /**
   * The side of the swap order (buy/sell)
   * @decorators {@cborIndex(2)} {@cborBigInt()}
   */
  @cborIndex(2)
  @cborBigInt()
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
   * Creates a new instance of SwapV2OrderDetails
   * @param {Partial<SwapV2OrderDetails>} init - Initial values for the swap order details
   */
  public constructor(init?: Partial<SwapV2OrderDetails>) {
    Object.assign(this, init);
  }
}

export function mapGetOrderInput(data: GetOrdersInput): Options<GetV1OrdersData, boolean> {
  return {
    query: {
      Status: data.status,
      MarketId: data.marketId,
      OrderCategory: data.orderCategory,
      OrderSide: data.orderSide,
      CreatedAtStart: data.createdAtStart,
      CreatedAtEnd: data.createdAtEnd,
      Limit: data.limit,
      Offset: data.offset,
      OrderBy: data.orderBy
    }
  };
}

export function mapOrder(data: Ex3ExchangeOpenApiAppServicesWalletOrderDto): Order {
  return {
    id: data.id,
    marketId: BigInt(data.mid),
    walletId: BigInt(data.wid),
    category: data.cat,
    side: data.s,
    filledVolume: Number(data.fv),
    filledAmount: Number(data.fa),
    totalVolume: Number(data.tv),
    totalAmount: Number(data.ta),
    filledPrice: Number(data.fp),
    price: Number(data.p),
    status: data.st,
    timestamp: Number(data.t)
  };
}

export function mapGetFillRecordInput(orderId: string): Options<GetV1OrdersTradesData, boolean> {
  return {
    query: {
      OrderId: orderId
    }
  };
}

export function mapFillRecord(data: Ex3ExchangeOpenApiAppServicesWalletOrderTradeListItem): FillRecord {
  return {
    tradeId: data.tid!,
    filledPrice: Number(data.fp),
    filledVolume: Number(data.fv),
    filledAmount: Number(data.fa),
    tradeSide: data.ts,
    timestamp: Number(data.t)
  };
}
