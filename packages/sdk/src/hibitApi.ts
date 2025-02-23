import BigNumber from 'bignumber.js';
import {
  AssetInfo,
  ChainInfo,
  GetAssetsInput,
  HexString,
  HibitApiResponse,
  PageResponse,
  TransactionType
} from './types';
import {
  getV1Assets,
  getV1Chains,
  getV1Markets,
  getV1Timestamp,
  getV1WalletBalance,
  getV1WalletNonce,
  postV1TxSubmitSpotOrder,
  getV1MarketsTicker,
  getV1MarketKline,
  getV1MarketDepth,
  getV1MarketsSwap,
  getV1MarketTrade,
  getV1Orders,
  getV1OrderTrades
} from './client';
import { client } from './client/client.gen';
import { mapChainInfo } from './types/chain';
import { mapAssetInfo, mapGetAssetsInput } from './types/asset';
import {
  GetMarketDepthInput,
  GetMarketKlineInput,
  GetMarketsInput,
  GetMarketTradeInput,
  mapGetMarketDepthInput,
  mapGetMarketKlineInput,
  mapGetMarketsInput,
  mapGetMarketsSwapInfoInput,
  mapGetMarketsTickerInput,
  mapGetMarketTradeInput,
  mapMarketDepth,
  mapMarketInfo,
  mapMarketKlineInfo,
  mapMarketSwapInfo,
  mapMarketTickerInfo,
  mapMarketTradeInfo,
  MarketDepth,
  MarketInfo,
  MarketKlineItem,
  MarketSwapInfo,
  MarketTickerInfo,
  Trade
} from './types/market';
import {
  CancelSpotOrderInput,
  GetOrdersInput,
  mapGetOrdersInput,
  mapGetOrderTradesInput,
  mapOrderInfo,
  mapOrderTradeRecord,
  OrderInfo,
  OrderTradeRecord,
  SubmitSpotOrderInput
} from './types/order';
import { TransactionManager } from './tx-manager.ts';
import { mapTransactionToApiRequest } from './types/tx.ts';
import { GetWalletBalancesInput, mapGetNonceInput, mapGetWalletBalancesInput } from './types/wallet.ts';

/**
 * Interface representing the Hibit API.
 */
export interface IHibitApi {
  /**
   * Get the current timestamp.
   *
   * @returns {Promise<number>} A promise that resolves to the current server timestamp.
   */
  getTimestamp(): Promise<number>;

  /**
   * Get the list of supported chains.
   *
   * @returns {Promise<Array<ChainInfo>>} A promise that resolves to the list of supported chains.
   */
  getChains(): Promise<Array<ChainInfo>>;

  /**
   * Get the list of supported assets.
   *
   * @param {GetAssetsInput} input - The input parameters for getting assets.
   * @returns {Promise<PageResponse<AssetInfo>>} A promise that resolves to the list of supported assets.
   */
  getAssets(input: GetAssetsInput): Promise<PageResponse<AssetInfo>>;

  /**
   * Get the list of markets.
   *
   * @param {GetMarketsInput} input - The input parameters for getting markets.
   * @returns {Promise<PageResponse<MarketInfo>>} A promise that resolves to the list of markets.
   */
  getMarkets(input: GetMarketsInput): Promise<PageResponse<MarketInfo>>;

  /**
   * Get the ticker information for markets.
   *
   * @param { bigint} marketId - The market id to get the ticker information for. If not provided, all market tickers are returned.
   * @returns {Promise<PageResponse<MarketTickerInfo>>} A promise that resolves to the list of market tickers.
   */
  getMarketsTicker(marketId?: bigint): Promise<Array<MarketTickerInfo>>;

  /**
   * Get the swap information for markets.
   *
   * @param {bigint} marketId - The market id to get the swap information for. If not provided, all market swap information is returned.
   * @returns {Promise<Array<MarketSwapInfo>>} A promise that resolves to the list of market swap information.
   */
  getMarketsSwapInfo(marketId?: bigint): Promise<Array<MarketSwapInfo>>;

  /**
   * Get the market depth.
   *
   * @param {GetMarketDepthInput} input - The input parameters for getting market depth.
   * @returns {Promise<MarketDepth>} A promise that resolves to the market depth.
   */
  getMarketDepth(input: GetMarketDepthInput): Promise<MarketDepth>;

  /**
   * Get the kline data for market.
   *
   * @param {GetMarketKlineInput} input - The input parameters for getting market klines.
   * @returns {Promise<PageResponse<MarketKlineItem>>} A promise that resolves to the list of market klines.
   */
  getMarketKline(input: GetMarketKlineInput): Promise<PageResponse<MarketKlineItem>>;

