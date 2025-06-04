import BigNumber from 'bignumber.js';
import {
  AssetInfo,
  ChainInfo,
  GetAssetsInput,
  HexString,
  HibitApiResponse,
  PageResponse,
  TransactionType,
  GetMarketDepthInput,
  GetMarketKlineInput,
  GetMarketsInput,
  GetMarketTradeInput,
  MarketDepth,
  MarketInfo,
  MarketKlineItem,
  MarketSwapInfo,
  Market24HrTickerInfo,
  Trade,
  CancelSpotOrderInput,
  GetOrdersInput,
  OrderInfo,
  OrderTradeRecord,
  SubmitSpotOrderInput,
  GetWalletBalancesInput,
  DecimalOptions,
  HibitNetwork,
  GetOrderInput,
  GetMarket24HrTickerInput,
  GetAssetInput,
  GetChainBalancesInput,
  Market24HrTickerExtendInfo,
  WalletRegisterInput,
  GetRegisteredWalletInfoInput,
  RegisteredWalletInfo,
  ResetProxyKeyInput,
  ProxyKeypair,
  GetProxyKeyInput,
  ChainNetwork,
  Chain,
  WithdrawInput
} from './types';
import {
  getV1Assets,
  getV1Chains,
  getV1Markets,
  getV1Timestamp,
  getV1WalletNonce,
  postV1TxSubmitSpotOrder,
  getV1MarketsTicker,
  getV1MarketKline,
  getV1MarketDepth,
  getV1MarketsSwap,
  getV1MarketTrade,
  getV1Orders,
  getV1OrderTrades,
  getV1WalletBalances,
  getV1Market,
  postV1TxCancelSpotOrder,
  getV1Asset,
  getV1Order,
  getV1MarketsTickerExtended,
  getV1ChainBalances,
  postV1WalletRegister,
  getV1WalletInfo,
  postV1ProxyKeyReset,
  postV1ProxyKey,
  getV1AssetWithdrawalFee
} from './openapi';
import { mapChainInfo } from './types/chain';
import {
  AssetWithdrawFeeInfo,
  GetWithdrawFeeInfoInput,
  mapAssetInfo,
  mapAssetWithdrawFeeInfo,
  mapGetAssetInput,
  mapGetAssetsInput,
  mapGetWithdrawFeeInfoInput,
  mapGetChainBalancesInput
} from './types/asset';
import {
  mapGetMarketDepthInput,
  mapGetMarketInput,
  mapGetMarketKlineInput,
  mapGetMarketsInput,
  mapGetMarketsSwapInfoInput,
  mapGetMarketsTickerInput,
  mapGetMarketTradeInput,
  mapMarketDepth,
  mapMarketInfo,
  mapMarketKlineInfo,
  mapMarketSwapInfo,
  mapMarket24HrTickerInfo,
  mapMarketTradeInfo,
  mapGetMarkets24HrTickerInput,
  mapMarket24HrTickerExtendInfo
} from './types/market';
import {
  mapGetOrdersInput,
  mapGetOrderTradesInput,
  mapOrderInfo,
  mapOrderTradeRecord,
  mapGetOrderInput,
  validateGetOrderInput
} from './types/order';
import { TransactionManager } from './tx-manager';
import { mapTransactionToApiRequest, OriginWalletTransaction } from './types/tx';
import {
  mapGetNonceInput,
  mapGetWalletBalancesInput,
  mapToWalletRegisterApiRequest,
  mapGetRegisteredWalletInfoInput,
  mapGetRegisteredWalletInfoOutput,
  mapToGetProxyKeyApiRequest,
  mapGetProxyKeyOutput
} from './types/wallet';
import { client } from './openapi/client.gen';
import { HibitError } from './error';
import { mapCancelOrdersCborInput, mapSubmitSpotOrderCborInput } from './types/order/payload';
import { HIBIT_MAINNET_API_ENDPOINT, HIBIT_TESTNET_API_ENDPOINT } from './constant';
import { IWalletApi } from './wallet-api';

/**
 * Interface representing the Hibit API.
 */
export interface IHibitClient {
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
   * Get the asset information.
   *
   * @param {GetAssetInput} input - The input parameters for getting asset information.
   * @returns {Promise<AssetInfo[]>} A promise that resolves to the asset information.
   */
  getAsset(input: GetAssetInput): Promise<AssetInfo[]>;

  /**
   * Retrieves the balances of assets on a specific chain.
   *
   * @param {GetChainBalancesInput} input - The input parameters for getting chain balances.
   * @returns {Promise<Map<string, BigNumber>>} A promise that resolves to a map where the key is the asset ID (bigint)
   * and the value is the balance (BigNumber).
   */
  getChainBalances(input: GetChainBalancesInput): Promise<Map<string, BigNumber>>;

