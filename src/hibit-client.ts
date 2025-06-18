import BigNumber from 'bignumber.js';
import {
  AssetInfo,
  AssetWithdrawFeeInfo,
  CancelSpotOrderInput,
  ChainInfo,
  DecimalOptions,
  GetAssetInput,
  GetAssetsInput,
  GetChainBalancesInput,
  GetMarket24HrTickerInput,
  GetMarketDepthInput,
  GetMarketKlineInput,
  GetMarketsInput,
  GetMarketTradeInput,
  GetOrderInput,
  GetOrdersInput,
  GetProxyKeyInput,
  GetRegisteredWalletInfoInput,
  GetWalletBalancesInput,
  GetWithdrawFeeInfoInput,
  HexString,
  HibitApiResponse,
  HibitNetwork,
  LimitOrderDetails,
  Market24HrTickerExtendInfo,
  Market24HrTickerInfo,
  MarketDepth,
  MarketInfo,
  MarketKlineItem,
  MarketSwapInfo,
  OrderInfo,
  OrderTradeRecord,
  PageResponse,
  ProxyKeypair,
  RegisteredWalletInfo,
  ResetProxyKeyInput,
  SubmitSpotOrderInput,
  SwapV2OrderDetails,
  Trade,
  TransactionType,
  TrySwapInput,
  TrySwapResult,
  WalletRegisterInput,
  WithdrawInput,
  WithdrawDetailsInfo
} from './types';
import {
  getV1Asset,
  getV1Assets,
  getV1AssetWithdrawalFee,
  getV1ChainBalances,
  getV1Chains,
  getV1Market,
  getV1MarketDepth,
  getV1MarketKline,
  getV1Markets,
  getV1MarketsSwap,
  getV1MarketsTicker,
  getV1MarketsTickerExtended,
  getV1MarketTrade,
  getV1Order,
  getV1Orders,
  getV1OrderTrades,
  getV1Timestamp,
  getV1WalletBalances,
  getV1WalletInfo,
  getV1WalletNonce,
  getV1WithdrawDetails,
  postV1MarketTrySwap,
  postV1ProxyKey,
  postV1ProxyKeyReset,
  postV1TxCancelSpotOrder,
  postV1TxSubmitSpotOrder,
  postV1Withdraw,
  postV1WalletRegister
} from './openapi';
import { mapChainInfo } from './types/chain';
import {
  mapAssetInfo,
  mapAssetWithdrawFeeInfo,
  mapGetAssetInput,
  mapGetAssetsInput,
  mapGetChainBalancesInput,
  mapGetWithdrawFeeInfoInput
} from './types/asset';
import {
  mapGetMarketDepthInput,
  mapGetMarketInput,
  mapGetMarketKlineInput,
  mapGetMarkets24HrTickerInput,
  mapGetMarketsInput,
  mapGetMarketsSwapInfoInput,
  mapGetMarketsTickerInput,
  mapGetMarketTradeInput,
  mapMarket24HrTickerExtendInfo,
  mapMarket24HrTickerInfo,
  mapMarketDepth,
  mapMarketInfo,
  mapMarketKlineInfo,
  mapMarketSwapInfo,
  mapMarketTradeInfo,
  mapTrySwapInput,
  mapTrySwapResult
} from './types/market';
import {
  mapGetOrderInput,
  mapGetOrdersInput,
  mapGetOrderTradesInput,
  mapOrderInfo,
  mapOrderTradeRecord,
  validateGetOrderInput
} from './types/order';
import { TransactionManager } from './tx-manager';
import { mapTransactionToApiRequest, OriginWalletTransaction } from './types/tx';
import {
  mapGetNonceInput,
  mapGetProxyKeyOutput,
  mapGetRegisteredWalletInfoInput,
  mapGetRegisteredWalletInfoOutput,
  mapGetWalletBalancesInput,
  mapToGetProxyKeyApiRequest,
  mapToWalletRegisterApiRequest
} from './types/wallet';
import { mapGetWithdrawDetailsInput, mapWithdrawDetailsInfo } from './types/withdraw';
import { client } from './openapi/client.gen';
import { HibitError } from './error';
import { mapCancelOrdersCborInput, mapSubmitSpotOrderCborInput } from './types/order/payload';
import { HIBIT_MAINNET_API_ENDPOINT, HIBIT_TESTNET_API_ENDPOINT, PROXY_KEY_ENCRYPT_SOURCE_MSG } from './constant';
import { IWalletApi } from './wallet-api';
import { Keypair } from './Keypair';

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
   * @param {bigint} [hin] - The HIN of the wallet. If not provided, will use the HIN from client options.
   * @returns {Promise<bigint>} A promise that resolves to the nonce.
   */
  getNonce(hin?: bigint): Promise<bigint>;

  /**
   * Try swap simulation to estimate swap results.
   * @param input - The swap simulation input parameters
   * @returns A promise that resolves to the swap simulation result
   */
  trySwap(input: TrySwapInput): Promise<TrySwapResult>;

  /**
   * Get withdrawal details by transaction hash.
   *
   * @param {string} txHash - The transaction hash of the withdrawal.
   * @returns {Promise<WithdrawDetailsInfo>} A promise that resolves to the withdrawal details information.
   */
  getWithdrawDetails(txHash: string): Promise<WithdrawDetailsInfo>;
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
    this.validateGetAssetsInput(apiName, input);
    const response = await getV1Assets(mapGetAssetsInput(input));

    this.ensureSuccess(apiName, response.data);

    return {
      items: response.data!.data!.items!.map((asset) => mapAssetInfo(asset)),
      totalCount: response.data!.data!.totalCount
    } as PageResponse<AssetInfo>;
  }

  async getAsset(input: GetAssetInput): Promise<AssetInfo[]> {
    const apiName = 'getAsset';
    this.validateGetAssetInput(apiName, input);
    const response = await getV1Asset(mapGetAssetInput(input));

    this.ensureSuccess(apiName, response.data);
    return response.data!.data!.map((asset) => mapAssetInfo(asset));
  }

  async getChainBalances(input: GetChainBalancesInput): Promise<Map<string, BigNumber>> {
    const apiName = 'getChainBalances';
    this.validateGetChainBalancesInput(apiName, input);
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
    this.validateGetWithdrawFeeInput(apiName, input);
    const response = await getV1AssetWithdrawalFee(mapGetWithdrawFeeInfoInput(input));

    this.ensureSuccess(apiName, response.data);

    return mapAssetWithdrawFeeInfo(response.data!.data!);
  }

  /*-------------basic end----------------*/

  /*-------------market start-------------*/

  async getMarkets(input: GetMarketsInput): Promise<PageResponse<MarketInfo>> {
    const apiName = 'getMarkets';
    this.validateGetMarketsInput(apiName, input);
    const response = await getV1Markets(mapGetMarketsInput(input));

    this.ensureSuccess(apiName, response.data);

    return {
      items: response.data!.data!.items!.map((market) => mapMarketInfo(market)),
      totalCount: response.data!.data!.totalCount
    } as PageResponse<MarketInfo>;
  }

  async getMarket(marketId: bigint): Promise<MarketInfo> {
    const apiName = 'getMarket';
    this.validateMarketId(apiName, marketId);
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
    this.validateGetMarketDepthInput(apiName, input);
    const response = await getV1MarketDepth(mapGetMarketDepthInput(input));

    this.ensureSuccess(apiName, response.data);

    return mapMarketDepth(response.data!.data!);
  }

  async getMarketKline(input: GetMarketKlineInput): Promise<PageResponse<MarketKlineItem>> {
    const apiName = 'getMarketKline';
    this.validateGetMarketKlineInput(apiName, input);
    const response = await getV1MarketKline(mapGetMarketKlineInput(input));

    this.ensureSuccess(apiName, response.data);

    return {
      items: response.data!.data!.items!.map((kline) => mapMarketKlineInfo(kline)),
      totalCount: response.data!.data!.totalCount!
    };
  }

  async getMarketTrade(input: GetMarketTradeInput): Promise<PageResponse<Trade>> {
    const apiName = 'getMarketTrade';
    this.validateGetMarketTradeInput(apiName, input);
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
    this.validateGetOrdersInput(apiName, input);
    this.ensureHIN(apiName);

    // Use input.hin if provided, otherwise use hin from options
    const effectiveHin = input.hin ?? this.options.hin!;
    const inputWithHin = { ...input, hin: effectiveHin };

    const response = await getV1Orders(mapGetOrdersInput(inputWithHin));
    this.ensureSuccess(apiName, response.data);

    return {
      items: response.data!.data!.items!.map((order) => mapOrderInfo(order)),
      totalCount: response.data!.data!.totalCount!
    };
  }

  async getOrder(input: GetOrderInput): Promise<OrderInfo> {
    const apiName = 'getOrder';
    this.validateGetOrderInput(apiName, input);

    const response = await getV1Order(mapGetOrderInput(input));

    this.ensureSuccess(apiName, response.data);

    return mapOrderInfo(response.data!.data!);
  }

  async getOrderTrades(orderId: string): Promise<Array<OrderTradeRecord>> {
    const apiName = 'getOrderTrades';
    this.validateOrderId(apiName, orderId);
    const response = await getV1OrderTrades(mapGetOrderTradesInput(orderId));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.map((trade) => mapOrderTradeRecord(trade));
  }

  async submitSpotOrder(input: SubmitSpotOrderInput, decimalOptions: DecimalOptions, nonce?: number): Promise<void> {
    const apiName = 'submitSpotOrder';
    this.validateSubmitSpotOrderInput(apiName, input, decimalOptions);
    this.ensurePrivateKey(apiName);

    const nonceBigInt = nonce ? BigInt(nonce) : await this.getNonce();
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
    this.validateCancelSpotOrderInput(apiName, input);
    this.ensurePrivateKey(apiName);

    if (input.isCancelAll === undefined || input.isCancelAll === null) {
      input.isCancelAll = false;
    }

    const nonceBigInt = nonce ? BigInt(nonce) : await this.getNonce();
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
    this.validateWalletRegisterInput(apiName, input);
    this.ensureWalletApi(apiName);

    const message = this.walletApi!.generateWalletRegistrationMessage(input);
    const signature = await this.walletApi!.signMessage(message);
    const originWalletRequest = new OriginWalletTransaction(input.chain, message, undefined, signature);
    const resp = await postV1WalletRegister(mapToWalletRegisterApiRequest(originWalletRequest));

    this.ensureSuccess(apiName, resp.data);
  }

  async getRegisteredWalletInfo(input: GetRegisteredWalletInfoInput): Promise<RegisteredWalletInfo> {
    const apiName = 'getRegisteredWalletInfo';
    this.validateGetRegisteredWalletInfoInput(apiName, input);
    this.ensureWalletApi(apiName);

    const resp = await getV1WalletInfo(mapGetRegisteredWalletInfoInput(input));

    this.ensureSuccess(apiName, resp.data);

    return mapGetRegisteredWalletInfoOutput(resp.data!.data!);
  }

  async resetProxyKey(input: ResetProxyKeyInput): Promise<void> {
    const apiName = 'resetProxyKey';
    this.validateResetProxyKeyInput(apiName, input);
    this.ensureWalletApi(apiName);

    const aseKey = await this.walletApi!.signMessage(PROXY_KEY_ENCRYPT_SOURCE_MSG);
    input.proxyPrivateKey = Keypair.encryptPrivateKey(input.proxyPrivateKey!, aseKey);
    const message = this.walletApi!.generateWalletResetProxyKeyMessage(input, this.options.hin!);
    const signature = await this.walletApi!.signMessage(message);
    const originWalletRequest = new OriginWalletTransaction(input.chain, message, undefined, signature);
    const resp = await postV1ProxyKeyReset(mapToWalletRegisterApiRequest(originWalletRequest));

    this.ensureSuccess(apiName, resp.data);
  }

  async getProxyKeypair(input: GetProxyKeyInput): Promise<ProxyKeypair> {
    const apiName = 'getProxyKeypair';
    this.validateGetProxyKeyInput(apiName, input);
    this.ensureWalletApi(apiName);

    const message = this.walletApi!.generateGetProxyKeyMessage(input, this.options.hin!);
    const signature = await this.walletApi!.signMessage(message);
    const originWalletRequest = new OriginWalletTransaction(input.chain, message, undefined, signature);
    const resp = await postV1ProxyKey(mapToGetProxyKeyApiRequest(originWalletRequest));

    this.ensureSuccess(apiName, resp.data);

    return mapGetProxyKeyOutput(resp.data!.data!);
  }

  async getWalletBalances(input: GetWalletBalancesInput): Promise<Map<string, BigNumber>> {
    const apiName = 'getWalletBalances';
    this.validateGetWalletBalancesInput(apiName, input);
    this.ensureHIN(apiName);

    // Use input.hin if provided, otherwise use hin from options
    const effectiveHin = input.hin ?? this.options.hin!;
    const inputWithHin = { ...input, hin: effectiveHin };

    const resp = await getV1WalletBalances(mapGetWalletBalancesInput(inputWithHin));

    this.ensureSuccess(apiName, resp.data);

    const result = new Map<string, BigNumber>();
    for (const [assetId, balance] of Object.entries(resp!.data!.data as Record<string, string>)) {
      result.set(assetId, BigNumber(balance));
    }
    return result;
  }

  async withdraw(input: WithdrawInput): Promise<void> {
    const apiName = 'withdraw';
    this.validateWithdrawInput(apiName, input);
    this.ensureHIN(apiName);
    this.ensureWalletApi(apiName);

    const message = this.walletApi!.generateWithdrawMessage(input, this.options.hin!);
    const signature = await this.walletApi!.signMessage(message);
    const originWalletRequest = new OriginWalletTransaction(
      input.targetChain,
      message,
      input.targetChainNetwork,
      signature
    );
    const resp = await postV1Withdraw(mapToGetProxyKeyApiRequest(originWalletRequest));

    this.ensureSuccess(apiName, resp.data);
  }

  async getNonce(hin?: bigint): Promise<bigint> {
    const apiName = 'getNonce';
    this.ensureHIN(apiName);

    // Use provided hin if given, otherwise use hin from options
    const effectiveHin = hin ?? this.options.hin!;
    const response = await getV1WalletNonce(mapGetNonceInput(effectiveHin));

    this.ensureSuccess(apiName, response.data);

    return BigInt(response.data!.data!.nonce!);
  }

  async trySwap(input: TrySwapInput): Promise<TrySwapResult> {
    const apiName = 'trySwap';
    this.validateTrySwapInput(apiName, input);
    const resp = await postV1MarketTrySwap(mapTrySwapInput(input));

    this.ensureSuccess(apiName, resp.data);

    return mapTrySwapResult(resp.data!.data!);
  }

  async getWithdrawDetails(txHash: string): Promise<WithdrawDetailsInfo> {
    const apiName = 'getWithdrawDetails';
    this.validateTxHash(apiName, txHash);
    const response = await getV1WithdrawDetails(mapGetWithdrawDetailsInput(txHash));

    this.ensureSuccess(apiName, response.data);

    return mapWithdrawDetailsInfo(response.data!.data!);
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

  private validateResetProxyKeyInput(apiName: string, input: ResetProxyKeyInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!input.chain) {
      HibitError.throwMissingRequiredParameterError(apiName, 'chain');
    }
    if (input.nonce === undefined || input.nonce === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'nonce');
    }
    if (!input.signatureSchema) {
      HibitError.throwMissingRequiredParameterError(apiName, 'signatureSchema');
    }
    if (!input.proxyPrivateKey) {
      HibitError.throwMissingRequiredParameterError(apiName, 'proxyPrivateKey');
    }
    if (!input.proxyPublicKey) {
      HibitError.throwMissingRequiredParameterError(apiName, 'proxyPublicKey');
    }
  }

  private validateGetProxyKeyInput(apiName: string, input: GetProxyKeyInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!input.chain) {
      HibitError.throwMissingRequiredParameterError(apiName, 'chain');
    }
    if (!input.signatureSchema) {
      HibitError.throwMissingRequiredParameterError(apiName, 'signatureSchema');
    }
    if (input.timestamp === undefined || input.timestamp === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'timestamp');
    }
  }

  private validateWalletRegisterInput(apiName: string, input: WalletRegisterInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!input.chain) {
      HibitError.throwMissingRequiredParameterError(apiName, 'chain');
    }
    if (!input.signatureSchema) {
      HibitError.throwMissingRequiredParameterError(apiName, 'signatureSchema');
    }
  }

  private validateWithdrawInput(apiName: string, input: WithdrawInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!input.targetChain) {
      HibitError.throwMissingRequiredParameterError(apiName, 'targetChain');
    }
    if (!input.targetChainNetwork) {
      HibitError.throwMissingRequiredParameterError(apiName, 'targetChainNetwork');
    }
    if (input.nonce === undefined || input.nonce === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'nonce');
    }
    if (!input.address) {
      HibitError.throwMissingRequiredParameterError(apiName, 'address');
    }
    if (input.assetId === undefined || input.assetId === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'assetId');
    }
    if (input.assetDecimals === undefined || input.assetDecimals === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'assetDecimals');
    }
    if (input.amount === undefined || input.amount === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'amount');
    }
    if (input.fee === undefined || input.fee === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'fee');
    }
  }

  private validateGetMarketDepthInput(apiName: string, input: GetMarketDepthInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (input.marketId === undefined || input.marketId === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'marketId');
    }
    if (input.index === undefined || input.index === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'index');
    }
    if (input.limit !== undefined && input.limit !== null) {
      if (input.limit < 1 || input.limit > 100) {
        HibitError.throwInvalidParameterError(apiName, 'limit', 'must be between 1 and 100');
      }
    }
  }

  private validateGetMarketKlineInput(apiName: string, input: GetMarketKlineInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (input.marketId === undefined || input.marketId === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'marketId');
    }
    if (input.tickSpace === undefined || input.tickSpace === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'tickSpace');
    }
    if (input.limit !== undefined && input.limit !== null) {
      if (input.limit < 1 || input.limit > 500) {
        HibitError.throwInvalidParameterError(apiName, 'limit', 'must be between 1 and 500');
      }
    }
  }

  private validateMarketId(apiName: string, marketId: bigint) {
    if (marketId === undefined || marketId === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'marketId');
    }
  }

  private validateGetMarketTradeInput(apiName: string, input: GetMarketTradeInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (input.marketId === undefined || input.marketId === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'marketId');
    }
    if (input.limit !== undefined && input.limit !== null) {
      if (input.limit < 1 || input.limit > 500) {
        HibitError.throwInvalidParameterError(apiName, 'limit', 'must be between 1 and 500');
      }
    }
  }

  private validateGetOrdersInput(apiName: string, input: GetOrdersInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    // Note: hin is optional - if not provided, client options.hin will be used
    if (input.limit !== undefined && input.limit !== null) {
      if (input.limit < 1 || input.limit > 500) {
        HibitError.throwInvalidParameterError(apiName, 'limit', 'must be between 1 and 500');
      }
    }
    if (input.offset !== undefined && input.offset !== null) {
      if (input.offset < 0) {
        HibitError.throwInvalidParameterError(apiName, 'offset', 'must be non-negative');
      }
    }
  }

  private validateGetOrderInput(apiName: string, input: GetOrderInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!validateGetOrderInput(input)) {
      HibitError.throwInvalidParameterError(
        apiName,
        'identifiers',
        'must have exactly one of the following properties set: orderId, clientOrderId, or txHash'
      );
    }
  }

  private validateOrderId(apiName: string, orderId: string) {
    if (!orderId) {
      HibitError.throwMissingRequiredParameterError(apiName, 'orderId');
    }
  }

  private validateGetAssetsInput(apiName: string, input: GetAssetsInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (input.limit !== undefined && input.limit !== null) {
      if (input.limit < 1 || input.limit > 500) {
        HibitError.throwInvalidParameterError(apiName, 'limit', 'must be between 1 and 500');
      }
    }
    if (input.offset !== undefined && input.offset !== null) {
      if (input.offset < 0) {
        HibitError.throwInvalidParameterError(apiName, 'offset', 'must be non-negative');
      }
    }
  }

  private validateGetAssetInput(apiName: string, input: GetAssetInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    // At least one of assetId or tokenAddress must be provided
    if (!input.assetId && !input.tokenAddress) {
      HibitError.throwInvalidParameterError(apiName, 'input', 'either assetId or tokenAddress must be provided');
    }
  }

  private validateGetChainBalancesInput(apiName: string, input: GetChainBalancesInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
  }

  private validateGetWithdrawFeeInput(apiName: string, input: GetWithdrawFeeInfoInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!input.rootAssetId) {
      HibitError.throwMissingRequiredParameterError(apiName, 'rootAssetId');
    }
    if (!input.targetChain) {
      HibitError.throwMissingRequiredParameterError(apiName, 'targetChain');
    }
  }

  private validateGetMarketsInput(apiName: string, input: GetMarketsInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (input.limit !== undefined && input.limit !== null) {
      if (input.limit < 1 || input.limit > 500) {
        HibitError.throwInvalidParameterError(apiName, 'limit', 'must be between 1 and 500');
      }
    }
    if (input.offset !== undefined && input.offset !== null) {
      if (input.offset < 0) {
        HibitError.throwInvalidParameterError(apiName, 'offset', 'must be non-negative');
      }
    }
  }

  private validateSubmitSpotOrderInput(apiName: string, input: SubmitSpotOrderInput, decimalOptions: DecimalOptions) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!decimalOptions) {
      HibitError.throwMissingRequiredParameterError(apiName, 'decimalOptions');
    }
    if (!input.marketId) {
      HibitError.throwMissingRequiredParameterError(apiName, 'marketId');
    }
    if (!input.orderCategory) {
      HibitError.throwMissingRequiredParameterError(apiName, 'orderCategory');
    }

    // At least one of limitOrderDetails or swapV2OrderDetails must be provided, but not both
    if (!input.limitOrderDetails && !input.swapV2OrderDetails) {
      HibitError.throwInvalidParameterError(
        apiName,
        'input',
        'either limitOrderDetails or swapV2OrderDetails must be provided'
      );
    }
    if (input.limitOrderDetails && input.swapV2OrderDetails) {
      HibitError.throwInvalidParameterError(
        apiName,
        'input',
        'limitOrderDetails and swapV2OrderDetails cannot both be provided'
      );
    }

    // Validate limitOrderDetails if provided
    if (input.limitOrderDetails) {
      this.validateLimitOrderDetails(apiName, input.limitOrderDetails);
    }

    // Validate swapV2OrderDetails if provided
    if (input.swapV2OrderDetails) {
      this.validateSwapV2OrderDetails(apiName, input.swapV2OrderDetails);
    }
  }

  private validateLimitOrderDetails(apiName: string, details: LimitOrderDetails) {
    if (!details.orderSide) {
      HibitError.throwMissingRequiredParameterError(apiName, 'limitOrderDetails.orderSide');
    }
    if (details.price === undefined || details.price === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'limitOrderDetails.price');
    }
    if (details.price <= 0) {
      HibitError.throwInvalidParameterError(apiName, 'limitOrderDetails.price', 'must be greater than 0');
    }
    if (details.volume === undefined || details.volume === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'limitOrderDetails.volume');
    }
    if (details.volume <= 0) {
      HibitError.throwInvalidParameterError(apiName, 'limitOrderDetails.volume', 'must be greater than 0');
    }
  }

  private validateSwapV2OrderDetails(apiName: string, details: SwapV2OrderDetails) {
    if (!details.orderSide) {
      HibitError.throwMissingRequiredParameterError(apiName, 'swapV2OrderDetails.orderSide');
    }
    if (details.exactTokens === undefined || details.exactTokens === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'swapV2OrderDetails.exactTokens');
    }
    if (details.exactTokens <= 0) {
      HibitError.throwInvalidParameterError(apiName, 'swapV2OrderDetails.exactTokens', 'must be greater than 0');
    }
    if (details.exactTokensType === undefined || details.exactTokensType === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'swapV2OrderDetails.exactTokensType');
    }

    // Validate optional slippage protection parameters if provided
    if (details.minOut !== undefined && details.minOut !== null && details.minOut <= 0) {
      HibitError.throwInvalidParameterError(apiName, 'swapV2OrderDetails.minOut', 'must be greater than 0');
    }
    if (details.maxIn !== undefined && details.maxIn !== null && details.maxIn <= 0) {
      HibitError.throwInvalidParameterError(apiName, 'swapV2OrderDetails.maxIn', 'must be greater than 0');
    }
  }

  private validateCancelSpotOrderInput(apiName: string, input: CancelSpotOrderInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }

    // Scenario 1: Cancel by order ID
    if (input.orderId !== undefined) {
      if (typeof input.orderId !== 'string' || input.orderId.trim() === '') {
        HibitError.throwInvalidParameterError(apiName, 'orderId', 'must be a non-empty string');
      }
      // When orderId is provided, other parameters should not be used
      return;
    }

    // Scenario 2 & 3: Cancel by market (requires marketId)
    if (!input.marketId) {
      HibitError.throwInvalidParameterError(
        apiName,
        'input',
        'either orderId must be provided, or marketId must be provided for market-based cancellation'
      );
    }

    // Scenario 2: Cancel by market ID and side
    if (input.orderSide && !input.isCancelAll) {
      // Valid scenario: cancel orders by market and side
      return;
    }

    // Scenario 3: Cancel all orders in market
    if (input.isCancelAll) {
      // When isCancelAll is true, orderSide should not be specified
      if (input.orderSide) {
        HibitError.throwInvalidParameterError(
          apiName,
          'input',
          'orderSide should not be specified when isCancelAll is true'
        );
      }
      return;
    }

    // If marketId is provided but neither orderSide nor isCancelAll is specified
    HibitError.throwInvalidParameterError(
      apiName,
      'input',
      'when marketId is provided, either orderSide must be specified (to cancel by side) or isCancelAll must be true (to cancel all orders)'
    );
  }

  private validateGetRegisteredWalletInfoInput(apiName: string, input: GetRegisteredWalletInfoInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!input.chain) {
      HibitError.throwMissingRequiredParameterError(apiName, 'chain');
    }
    if (!input.publicKey && !input.address) {
      HibitError.throwInvalidParameterError(apiName, 'input', 'either publicKey or address must be provided');
    }
  }

  private validateGetWalletBalancesInput(apiName: string, input: GetWalletBalancesInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
  }

  private validateTrySwapInput(apiName: string, input: TrySwapInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!input.marketId) {
      HibitError.throwMissingRequiredParameterError(apiName, 'marketId');
    }
    if (!input.side) {
      HibitError.throwMissingRequiredParameterError(apiName, 'side');
    }
    if (!input.exactTokensType) {
      HibitError.throwMissingRequiredParameterError(apiName, 'exactTokensType');
    }
    if (input.exactTokens === undefined || input.exactTokens === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'exactTokens');
    }
    if (input.exactTokens <= 0) {
      HibitError.throwInvalidParameterError(apiName, 'exactTokens', 'must be greater than 0');
    }
  }

  private validateTxHash(apiName: string, txHash: string) {
    if (!txHash) {
      HibitError.throwMissingRequiredParameterError(apiName, 'txHash');
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
