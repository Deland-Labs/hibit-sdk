import {
  GetV1MarketsData,
  GetV1MarketsTickerData,
  Options,
  Ex3CacheDepthManagerSpotMarketDepthDataDto,
  GetV1MarketKlineData,
  GetV1MarketTradeData,
  GetV1MarketDepthData,
  GetV1MarketData,
  GetV1MarketsSwapData,
  Ex3ExchangeOpenApiAbstractionDtosTrySwapResult,
  PostV1MarketTrySwapData,
  Ex3TransactionsSwapV2ExactTokensType,
  Ex3ExchangeOpenApiAbstractionDtosMarket24HrTickerExtendItem,
  Ex3ExchangeOpenApiAbstractionDtosMarket24HrTickerItem,
  Ex3ExchangeOpenApiAbstractionDtosMarketInfoItem,
  Ex3ExchangeOpenApiAbstractionDtosKlineItem,
  Ex3ExchangeOpenApiAbstractionDtosMarketTradingHistoryItem,
  Ex3ExchangeOpenApiAbstractionDtosGetSwapOutputItem
} from '../openapi';
import { ChainAssetType, DepthIndex, OrderSide, SwapV2ExactTokensType, TickSpace } from './enums';
import { ChainId } from './chain';

export type GetMarketsInput = {
  /**
   * chain ids to filter the markets list.
   */
  chainIds?: Array<ChainId>;
  /**
   * chain asset types to filter the markets list.
   */
  chainAssetTypes?: Array<ChainAssetType>;
  /**
   * The base asset id. This is an optional field that specifies the base asset for which the market list is requested.
   */
  baseAssetId?: bigint;
  /**
   * The quote asset id. This is an optional field that specifies the quote asset for which the market list is requested.
   */
  quoteAssetId?: bigint;
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
   *  supported sorting parameters are: "MarketId".
   *
   * default sorting is by " MarketId desc".
   */
  orderBy?: string;
};

export type GetMarket24HrTickerInput = {
  /**
   * The market id.
   */
  marketId?: bigint;
  /**
   * Filter markets by chain IDs (optional).
   */
  chainIds?: Array<ChainId>;
  /**
   * Filter markets by chain asset types (optional).
   */
  chainAssetTypes?: Array<ChainAssetType>;
};

export type MarketInfo = {
  /**
   * market id
   */
  marketId: bigint;
  /**
   * market symbol
   */
  marketSymbol: string;
  /**
   * base asset id
   */
  baseAssetId: bigint;
  /**
   * quote asset id
   */
  quoteAssetId: bigint;
  /**
   * values of the depth levels
   */
  depthLevels: Array<number>;
};

export type Market24HrTickerInfo = {
  /**
   * The market id.
   */
  id: bigint;
  /**
   * The open price of the trading pair in the last 24 hours.
   */
  open: number;
  /**
   * The highest price of the trading pair in the last 24 hours.
   */
  high: number;
  /**
   * The lowest price of the trading pair in the last 24 hours.
   */
  low: number;
  /**
   * The close price of the trading pair in the last 24 hours.
   */
  close: number;
  /**
   * The volume of the trading pair in the last 24 hours.
   */
  volume: number;
  /**
   * The amount of the trading pair in the last 24 hours.
   */
  amount: number;
  /**
   * time of the ticker update.
   */
  timestamp: number;
};

export type Market24HrTickerExtendInfo = Market24HrTickerInfo & {
  /**
   * The last price of the trading pair in USD.
   */
  lastPriceInUsd: number;
  /**
   * The total amount of the trading pair in USD.
   */
  amountInUsd: number;
  /**
   * The symbol of the base asset.
   */
  baseAssetSymbol: string;
  /**
   * The symbol of the quote asset.
   */
  quoteAssetSymbol: string;
};
export type GetMarketKlineInput = {
  /**
   * The market id.
   */
  marketId: bigint;
  /**
   * The tick space for the kline.
   */
  tickSpace: TickSpace;
  /**
   * Maximum number of items to return. Maximum value is 500.
   */
  limit?: number;
  /**
   * Number of items to skip before starting to collect the result set.
   */
  offset?: number;
  /**
   * The sorting parameters for the list.
   *
   * See https://learn.microsoft.com/en-us/azure/search/search-query-odata-orderby#examples for the format of the OrderBy string.
   *
   * Supported sorting parameters are: "Timestamp".
   *
   * Default sorting is by "Timestamp desc".
   */
  orderBy?: string;
};

export type MarketKlineItem = {
  /**
   * The open price of the trading pair in the last 24 hours.
   */
  open: number;
  /**
   * The highest price of the trading pair in the last 24 hours.
   */
  high: number;
  /**
   * The lowest price of the trading pair in the last 24 hours.
   */
  low: number;
  /**
   * The close price of the trading pair in the last 24 hours.
   */
  close: number;
  /**
   * The volume of the trading pair in the last 24 hours.
   */
  volume: number;
  /**
   * The amount of the trading pair in the last 24 hours.
   */
  amount: number;
  /**
   * timestamp of kline
   */
  timestamp: number;
};

