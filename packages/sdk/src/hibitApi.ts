import BigNumber from 'bignumber.js';
import { ClientRequestFactory } from './cbor';
import { AssetInfo, ChainInfo, GetAssetsInput, HibitApiResponse, PageResponse, TransactionType } from './types';
import {
  getV1Assets,
  getV1Chains,
  getV1Markets,
  getV1Timestamp,
  getV1WalletBalance,
  type GetV1WalletBalanceData,
  getV1WalletNonce,
  postV1TxSubmitSpotOrder,
  type PostV1TxSubmitSpotOrderData,
  getV1MarketsTicker,
  getV1MarketKline,
  getV1MarketDepth,
  getV1MarketsSwap,
  getV1MarketTrade
} from './client';
import { Options } from '@hey-api/client-fetch';
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
import { SubmitSpotOrderInput } from './types/order';

/**
 * Interface representing the Hibit API.
 */
export interface IHibitApi {
  /**
   * Set the options for the Hibit API.
   *
   * @param {HibitApiOptions} options - The options to set.
   */
  setOptions(options: HibitApiOptions): void;

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
   * Get the wallet balance.
   *
   * @returns {Promise<Map<string, BigNumber>>} A promise that resolves to the wallet balance.
   */
  getWalletBalance(): Promise<Map<string, BigNumber>>;

  /**
   * Get the nonce.
   *
   * @returns {Promise<BigNumber>} A promise that resolves to the nonce.
   */
  getNonce(): Promise<BigNumber>;
}

export class HibitApi implements IHibitApi {
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
  async submitSpotOrder(input: SubmitSpotOrderInput): Promise<void> {
    const options: Options<PostV1TxSubmitSpotOrderData, boolean> = {};

    await this.configTxRequest(TransactionType.CreateSpotOrder, input, options);
    const resp = await postV1TxSubmitSpotOrder(options);

    this.ensureSuccess('submitSpotOrder', resp.data);
  }

  /*-------------order end----------------*/

  // @ts-ignore
  private options: HibitApiOptions;

  setOptions(options: HibitApiOptions): void {
    this.options = options;
    client.setConfig({
      baseUrl: options.baseUrl
    });
  }

  async getWalletBalance(): Promise<Map<string, BigNumber>> {
    const options: Options<GetV1WalletBalanceData, boolean> = {};
    await this.configEx3L2Request(options);
    const resp = await getV1WalletBalance(options);
    if (resp.data?.code == 200) {
      const result = new Map<string, BigNumber>();
      for (const [assetId, balance] of Object.entries(resp.data.data as Record<string, string>)) {
        result.set(assetId, BigNumber(balance));
      }
      return result;
    }

    throw new Error('Get user assets failed');
  }

  async getNonce(): Promise<BigNumber> {
    const resp = await getV1WalletNonce();
    if (resp.data?.code == 200) {
      // @ts-ignore
      return BigNumber(resp.data.data?.nonce);
    }
    throw new Error('Get nonce failed');
  }

  private ensureSuccess<T extends HibitApiResponse>(apiName: string, response?: T) {
    if (response?.code != 200) {
      HibitApiError.throwBadRequestError(apiName, response?.code, response?.message);
    }
  }

  private async configEx3L2Request(sendOptions: Options): Promise<void> {
    if (!this.options.privateKey) {
      throw new Error('Invalid key pair');
    }
    const token = await ClientRequestFactory.createEx3L2HeaderToken({
      privateKey: this.options.privateKey
    });
    sendOptions.auth = () => `Ex3L2 ${token}`;
  }

  private async configTxRequest<TInput>(txType: TransactionType, input: TInput, sendOptions: Options): Promise<void> {
    if (!this.options.privateKey) {
      throw new Error('Invalid key pair');
    }

    let nonce = await this.getNonce();
    sendOptions.body = await ClientRequestFactory.createRequest(
      txType,
      0,
      this.options.walletId,
      nonce ? nonce : BigNumber(0),
      input,
      {
        privateKey: this.options.privateKey
      }
    );
  }
}

export interface HibitApiOptions {
  baseUrl: string;
  privateKey: string;
  walletId: BigNumber;
}

export const hibitApi = new HibitApi();