  /**
   * Get the withdraw fee for an asset.
   *
   * @param {GetWithdrawFeeInfoInput} input - The input parameters for getting the withdraw fee information.
   * @returns {Promise<AssetWithdrawFeeInfo>} A promise that resolves to the withdraw fee information for the asset.
   */
  getWithdrawFee(input: GetWithdrawFeeInfoInput): Promise<AssetWithdrawFeeInfo>;

  /**
   * Get the list of markets.
   *
   * @param {GetMarketsInput} input - The input parameters for getting markets.
   * @returns {Promise<PageResponse<MarketInfo>>} A promise that resolves to the list of markets.
   */
  getMarkets(input: GetMarketsInput): Promise<PageResponse<MarketInfo>>;

  /**
   * Get the market information.
   *
   * @param {bigint} marketId - The market id to get the information for.
   * @returns {Promise<MarketInfo>} A promise that resolves to the market information.
   */
  getMarket(marketId: bigint): Promise<MarketInfo>;

  /**
   * Get the 24-hour ticker information for markets.
   *
   * @param {GetMarket24HrTickerInput} input - The input parameters for getting market tickers.
   * @returns {Promise<PageResponse<Market24HrTickerInfo>>} A promise that resolves to the list of market tickers.
   */
  getMarkets24HrTicker(input?: GetMarket24HrTickerInput): Promise<Array<Market24HrTickerInfo>>;

  /**
   * Get the extended 24-hour ticker information for markets.
   *
   * @param {GetMarket24HrTickerInput} input - The input parameters for getting market tickers.
   * @returns {Promise<Array<Market24HrTickerExtendInfo>>} A promise that resolves to the list of extended market tickers.
   */
  getMarkets24HrTickerExtended(input?: GetMarket24HrTickerInput): Promise<Array<Market24HrTickerExtendInfo>>;

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
   * @param {GetMarketKlineInput} input - The input parameters for getting market k-lines.
   * @returns {Promise<PageResponse<MarketKlineItem>>} A promise that resolves to the list of market k-lines.
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
   * @param {DecimalOptions} decimalOptions - Required, the decimal options for the base and quote assets.
   * @param {number} nonce - Optional, the nonce to use for the transaction, if not provided, the nonce will be fetched automatically.
   * @returns {Promise<void>} A promise that resolves when the spot order is created.
   */
  submitSpotOrder(input: SubmitSpotOrderInput, decimalOptions: DecimalOptions, nonce?: number): Promise<void>;

  /**
   * Cancel a spot order.
   *
   * @param {CancelSpotOrderInput} input - The input parameters for canceling a spot order.
   * @param {number} nonce - Optional, the nonce to use for the transaction, if not provided, the nonce will be fetched automatically.
   * @returns {Promise<void>} A promise that resolves when the spot order is canceled.
   */
  cancelSpotOrder(input: CancelSpotOrderInput, nonce?: number): Promise<void>;

  /**
   * Get the list of orders.
   * @param {GetOrdersInput} input - The input parameters for getting orders.
   * @returns {Promise<PageResponse<OrderInfo>>} A promise that resolves to the list of orders.
   */
  getOrders(input: GetOrdersInput): Promise<PageResponse<OrderInfo>>;

  /**
   * Retrieves a specific order based on the provided input.
   *
   * The input must have exactly one of the following properties set: `orderId`, `clientOrderId`, or `txHash`.
   *
   * @param {GetOrderInput} input - The input parameters for getting the order.
   * @param {string} [input.orderId] - The unique identifier of the order. Must be set if `clientOrderId` and `txHash` are not provided.
   * @param {string} [input.clientOrderId] - The client order identifier. Format: "${HIN}_${nonce}". Example: "10001_123". Must be set if `orderId` and `txHash` are not provided.
   * @param {string} [input.txHash] - The transaction hash associated with the order. Must be set if `orderId` and `clientOrderId` are not provided.
   * @returns {Promise<OrderInfo>} A promise that resolves to the order information.
   */
  getOrder(input: GetOrderInput): Promise<OrderInfo>;

  /**
   * Get the list of trades for an order.
   *
   * @param {string} orderId - The order id to get the trades for.
   * @returns {Promise<Array<OrderTradeRecord>>} A promise that resolves to the list of trades for the order.
   */
  getOrderTrades(orderId: string): Promise<Array<OrderTradeRecord>>;

