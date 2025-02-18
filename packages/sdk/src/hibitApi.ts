import BigNumber from 'bignumber.js';
import { ClientRequestFactory } from './cbor';
import { CreateSpotOrderInput, TransactionType } from './types';
import {
  getV1WalletBalance,
  type GetV1WalletBalanceData,
  getV1WalletNonce,
  postV1TxSubmitSpotOrder,
  type PostV1TxSubmitSpotOrderData
} from './client';
import { Options } from '@hey-api/client-fetch';
import { client } from './client/client.gen.ts';

export interface IHibitApi {
  setOptions(options: HibitApiOptions): void;

  createSpotOrder(input: CreateSpotOrderInput): Promise<void>;

  getWalletBalance(): Promise<Map<string, BigNumber>>;

  getNonce(): Promise<BigNumber>;
}

export class HibitApi implements IHibitApi {
  // @ts-ignore
  private options: HibitApiOptions;

  setOptions(options: HibitApiOptions): void {
    this.options = options;
    client.setConfig({
      baseUrl: options.baseUrl
    });
  }

  async configEx3L2Request(sendOptions: Options): Promise<void> {
    if (!this.options.privateKey) {
      throw new Error('Invalid key pair');
    }
    const token = await ClientRequestFactory.createEx3L2HeaderToken({
      privateKey: this.options.privateKey
    });
    sendOptions.auth = () => `Ex3L2 ${token}`;
  }

  async configTxRequest<TInput>(
    txType: TransactionType,
    input: TInput,
    sendOptions: Options
  ): Promise<void> {
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

  async getWalletBalance(): Promise<Map<string, BigNumber>> {
    const options: Options<GetV1WalletBalanceData, boolean> = {};
    await this.configEx3L2Request(options);
    const resp = await getV1WalletBalance(options);
    if (resp.data?.code == 200) {
      const result = new Map<string, BigNumber>();
      for (const [assetId, balance] of Object.entries(
        resp.data.data as Record<string, string>
      )) {
        result.set(assetId, BigNumber(balance));
      }
      return result;
    }

    throw new Error('Get user assets failed');
  }

  async createSpotOrder(input: CreateSpotOrderInput): Promise<void> {
    const options: Options<PostV1TxSubmitSpotOrderData, boolean> = {};
    await this.configTxRequest(TransactionType.CreateSpotOrder, input, options);
    const resp = await postV1TxSubmitSpotOrder(options);
    if (resp.data?.code == 200) {
      return;
    }

    throw new Error('Submit order failed');
  }

  async getNonce(): Promise<BigNumber> {
    const resp = await getV1WalletNonce();
    if (resp.data?.code == 200) {
      // @ts-ignore
      return BigNumber(resp.data.data?.nonce);
    }
    throw new Error('Get nonce failed');
  }
}

export interface HibitApiOptions {
  baseUrl: string;
  privateKey: string;
  walletId: BigNumber;
}

export const hibitApi = new HibitApi();