/**
 * Represents the input parameters for retrieving a list of market trades.
 */
export type GetMarketTradeInput = {
  /**
   * The market id for which the trade list is requested.
   */
  marketId: bigint;
  /**
   * The start date and time for the trade list.
   */
  tradedAtStart?: number;
  /**
   * The end date and time for the trade list.
   */
  tradedAtEnd?: number;
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
   *  supported sorting parameters are: "TradedAt".
   *
   * default sorting is by " TradedAt desc".
   */
  orderBy?: string;
};

export type Trade = {
  /**
   * The wallet address of the maker user. if null, means the maker is swap pool.
   */
  maker?: string | null;
  /**
   * The wallet address of the taker user.
   */
  taker?: string;
  takerSide: OrderSide;
  /**
   * The price at which the trade occurred.
   */
  price: number;
  /**
   * The volume of the trade.
   */
  volume: number;
  /**
   * The total amount of the trade.
   */
  amount: number;
  /**
   * The time at which the trade occurred in Unix time milliseconds.
   */
  timestamp: number;
};

export type MarketSwapInfo = {
  /**
   * The market id for which the liquidity information is provided.
   */
  marketId: bigint;
  /**
   * The total amount of liquidity in the pool.
   */
  poolAmount: number;
  /**
   * The total volume of liquidity in the pool.
   */
  poolVolume: number;

  /**
   * The total liquidity in the pool.
   */
  poolLiquidity: bigint;
};

export type GetMarketDepthInput = {
  /**
   * The index of the depth.
   * for example, if depth levels of market is 0.01, 0.1, 1, 10, 50, 100.
   * then the index of 0.01 is 1, 0.1 is 2, 1 is 3, 10 is 4, 50 is 5, 100 is 6.
   */
  index: DepthIndex;
  /**
   * The market id.
   */
  marketId: bigint;
  /**
   * limit of the depth.
   * range from 1 to 100.
   */
  limit: number;
};

export type MarketDepthItem = {
  /**
   * The price of the depth item.
   */
  price: number;
  /**
   * The volume of the depth item.
   * Note: the volume is the merge result of orderbook order and swap pool liquidity.
   */
  volume: number;
};

/**
 * Represents the market depth, including the asks and bids.
 */
export type MarketDepth = {
  asks: Array<MarketDepthItem>;
  bids: Array<MarketDepthItem>;
};

export type TrySwapInput = {
  /**
   * The market id for the swap.
   */
  marketId: bigint;
  /**
   * Specifies whether exactTokens represents what you're providing (Source) or what you want to receive (Target).
   */
  exactTokensType: SwapV2ExactTokensType;
  /**
   * The exact amount of tokens for the swap.
   */
  exactTokens: bigint;
  /**
   * The order side for the swap.
   */
  side: OrderSide;
  /**
   * The minimum output amount (optional).
   */
  minOut?: bigint;
  /**
   * The minimum input amount (optional).
   */
  minIn?: bigint;
};

export type TrySwapResult = {
  /**
   * The input amount for the swap.
   */
  inputAmount: bigint;
  /**
   * The output amount for the swap.
   */
  outputAmount: bigint;
  /**
   * The price impact percentage.
   */
  priceImpactPercentage: number;
  /**
   * The swap fee amount.
   */
  swapFee: bigint;
  /**
   * The execution price.
   */
  executionPrice: number;
};

/**
 * Maps the input parameters for the GetMarkets API call to the required options format.
 *
 * @param input - The input parameters for the GetMarkets API call.
 * @returns An object containing the query parameters for the GetMarkets API call.
 */
export function mapGetMarketsInput(input: GetMarketsInput): Options<GetV1MarketsData> {
  return {
    query: {
      ChainIds: input.chainIds?.map((chainId) => chainId.toString()),
      ChainAssetTypes: input.chainAssetTypes?.map((type) => type.toString()),
      BaseAssetId: input.baseAssetId ? String(input.baseAssetId) : undefined,
      QuoteAssetId: input.quoteAssetId ? String(input.quoteAssetId) : undefined,
      Limit: input.limit,
      Offset: input.offset,
      OrderBy: input.orderBy
    }
  };
}

export function mapGetMarketInput(marketId: bigint): Options<GetV1MarketData> {
  return {
    query: {
      MarketId: String(marketId)
    }
  };
}

export function mapMarketInfo(market: Ex3ExchangeOpenApiAbstractionDtosMarketInfoItem): MarketInfo {
  return {
    marketId: BigInt(market.marketId),
    marketSymbol: market.marketSymbol,
    baseAssetId: BigInt(market.baseAssetId),
    quoteAssetId: BigInt(market.quoteAssetId),
    depthLevels: market.depthLevels!
  };
}

export function mapGetMarketsTickerInput(marketId: bigint | undefined): Options<GetV1MarketsTickerData> {
  return {
    query: {
      MarketId: marketId ? String(marketId) : undefined
    }
  };
}