  /**
   * Register a wallet on the Hibit platform.
   *
   * @param {WalletRegisterInput} input - The input parameters for registering a wallet.
   * @returns {Promise<void>} A promise that resolves when the wallet is successfully registered.
   */
  walletRegister(input: WalletRegisterInput): Promise<void>;

  /**
   * Get information about a registered wallet.
   *
   * @param {GetRegisteredWalletInfoInput} input - The input parameters for retrieving wallet information.
   * @returns {Promise<RegisteredWalletInfo>} A promise that resolves to the registered wallet information.
   */
  getRegisteredWalletInfo(input: GetRegisteredWalletInfoInput): Promise<RegisteredWalletInfo>;

  /**
   * Reset the proxy key associated with the wallet.
   *
   * @param {ResetProxyKeyInput} input - The input parameters for resetting the proxy key.
   * @returns {Promise<ProxyKeypair>} A promise that resolves to the new proxy keypair.
   */
  resetProxyKey(input: ResetProxyKeyInput): Promise<void>;

  /**
   * Get the proxy keypair for the wallet.
   *
   * @param {GetProxyKeyInput} input - The input parameters for getting the proxy keypair.
   * @returns {Promise<ProxyKeypair>} A promise that resolves to the proxy keypair.
   */
  getProxyKeypair(input: GetProxyKeyInput): Promise<ProxyKeypair>;

  /**
   * Get the wallet balance.
   *
   * @param {GetWalletBalancesInput} input - The input parameters for getting the wallet balance.
   * @returns {Promise<Map<string, BigNumber>>} A promise that resolves to the wallet balance.
   */
  getWalletBalances(input: GetWalletBalancesInput): Promise<Map<string, BigNumber>>;

  /**
   * Withdraw assets from the Hibit platform.
   *
   * @param {WithdrawInput} input - The input parameters for the withdrawal.
   * @returns {Promise<void>} A promise that resolves when the withdrawal is successfully initiated.
   */
  withdraw(input: WithdrawInput): Promise<void>;

  /**
   * Get the nonce.
   *
   * @param {bigint} hin - The HIN (hibit chain identity number) of the wallet.
   * @returns {Promise<bigint>} A promise that resolves to the nonce.
   */
  getNonce(hin: bigint): Promise<bigint>;
}

export class HibitClient implements IHibitClient {
  //@ts-expect-error - no constructor
  private options: HibitApiOptions;
  private walletApi?: IWalletApi;

  getOptions(): HibitApiOptions {
    return this.options;
  }

  setOptions(options: HibitApiOptions) {
    this.options = options;

    client.setConfig({
      baseUrl: options.network === HibitNetwork.Mainnet ? HIBIT_MAINNET_API_ENDPOINT : HIBIT_TESTNET_API_ENDPOINT
    });
  }

  setWalletApi(walletApi: IWalletApi) {
    this.walletApi = walletApi;
  }