  /**
   * Get the recent trades for markets.
   *
   * @param {GetMarketTradeInput} input - The input parameters for getting market trades.
   * @returns {Promise<Array<Trade>>} A promise that resolves to the list of market trades.
   */
  getMarketTrade(input?: GetMarketTradeInput): Promise<PageResponse<Trade>>;

  /**
   * Create a spot order.
   *
   * @param {SubmitSpotOrderInput} input - The input parameters for creating a spot order.
   * @returns {Promise<void>} A promise that resolves when the spot order is created.
   */
  submitSpotOrder(input: SubmitSpotOrderInput): Promise<void>;

  /**
   * Cancel a spot order.
   *
   * @param {CancelSpotOrderInput} input - The input parameters for canceling a spot order.
   * @returns {Promise<void>} A promise that resolves when the spot order is canceled.
   */
  cancelSpotOrder(input: CancelSpotOrderInput): Promise<void>;

  /**
   * Get the list of orders.
   * @param {GetOrdersInput} input - The input parameters for getting orders.
   * @returns {Promise<PageResponse<OrderInfo>>} A promise that resolves to the list of orders.
   */
  getOrders(input: GetOrdersInput): Promise<PageResponse<OrderInfo>>;

  /**
   * Get the list of trades for an order.
   *
   * @param {string} orderId - The order id to get the trades for.
   * @returns {Promise<Array<OrderTradeRecord>>} A promise that resolves to the list of trades for the order.
   */
  getOrderTrades(orderId: string): Promise<Array<OrderTradeRecord>>;

  /**
   * Get the wallet balance.
   *
   * @param {GetWalletBalancesInput} input - The input parameters for getting the wallet balance.
   * @returns {Promise<Map<string, BigNumber>>} A promise that resolves to the wallet balance.
   */
  getWalletBalances(input: GetWalletBalancesInput): Promise<Map<string, BigNumber>>;

  /**
   * Get the nonce.
   *
   * @param {bigint} walletId - The wallet id to get the nonce for.
   * @returns {Promise<bigint>} A promise that resolves to the nonce.
   */
  getNonce(walletId: bigint): Promise<bigint>;
}

export class HibitApi implements IHibitApi {
  //@ts-ignore
  private options: HibitApiOptions;

  constructor(options: Partial<HibitApiOptions> = {}) {
    if (!options.baseUrl) {
      throw new Error('Invalid base url');
    }

    Object.assign(this, options);
    client.setConfig({
      baseUrl: options.baseUrl
    });
  }

  /*-------------basic start----------------*/
  async getTimestamp(): Promise<number> {
    const apiName = 'getTimestamp';
    const response = await getV1Timestamp();

    this.ensureSuccess(apiName, response.data);

    if (!response.data?.data?.timestamp) {
      HibitApiError.throwInvalidResponseError(apiName);
    }

    return response.data!.data!.timestamp!;
  }

  async getChains(): Promise<Array<ChainInfo>> {
    const apiName = 'getChains';
    const response = await getV1Chains();

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.map((chain) => mapChainInfo(chain));
  }

  async getAssets(input: GetAssetsInput): Promise<PageResponse<AssetInfo>> {
    const apiName = 'getAssets';
    const response = await getV1Assets(mapGetAssetsInput(input));

    this.ensureSuccess(apiName, response.data);

    return {
      items: response.data!.data!.items!.map((asset) => mapAssetInfo(asset)),
      totalCount: response.data!.data!.totalCount
    } as PageResponse<AssetInfo>;
  }
  /*-------------basic end----------------*/

  /*-------------market start-------------*/

  async getMarkets(input: GetMarketsInput): Promise<PageResponse<MarketInfo>> {
    const apiName = 'getMarkets';
    const response = await getV1Markets(mapGetMarketsInput(input));

    this.ensureSuccess(apiName, response.data);

    return {
      items: response.data!.data!.items!.map((market) => mapMarketInfo(market)),
      totalCount: response.data!.data!.totalCount
    } as PageResponse<MarketInfo>;
  }

  async getMarketsTicker(marketId?: bigint): Promise<Array<MarketTickerInfo>> {
    const apiName = 'getMarketsTicker';
    const response = await getV1MarketsTicker(mapGetMarketsTickerInput(marketId));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.items!.map((ticker) => mapMarketTickerInfo(ticker));
  }

  async getMarketsSwapInfo(marketId?: bigint): Promise<Array<MarketSwapInfo>> {
    const apiName = 'getMarketsSwapInfo';
    const response = await getV1MarketsSwap(mapGetMarketsSwapInfoInput(marketId));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.items!.map((swap) => mapMarketSwapInfo(swap));
  }