export function mapGetMarkets24HrTickerInput(input: GetMarket24HrTickerInput): Options<GetV1MarketsTickerData> {
  return {
    query: {
      MarketId: input.marketId ? String(input.marketId) : undefined,
      ChainIds: input.chainIds?.map((chainId) => chainId.toString()),
      ChainAssetTypes: input.chainAssetTypes?.map((type) => type.toString())
    }
  };
}

export function mapMarket24HrTickerInfo(
  data: Ex3ExchangeOpenApiAbstractionDtosMarket24HrTickerItem
): Market24HrTickerInfo {
  return {
    id: BigInt(data.id!),
    open: Number(data.o),
    high: Number(data.h),
    low: Number(data.l),
    close: Number(data.c),
    volume: Number(data.v),
    amount: Number(data.a),
    timestamp: Number(data.t)
  };
}

export function mapMarket24HrTickerExtendInfo(
  data: Ex3ExchangeOpenApiAbstractionDtosMarket24HrTickerExtendItem
): Market24HrTickerExtendInfo {
  return {
    id: BigInt(data.id!),
    open: Number(data.o),
    high: Number(data.h),
    low: Number(data.l),
    close: Number(data.c),
    volume: Number(data.v),
    amount: Number(data.a),
    timestamp: Number(data.t),
    lastPriceInUsd: Number(data.lpusd),
    amountInUsd: Number(data.ausd),
    baseAssetSymbol: data.bas!,
    quoteAssetSymbol: data.qas!
  };
}

export function mapGetMarketKlineInput(input: GetMarketKlineInput): Options<GetV1MarketKlineData> {
  return {
    query: {
      MarketId: String(input.marketId),
      TickSpace: input.tickSpace,
      Limit: input.limit,
      Offset: input.offset,
      OrderBy: input.orderBy
    }
  };
}

export function mapMarketKlineInfo(data: Ex3ExchangeOpenApiAbstractionDtosKlineItem): MarketKlineItem {
  return {
    open: Number(data.o),
    high: Number(data.h),
    low: Number(data.l),
    close: Number(data.c),
    volume: Number(data.v),
    amount: Number(data.a),
    timestamp: Number(data.t)
  };
}

export function mapGetMarketTradeInput(input: GetMarketTradeInput): Options<GetV1MarketTradeData> {
  return {
    query: {
      MarketId: String(input.marketId),
      TradedAtStart: input.tradedAtStart,
      TradedAtEnd: input.tradedAtEnd,
      Limit: input.limit,
      Offset: input.offset,
      OrderBy: input.orderBy
    }
  };
}

export function mapMarketTradeInfo(data: Ex3ExchangeOpenApiAbstractionDtosMarketTradingHistoryItem): Trade {
  return {
    maker: data.maker || null,
    taker: data.taker,
    takerSide: data.takerSide as OrderSide,
    price: Number(data.p),
    volume: Number(data.v),
    amount: Number(data.a),
    timestamp: Number(data.t)
  };
}

export function mapGetMarketsSwapInfoInput(marketId?: bigint): Options<GetV1MarketsSwapData> {
  return {
    query: marketId
      ? {
          MarketId: String(marketId)
        }
      : {}
  };
}

export function mapMarketSwapInfo(data: Ex3ExchangeOpenApiAbstractionDtosGetSwapOutputItem): MarketSwapInfo {
  return {
    marketId: BigInt(data.marketId!),
    poolAmount: Number(data.poolAmount),
    poolVolume: Number(data.poolVolume),
    poolLiquidity: BigInt(data.poolLiquidity!)
  };
}

export function mapGetMarketDepthInput(input: GetMarketDepthInput): Options<GetV1MarketDepthData> {
  return {
    query: {
      Index: input.index,
      MarketId: String(input.marketId),
      Limit: input.limit
    }
  };
}

export function mapMarketDepth(data: Ex3CacheDepthManagerSpotMarketDepthDataDto): MarketDepth {
  return {
    asks: data.asks!.map((item) => ({
      price: Number(item[0]),
      volume: Number(item[1])
    })),
    bids: data.bids!.map((item) => ({
      price: Number(item[0]),
      volume: Number(item[1])
    }))
  };
}

export function mapTrySwapInput(input: TrySwapInput): Options<PostV1MarketTrySwapData> {
  return {
    body: {
      marketId: String(input.marketId),
      exactTokensType: input.exactTokensType as Ex3TransactionsSwapV2ExactTokensType,
      exactTokens: String(input.exactTokens),
      side: input.side,
      minOut: input.minOut ? String(input.minOut) : undefined,
      minIn: input.minIn ? String(input.minIn) : undefined
    }
  };
}

export function mapTrySwapResult(data: Ex3ExchangeOpenApiAbstractionDtosTrySwapResult): TrySwapResult {
  return {
    inputAmount: BigInt(data.inputAmount!),
    outputAmount: BigInt(data.outputAmount!),
    priceImpactPercentage: data.priceImpactPercentage!,
    swapFee: BigInt(data.swapFee!),
    executionPrice: Number(data.executionPrice!)
  };
}
