import { Ex3ExchangeOpenApiAbstractionDtosWithdrawDetailsOutput } from '../openapi';
import { Chain, ChainNetwork } from './chain';
import { ChainAssetType, WithdrawalStatus } from './enums';
import { toChainAssetType } from './enums/chain-asset-type';

export type WithdrawInput = {
  nonce: bigint;
  targetChain: Chain;
  targetChainNetwork: ChainNetwork;
  address: string;
  assetId: bigint;
  assetDecimals: number;
  amount: number;
  fee: number;
};

export type WithdrawDetailsInfo = {
  txHash: string;
  status: WithdrawalStatus;
  chain: Chain;
  network: ChainNetwork;
  assetType: ChainAssetType;
  token: string;
  originChainTxHash?: string;
  volume: bigint;
  fee: bigint;
};

export function mapGetWithdrawDetailsInput(txHash: string): any {
  return {
    query: {
      txHash: txHash
    }
  };
}

export function mapWithdrawDetailsInfo(
  data: Ex3ExchangeOpenApiAbstractionDtosWithdrawDetailsOutput
): WithdrawDetailsInfo {
  return {
    txHash: data.txHash!,
    status: data.status as WithdrawalStatus,
    chain: Chain.fromString(data.chain!)!,
    network: ChainNetwork.fromString(data.network!)!,
    assetType: toChainAssetType(data.assetType!)!,
    token: data.token!,
    originChainTxHash: data.originChainTxHash as string | undefined,
    volume: BigInt(data.volume!),
    fee: BigInt(data.fee!)
  };
}