  /*-------------basic start----------------*/
  async getTimestamp(): Promise<number> {
    const apiName = 'getTimestamp';
    const response = await getV1Timestamp();

    this.ensureSuccess(apiName, response.data);

    if (!response.data?.data?.timestamp) {
      HibitError.throwInvalidResponseError(apiName);
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

  async getAsset(input: GetAssetInput): Promise<AssetInfo[]> {
    const apiName = 'getAsset';
    const response = await getV1Asset(mapGetAssetInput(input));

    this.ensureSuccess(apiName, response.data);
    return response.data!.data!.map((asset) => mapAssetInfo(asset));
  }

  async getChainBalances(input: GetChainBalancesInput): Promise<Map<string, BigNumber>> {
    const apiName = 'getChainBalances';
    const response = await getV1ChainBalances(mapGetChainBalancesInput(input));

    this.ensureSuccess(apiName, response.data);

    const result = new Map<string, BigNumber>();
    for (const [assetId, balance] of Object.entries(response!.data!.data as Record<string, string>)) {
      result.set(assetId, BigNumber(balance));
    }
    return result;
  }

  async getWithdrawFee(input: GetWithdrawFeeInfoInput): Promise<AssetWithdrawFeeInfo> {
    const apiName = 'getWithdrawFee';
    const response = await getV1AssetWithdrawalFee(mapGetWithdrawFeeInfoInput(input));

    this.ensureSuccess(apiName, response.data);

    return mapAssetWithdrawFeeInfo(response.data!.data!);
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

  async getMarket(marketId: bigint): Promise<MarketInfo> {
    const apiName = 'getMarket';
    const response = await getV1Market(mapGetMarketInput(marketId));

    this.ensureSuccess(apiName, response.data);

    return mapMarketInfo(response.data!.data!);
  }

  async getMarketsTicker(marketId?: bigint): Promise<Array<Market24HrTickerInfo>> {
    const apiName = 'getMarketsTicker';
    const response = await getV1MarketsTicker(mapGetMarketsTickerInput(marketId));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.items!.map((ticker) => mapMarket24HrTickerInfo(ticker));
  }

  async getMarkets24HrTicker(input?: GetMarket24HrTickerInput): Promise<Array<Market24HrTickerInfo>> {
    const apiName = 'getMarkets24HrTicker';
    const response = await getV1MarketsTicker(mapGetMarkets24HrTickerInput(input || {}));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.items!.map((ticker) => mapMarket24HrTickerInfo(ticker));
  }

  async getMarkets24HrTickerExtended(input?: GetMarket24HrTickerInput): Promise<Array<Market24HrTickerExtendInfo>> {
    const apiName = 'getMarkets24HrTickerExtended';
    const response = await getV1MarketsTickerExtended(mapGetMarkets24HrTickerInput(input || {}));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.items!.map((ticker) => mapMarket24HrTickerExtendInfo(ticker));
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
    this.ensureHIN(apiName);

    const response = await getV1Orders(mapGetOrdersInput(input));
    this.ensureSuccess(apiName, response.data);

    return {
      items: response.data!.data!.items!.map((order) => mapOrderInfo(order)),
      totalCount: response.data!.data!.totalCount!
    };
  }

  async getOrder(input: GetOrderInput): Promise<OrderInfo> {
    const apiName = 'getOrder';

    if (!validateGetOrderInput(input)) {
      HibitError.throwBadRequestError(
        apiName,
        400,
        'Must have exactly one of the following properties set: `OrderId`, `ClientOrderId`, or `TxHash`'
      );
    }

    const response = await getV1Order(mapGetOrderInput(input));

    this.ensureSuccess(apiName, response.data);

    return mapOrderInfo(response.data!.data!);
  }

  async getOrderTrades(orderId: string): Promise<Array<OrderTradeRecord>> {
    const apiName = 'getOrderTrades';
    const response = await getV1OrderTrades(mapGetOrderTradesInput(orderId));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.map((trade) => mapOrderTradeRecord(trade));
  }

  async submitSpotOrder(input: SubmitSpotOrderInput, decimalOptions: DecimalOptions, nonce?: number): Promise<void> {
    const apiName = 'submitSpotOrder';
    this.ensurePrivateKey(apiName);

    const nonceBigInt = nonce ? BigInt(nonce) : await this.getNonce(this.options.hin!);
    const mappedInput = mapSubmitSpotOrderCborInput(input, decimalOptions);
    const tx = TransactionManager.createL2Transaction(
      TransactionType.CreateSpotOrder,
      this.options.hin!,
      nonceBigInt | 0n,
      mappedInput
    );
    const signedTx = TransactionManager.sign(tx, this.options.proxyKey!);
    const resp = await postV1TxSubmitSpotOrder(mapTransactionToApiRequest(signedTx));

    this.ensureSuccess(apiName, resp.data);
  }

  async cancelSpotOrder(input: CancelSpotOrderInput, nonce?: number): Promise<void> {
    const apiName = 'cancelSpotOrder';
    this.ensurePrivateKey(apiName);

    if (input.isCancelAll === undefined || input.isCancelAll === null) {
      input.isCancelAll = false;
    }

    const nonceBigInt = nonce ? BigInt(nonce) : await this.getNonce(this.options.hin!);
    const mappedInput = mapCancelOrdersCborInput(input);
    const tx = TransactionManager.createL2Transaction(
      TransactionType.CancelSpotOrder,
      this.options.hin!,
      nonceBigInt | 0n,
      mappedInput
    );
    const signedTx = TransactionManager.sign(tx, this.options.proxyKey!);
    const resp = await postV1TxCancelSpotOrder(mapTransactionToApiRequest(signedTx));

    this.ensureSuccess(apiName, resp.data);
  }

  /*-------------order end----------------*/

  async walletRegister(input: WalletRegisterInput): Promise<void> {
    const apiName = 'walletRegister';
    this.ensureWalletApi(apiName);

    const message = this.walletApi!.generateWalletRegistrationMessage(input);
    const signature = await this.walletApi!.signMessage(message);
    const originWalletRequest = new OriginWalletTransaction(input.chain, ChainNetwork.AnyNetwork, message, signature);
    const resp = await postV1WalletRegister(mapToWalletRegisterApiRequest(originWalletRequest));

    this.ensureSuccess(apiName, resp.data);
  }

  async getRegisteredWalletInfo(input: GetRegisteredWalletInfoInput): Promise<RegisteredWalletInfo> {
    const apiName = 'getRegisteredWalletInfo';
    this.ensureWalletApi(apiName);

    const resp = await getV1WalletInfo(mapGetRegisteredWalletInfoInput(input));

    this.ensureSuccess(apiName, resp.data);

    return mapGetRegisteredWalletInfoOutput(resp.data!.data!);
  }

  async resetProxyKey(input: ResetProxyKeyInput): Promise<void> {
    const apiName = 'resetProxyKey';
    this.ensureWalletApi(apiName);

    const message = this.walletApi!.generateWalletResetProxyKeyMessage(input);
    const signature = await this.walletApi!.signMessage(message);
    // this parameter is required bug ignored in the current implementation
    const ignoredChainParam = Chain.Ethereum;
    const originWalletRequest = new OriginWalletTransaction(
      ignoredChainParam,
      ChainNetwork.AnyNetwork,
      message,
      signature
    );
    const resp = await postV1ProxyKeyReset(mapToWalletRegisterApiRequest(originWalletRequest));

    this.ensureSuccess(apiName, resp.data);
  }

  async getProxyKeypair(input: GetProxyKeyInput): Promise<ProxyKeypair> {
    const apiName = 'getProxyKeypair';
    this.ensureWalletApi(apiName);

    const message = this.walletApi!.generateGetProxyKeyMessage(input);
    const signature = await this.walletApi!.signMessage(message);
    // this parameter is required bug ignored in the current implementation
    const ignoredChainParam = Chain.Ethereum;
    const originWalletRequest = new OriginWalletTransaction(
      ignoredChainParam,
      ChainNetwork.AnyNetwork,
      message,
      signature
    );
    const resp = await postV1ProxyKey(mapToGetProxyKeyApiRequest(originWalletRequest));

    this.ensureSuccess(apiName, resp.data);

    return mapGetProxyKeyOutput(resp.data!.data!);
  }

  async getWalletBalances(input: GetWalletBalancesInput): Promise<Map<string, BigNumber>> {
    const apiName = 'getWalletBalances';
    const resp = await getV1WalletBalances(mapGetWalletBalancesInput(input));

    this.ensureSuccess(apiName, resp.data);

    const result = new Map<string, BigNumber>();
    for (const [assetId, balance] of Object.entries(resp!.data!.data as Record<string, string>)) {
      result.set(assetId, BigNumber(balance));
    }
    return result;
  }

  async withdraw(input: WithdrawInput): Promise<void> {
    const apiName = 'withdraw';
    this.ensureHIN(apiName);
    this.ensureWalletApi(apiName);

    const message = this.walletApi!.generateWithdrawMessage(input, this.options.hin!);
    const signature = await this.walletApi!.signMessage(message);
    const originWalletRequest = new OriginWalletTransaction(
      input.targetChain,
      input.targetChainNetwork,
      message,
      signature
    );
    const resp = await postV1ProxyKey(mapToGetProxyKeyApiRequest(originWalletRequest));

    this.ensureSuccess(apiName, resp.data);
  }

  async getNonce(hin: bigint): Promise<bigint> {
    const apiName = 'getNonce';
    const response = await getV1WalletNonce(mapGetNonceInput(hin));

    this.ensureSuccess(apiName, response.data);

    return BigInt(response.data!.data!.nonce!);
  }

  private ensureSuccess<T extends HibitApiResponse>(apiName: string, response?: T) {
    if (response?.code != 200) {
      HibitError.throwBadRequestError(apiName, response?.code, response?.message);
    }
  }

  private ensurePrivateKey(apiName: string) {
    this.ensureHIN(apiName);
    if (!this.options.proxyKey) {
      HibitError.throwRequiredPrivKeyError(apiName);
    }
  }

  private ensureHIN(apiName: string) {
    if (!this.options.hin) {
      HibitError.throwRequiredHINError(apiName);
    }
  }

  private ensureWalletApi(apiName: string) {
    if (!this.walletApi) {
      HibitError.throwRequiredWalletApiError(apiName);
    }
  }
}

/**
 * Options for configuring the Hibit API.
 */
export interface HibitApiOptions {
  /**
   * The proxy key used for authentication.
   *
   * Note: This is required for all transactional operations.
   */
  proxyKey?: HexString;

  /**
   * The HIN (hibit chain identity number) of the wallet.
   *
   * Note: This is required for all transactional operations.
   */
  hin?: bigint;

  network: HibitNetwork;
}

export const hibitClient = new HibitClient();
