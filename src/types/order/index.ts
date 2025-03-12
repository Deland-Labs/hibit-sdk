import { Options } from '@hey-api/client-fetch';
import {
  Ex3ExchangeOpenApiAppServicesWalletOrderDto,
  Ex3ExchangeOpenApiAppServicesWalletOrderTradeListItem,
  GetV1OrderData,
  GetV1OrdersData,
  GetV1OrderTradesData
} from '../../openapi';
import { OrderCategory, OrderSide, OrderStatus, SwapV2ExactTokensType } from '../enums';

export type GetOrdersInput = {
  /**
   * The HIN(hibit chain identity number) of orders
   */
  hin: bigint;
  /**
   * status to filter the orders, if null, means all statuses.
   */
  status?: Array<OrderStatus>;
  /**
   * marketId, if null, means all markets
   */
  marketId?: bigint;
  /**
   * The orderIds parameter is optional for filtering. If set to null,
   * no filtering by order ID will be applied.
   * However, if provided, the list must contain no more than 20 order IDs;
   * otherwise, an error is returned.
   */
  orderIds?: Array<string>;
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
  createdAtStart?: number;
  /**
   * order created at before this time
   */
  createdAtEnd?: number;
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

/**
 * Input type for retrieving a specific order.
 * Must have exactly one of the following properties set: `OrderId`, `ClientOrderId`, or `TxHash`.
 */
export type GetOrderInput = {
  /**
   * The unique identifier of the order.
   * Must be set if `clientOrderId` and `txHash` are not provided.
   */
  orderId?: string;
  /**
   * The client order identifier. Format: "${HIN}_${nonce}".
   * Example: "10001_123".
   * Must be set if `orderId` and `txHash` are not provided.
   */
  clientOrderId?: string;
  /**
   * The transaction hash associated with the order.
   * Must be set if `orderId` and `clientOrderId` are not provided.
   */
  txHash?: string;
};

/**
 * Validates that exactly one identifier is provided in the GetOrderInput
 */
export function validateGetOrderInput(input: GetOrderInput): boolean {
  const providedIdentifiers = [
    input.orderId !== undefined,
    input.clientOrderId !== undefined,
    input.txHash !== undefined
  ].filter(Boolean).length;
  
  return providedIdentifiers === 1;
}

export type OrderInfo = {
  /**
   * order id
   */
  id: string;
  /**
   * market id
   */
  marketId: bigint;
  /**
   * The HIN(hibit chain identity number) of the wallet
   */
  hin: bigint;
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

export type OrderTradeRecord = {
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
 * Options for specifying decimal precision for assets.
 */
export type DecimalOptions = {
  /**
   * The number of decimal places for the base asset.
   */
  baseAssetDecimals: number;

  /**
   * The number of decimal places for the quote asset.
   */
  quoteAssetDecimals: number;
};

export type SubmitSpotOrderInput = {
  /**
   * The category of the order (e.g., LIMIT, MARKET, SWAP_V2)
   * @decorators {@cborIndex(0)} {@cborBigUint()}
   */
  orderCategory: OrderCategory;

  /**
   * The ID of the market where the order will be placed
   * @decorators {@cborIndex(1)}
   */
  marketId: bigint;

  /**
   * Optional details specific to limit orders
   * Required when orderCategory is OrderCategory.LIMIT
   */
  limitOrderDetails?: LimitOrderDetails;

  /**
   * Optional details specific to swap V2 orders
   * Required when orderCategory is OrderCategory.SWAP_V2
   */
  swapV2OrderDetails?: SwapV2OrderDetails;
};

export type LimitOrderDetails = {
  /**
   * The side of the order (buy/sell)
   */
  orderSide: OrderSide;

  /**
   * The limit price for the order
   */
  price: number;

  /**
   * The volume of tokens to trade
   */
  volume: number;
};

/**
 * Details for a V2 swap order in the trading system.
 * Used when creating a new spot order with OrderCategory.SWAP_V2.
 */
export type SwapV2OrderDetails = {
  /**
   * The exact amount of tokens to swap
   */
  exactTokens: number;

  /**
   * Specifies whether exactTokens is input or output amount
   */
  exactTokensType: SwapV2ExactTokensType;

  /**
   * The side of the swap order (buy/sell)
   */
  orderSide: OrderSide;

  /**
   * Minimum output amount for the swap
   * Required when exactTokensType is INPUT
   */
  minOut?: number;

  /**
   * Maximum input amount for the swap
   * Required when exactTokensType is OUTPUT
   */
  maxIn?: number;
};

/**
 * Input parameters for canceling spot orders.
 * Supports three cancellation scenarios:
 * 1. Cancel by order ID
 * 2. Cancel by market ID and side
 * 3. Cancel all orders in a market
 *
 * @example Scenario 1: Cancel a specific order by ID
 * ```typescript
 * const cancelSingleOrder: CancelSpotOrderInput = {
 *   orderId: "1234567890abcdef"
 * };
 * ```
 *
 * @example Scenario 2: Cancel all orders of a specific side in a market
 * ```typescript
 * const cancelOrdersBySide: CancelSpotOrderInput = {
 *   marketId: BigInt("12345"),
 *   orderSide: OrderSide.Bid
 * };
 * ```
 *
 * @example Scenario 3: Cancel all orders in a market
 * ```typescript
 * const cancelAllMarketOrders: CancelSpotOrderInput = {
 *   marketId: BigInt("12345"),
 *   isCancelAll: true
 * };
 * ```
 */
export type CancelSpotOrderInput = {
  /**
   * The ID of the market where orders should be canceled.
   * Required for:
   * - Scenario 2: Canceling by market ID and side
   * - Scenario 3: Canceling all orders in a market
   */
  marketId?: bigint;

  /**
   * Specific order ID to cancel.
   * Used in Scenario 1: When specified, other parameters are ignored
   */
  orderId?: string;

  /**
   * Order side to cancel (buy/sell).
   * Used in Scenario 2: Required when canceling by market ID and side
   */
  orderSide?: OrderSide;

  /**
   * Whether to cancel all orders in the specified market.
   * Used in Scenario 3: When true, only marketId is required.
   * Defaults to false when not specified.
   */
  isCancelAll?: boolean;
};

export function mapGetOrdersInput(data: GetOrdersInput): Options<GetV1OrdersData, boolean> {
  return {
    query: {
      HIN: String(data.hin),
      Status: data.status,
      MarketId: data.marketId ? String(data.marketId) : undefined,
      OrderIds: data.orderIds,
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

export function mapGetOrderInput(input: GetOrderInput): Options<GetV1OrderData, boolean> {
  return {
    query: {
      OrderId: input.orderId,
      ClientOrderId: input.clientOrderId,
      TxHash: input.txHash
    }
  };
}

export function mapOrderInfo(data: Ex3ExchangeOpenApiAppServicesWalletOrderDto): OrderInfo {
  return {
    id: data.id,
    marketId: BigInt(data.mid),
    hin: BigInt(data.hin),
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

export function mapGetOrderTradesInput(orderId: string): Options<GetV1OrderTradesData, boolean> {
  return {
    query: {
      OrderId: orderId
    }
  };
}

export function mapOrderTradeRecord(data: Ex3ExchangeOpenApiAppServicesWalletOrderTradeListItem): OrderTradeRecord {
  return {
    tradeId: data.tid!,
    filledPrice: Number(data.fp),
    filledVolume: Number(data.fv),
    filledAmount: Number(data.fa),
    tradeSide: data.ts,
    timestamp: Number(data.t)
  };
}
