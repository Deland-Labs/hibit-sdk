import { Options } from '@hey-api/client-fetch';
import {
  Ex3ExchangeOpenApiAppServicesWalletOrderDto,
  Ex3ExchangeOpenApiAppServicesWalletOrderTradeListItem,
  GetV1OrdersData,
  GetV1OrdersTradesData
} from '../../client';
import { OrderCategory, OrderSide, OrderStatus, SwapV2ExactTokensType } from '../enums';

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

export type SubmitSpotOrderInput = {
  /**
   * The category of the order (e.g., LIMIT, MARKET, SWAP_V2)
   * @decorators {@cborIndex(0)} {@cborBigInt()}
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
