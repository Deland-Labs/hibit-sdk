import {
  GetPaymentAddressInput,
  mapGetAgentOrderInput,
  mapGeAgentOrderOutput,
  mapGetPaymentAddressInput,
  mapQuoteInput,
  mapQuoteResult,
  mapSwapInput,
  AgentOrderData,
  QuoteInput,
  QuoteResult,
  SwapInput
} from './types/broker';
import { client } from './broker-api/client.gen';
import { HibitNetwork } from './types';
import { HIBIT_BROKER_API_ENDPOINT, HIBIT_TESTNET_BROKER_API_ENDPOINT } from './constant';
import { HibitError } from './error';
import { getV1Order, getV1PaymentAddress, getV1Quote, postV1Swap } from './broker-api';

export interface IBrokerClient {
  getPaymentAddress(input: GetPaymentAddressInput): Promise<string>;
  quote(input: QuoteInput): Promise<QuoteResult>;
  swap(input: SwapInput): Promise<string>;
  getAgentOrder(input: string): Promise<AgentOrderData>;
}

export interface BrokerApiOptions {
  network: HibitNetwork;
  hin?: bigint;
}

export class BrokerClient implements IBrokerClient {
  //@ts-expect-error - no constructor
  private options: BrokerApiOptions;

  getOptions(): BrokerApiOptions {
    return this.options;
  }

  setOptions(options: BrokerApiOptions): void {
    this.options = options;
    client.setConfig({
      baseUrl: options.network === HibitNetwork.Testnet ? HIBIT_TESTNET_BROKER_API_ENDPOINT : HIBIT_BROKER_API_ENDPOINT
    });
  }

  async getPaymentAddress(input: GetPaymentAddressInput): Promise<string> {
    const apiName = 'getPaymentAddress';
    this.validateGetPaymentAddressInput(apiName, input);

    // Ensure hin is set (use provided hin or fallback to options hin)
    const hinToUse = input.hin || this.ensureHin(apiName);
    const inputWithHin = { ...input, hin: hinToUse };

    const response = await getV1PaymentAddress(mapGetPaymentAddressInput(inputWithHin));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.address!;
  }

  async quote(input: QuoteInput): Promise<QuoteResult> {
    const apiName = 'quote';
    this.validateQuoteInput(apiName, input);

    const response = await getV1Quote(mapQuoteInput(input));

    this.ensureSuccess(apiName, response.data);

    return mapQuoteResult(response.data!.data!);
  }

  async swap(input: SwapInput): Promise<string> {
    const apiName = 'swap';
    this.validateSwapInput(apiName, input);

    const response = await postV1Swap(mapSwapInput(input));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.agentOrderId!;
  }

  async getAgentOrder(orderId: string): Promise<AgentOrderData> {
    const apiName = 'getAgentOrder';
    this.validateGetAgentOrderInput(apiName, orderId);

    const response = await getV1Order(mapGetAgentOrderInput(orderId));

    this.ensureSuccess(apiName, response.data);

    return mapGeAgentOrderOutput(response.data!.data!);
  }

  private ensureSuccess(apiName: string, response: any) {
    if (response?.code !== 200) {
      HibitError.throwBadRequestError(apiName, response?.code, response?.message);
    }
  }

  private validateGetPaymentAddressInput(apiName: string, input: GetPaymentAddressInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    // Use provided hin or fall back to options hin
    if (!input.hin) {
      this.ensureHin(apiName);
    }
    if (!input.chainId) {
      HibitError.throwMissingRequiredParameterError(apiName, 'chainId');
    }
  }

  private validateQuoteInput(apiName: string, input: QuoteInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!input.sourceChainId) {
      HibitError.throwMissingRequiredParameterError(apiName, 'sourceChainId');
    }
    if (input.sourceAssetType === undefined || input.sourceAssetType === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'sourceAssetType');
    }
    if (input.sourceVolume === undefined || input.sourceVolume === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'sourceVolume');
    }
    if (input.sourceVolume <= 0n) {
      HibitError.throwInvalidParameterError(apiName, 'sourceVolume', 'must be greater than 0');
    }
    if (input.targetAssetType === undefined || input.targetAssetType === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'targetAssetType');
    }
  }

  private validateSwapInput(apiName: string, input: SwapInput) {
    if (!input) {
      HibitError.throwMissingRequiredParameterError(apiName, 'input');
    }
    if (!input.hin) {
      HibitError.throwMissingRequiredParameterError(apiName, 'hin');
    }
    if (!input.sourceWalletPublicKey) {
      HibitError.throwMissingRequiredParameterError(apiName, 'sourceWalletPublicKey');
    }
    if (!input.sourceWalletAddress) {
      HibitError.throwMissingRequiredParameterError(apiName, 'sourceWalletAddress');
    }
    if (!input.txRef) {
      HibitError.throwMissingRequiredParameterError(apiName, 'txRef');
    }
    if (!input.sourceChainId) {
      HibitError.throwMissingRequiredParameterError(apiName, 'sourceChainId');
    }
    if (input.sourceVolume === undefined || input.sourceVolume === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'sourceVolume');
    }
    if (input.sourceVolume <= 0n) {
      HibitError.throwInvalidParameterError(apiName, 'sourceVolume', 'must be greater than 0');
    }
    if (input.targetVolume === undefined || input.targetVolume === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'targetVolume');
    }
    if (input.targetVolume <= 0n) {
      HibitError.throwInvalidParameterError(apiName, 'targetVolume', 'must be greater than 0');
    }
    if (input.targetVolumeMin === undefined || input.targetVolumeMin === null) {
      HibitError.throwMissingRequiredParameterError(apiName, 'targetVolumeMin');
    }
    if (input.targetVolumeMin <= 0n) {
      HibitError.throwInvalidParameterError(apiName, 'targetVolumeMin', 'must be greater than 0');
    }
    if (input.targetVolumeMin > input.targetVolume) {
      HibitError.throwInvalidParameterError(apiName, 'targetVolumeMin', 'cannot be greater than targetVolume');
    }
  }

  private validateGetAgentOrderInput(apiName: string, orderId: string) {
    if (!orderId) {
      HibitError.throwMissingRequiredParameterError(apiName, 'orderId');
    }
    if (typeof orderId !== 'string') {
      HibitError.throwInvalidParameterError(apiName, 'orderId', 'must be a string');
    }
    if (orderId.trim().length === 0) {
      HibitError.throwInvalidParameterError(apiName, 'orderId', 'cannot be empty');
    }
  }

  private ensureHin(apiName: string): bigint {
    if (!this.options?.hin) {
      HibitError.throwMissingRequiredParameterError(apiName, 'hin (please set it in broker client options)');
    }
    return this.options.hin!;
  }
}

export const brokerClient = new BrokerClient();
