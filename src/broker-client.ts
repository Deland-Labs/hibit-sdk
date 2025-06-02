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
    const response = await getV1PaymentAddress(mapGetPaymentAddressInput(input));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.address!;
  }

  async quote(input: QuoteInput): Promise<QuoteResult> {
    const apiName = 'quote';
    const response = await getV1Quote(mapQuoteInput(input));

    this.ensureSuccess(apiName, response.data);

    return mapQuoteResult(response.data!.data!);
  }

  async swap(input: SwapInput): Promise<string> {
    const apiName = 'swap';
    const response = await postV1Swap(mapSwapInput(input));

    this.ensureSuccess(apiName, response.data);

    return response.data!.data!.agentOrderId!;
  }

  async getAgentOrder(orderId: string): Promise<AgentOrderData> {
    const apiName = 'getOrder';
    const response = await getV1Order(mapGetAgentOrderInput(orderId));

    this.ensureSuccess(apiName, response.data);

    return mapGeAgentOrderOutput(response.data!.data!);
  }

  private ensureSuccess(apiName: string, response: any) {
    if (response?.code !== 200) {
      HibitError.throwBadRequestError(apiName, response?.code, response?.message);
    }
  }
}

export const brokerClient = new BrokerClient();