  async getMarketDepth(input: GetMarketDepthInput): Promise<MarketDepth> {
    const apiName = 'getMarketDepth';
    const response = await getV1MarketDepth(mapGetMarketDepthInput(input));

    this.ensureSuccess(apiName, response.data);

    return mapMarketDepth(response.data!.data!);
  }

  async getMarketKline(input: GetMarketKlineInput): Promise<PageResponse<MarketKlineItem>> {
    const apiName = 'getMarketKline';
    const response = await getV1MarketKline(mapGetMarketKlineInput(input));

    this.ensureSuccess(apiName, response.data);

    return {
      items: response.data!.data!.items!.map((kline) => mapMarketKlineInfo(kline)),
      totalCount: response.data!.data!.totalCount!
    };
  }

  async getMarketTrade(input: GetMarketTradeInput): Promise<PageResponse<Trade>> {
    const apiName = 'getMarketTrade';
    const response = await getV1MarketTrade(mapGetMarketTradeInput(input));

    this.ensureSuccess(apiName, response.data);
    return {
      items: response.data!.data!.items!.map((trade) => mapMarketTradeInfo(trade)),
      totalCount: response.data!.data!.totalCount!
    };
  }

  /*-------------market end---------------*/

  /*-------------order start--------------*/

  async getOrders(input: GetOrdersInput): Promise<PageResponse<OrderInfo>> {
    const apiName = 'getOrders';
    const response = await getV1Orders(mapGetOrdersInput(input));

    this.ensureSuccess(apiName, response.data);

    return {
      items: response.data!.data!.items!.map((order) => mapOrderInfo(order)),
      totalCount: response.data!.data!.totalCount!
    };
  }

  async getOrderTrades(orderId: string): Promise<Array<OrderTradeRecord>> {
    const apiName = 'getOrderTrades';
    const response = await getV1OrderTrades(mapGetOrderTradesInput(orderId));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.map((trade) => mapOrderTradeRecord(trade));
  }

  async submitSpotOrder(input: SubmitSpotOrderInput): Promise<void> {
    const apiName = 'submitSpotOrder';
    this.ensurePrivateKey(apiName);

    const nonce = await this.getNonce(this.options.walletId);
    const tx = TransactionManager.createTransaction(
      TransactionType.CreateSpotOrder,
      this.options.walletId,
      nonce ? nonce : 0n,
      input
    );
    const signedTx = TransactionManager.sign(tx, this.options.privateKey);
    const resp = await postV1TxSubmitSpotOrder(mapTransactionToApiRequest(signedTx));

    this.ensureSuccess(apiName, resp.data);
  }

  async cancelSpotOrder(input: CancelSpotOrderInput): Promise<void> {
    const apiName = 'cancelSpotOrder';
    this.ensurePrivateKey(apiName);

    if (input.isCancelAll === undefined || input.isCancelAll === null) {
      input.isCancelAll = false;
    }

    const nonce = await this.getNonce(this.options.walletId);
    const tx = TransactionManager.createTransaction(
      TransactionType.CancelSpotOrder,
      this.options.walletId,
      nonce ? nonce : 0n,
      input
    );
    const signedTx = TransactionManager.sign(tx, this.options.privateKey);
    const resp = await postV1TxSubmitSpotOrder(mapTransactionToApiRequest(signedTx));

    this.ensureSuccess(apiName, resp.data);
  }

  /*-------------order end----------------*/

  async getWalletBalances(input: GetWalletBalancesInput): Promise<Map<string, BigNumber>> {
    const apiName = 'getWalletBalances';
    const resp = await getV1WalletBalance(mapGetWalletBalancesInput(input));

    this.ensureSuccess(apiName, resp.data);

    const result = new Map<string, BigNumber>();
    for (const [assetId, balance] of Object.entries(resp!.data!.data as Record<string, string>)) {
      result.set(assetId, BigNumber(balance));
    }
    return result;
  }

  async getNonce(walletId: bigint): Promise<bigint> {
    const apiName = 'getNonce';
    const response = await getV1WalletNonce(mapGetNonceInput(walletId));

    this.ensureSuccess(apiName, response.data);

    return BigInt(response.data!.data!.nonce!);
  }

  private ensureSuccess<T extends HibitApiResponse>(apiName: string, response?: T) {
    if (response?.code != 200) {
      HibitApiError.throwBadRequestError(apiName, response?.code, response?.message);
    }
  }

  private ensurePrivateKey(apiName: string) {
    if (!this.options.privateKey) {
      HibitApiError.throwRequiredPrivKeyError(apiName);
    }
  }
}

export interface HibitApiOptions {
  baseUrl: string;
  privateKey: HexString;
  walletId: bigint;
}
