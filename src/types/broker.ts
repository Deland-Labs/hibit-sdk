import { ChainId } from './chain.ts';
import { Options } from '../openapi';
import {
  Ex3BrokerApiAppServicesDtosGetOrderOutput,
  Ex3BrokerApiAppServicesDtosQuoteResult,
  GetV1OrderData,
  GetV1PaymentAddressData,
  GetV1QuoteData,
  PostV1SwapData
} from '../broker-api';
import { ChainAssetType, WalletSignatureSchema } from './enums';

export type GetPaymentAddressInput = {
  /**
   * The HIN of the broker agent.
   */
  hin: bigint;
  /**
   * The chain of the payment address.
   */
  chainId: ChainId;
};

export type QuoteInput = {
  /**
   * The blockchain where the source asset currently resides (e.g., Bitcoin, Ethereum, Kaspa).
   */
  sourceChainId: ChainId;
  /**
   * The type of the source asset (Native, SPL, ERC20, KRC20 etc.).
   * Determines how the asset is identified and processed.
   */
  sourceAssetType: ChainAssetType;
  /**
   * The identifier for the source asset - either a contract address for tokens or a ticker symbol.
   * Should be null when SourceAssetType is Native (e.g., BTC, ETH, KAS).
   */
  sourceAsset?: string;
  /**
   * The amount of source asset to be exchanged/transferred, expressed in the smallest unit
   * of the asset (e.g., satoshi for Bitcoin, wei for Ethereum).
   */
  sourceVolume: bigint;
  /**
   * The destination blockchain for the exchange operation.
   * When null, the system will use the same chain as the source (intra-chain operation).
   */
  targetChainId?: ChainId;
  /**
   * The type of the target asset to receive.
   * When null, the system will use the same asset type as the source.
   */
  targetAssetType: ChainAssetType;
  /**
   * The identifier for the target asset - either a contract address for tokens or a ticker symbol.
   * Should be null when TargetAssetType is Native (e.g., BTC, ETH, KAS).
   */
  targetAsset?: string;
};

export type QuoteResult = {
  /**
   * The blockchain where the target asset resides (e.g., Ethereum, Bitcoin).
   */
  targetChainId: ChainId;
  /**
   * The gross amount of the target asset to be received before fees are deducted.
   */
  targetVolume: bigint;
  /**
   * The net amount of target asset the user will actually receive after all fees.
   * Calculated as: TargetVolume - GasFee - BrokerFee
   */
  receiveVolume: bigint;
  /**
   * Network transaction fee required for the operation, denominated in the target asset.
   */
  gasFee: bigint;
  /**
   * Service fee charged by the broker for facilitating the swap/transfer, denominated in the target asset.
   */
  brokerFee: bigint;
  /**
   * The percentage rate used to calculate the broker fee (as a decimal, e.g., 0.01 for 1%).
   */
  brokerFeeRate: number;
  /**
   * The effect this transaction would have on the market price, expressed as a percentage (decimal).
   * Higher values indicate the transaction may significantly affect the market price.
   */
  priceImpact: number;
  /**
   * Maximum allowed price movement (as a decimal) between quote and execution.
   * Helps protect against price volatility during transaction processing.
   */
  slippage: number;
  /**
   * The equivalent value of the TargetVolume converted to USD for comparison purposes.
   */
  targetVolumeInUsd: number;
};

export class SwapInput {
  /**
   * The HIN of the agent that initiated the swap operation.
   */
  hin: bigint;

  /**
   * The public key of the wallet that initiated the swap operation.
   */
  sourceWalletPublicKey: string;

  /**
   * The address of the wallet that initiated the swap operation.
   */
  sourceWalletAddress: string;

  /**
   * A unique identifier for the fund transfer tx.
   * For example, the hash of the transaction on the source blockchain.
   */
  txRef: string;

  /**
   * The blockchain where the source asset currently resides
   */
  sourceChainId: ChainId;

  /**
   * The type of the source asset (Native, SPL, ERC20, KRC20 etc.).
   * Determines how the asset is identified and processed.
   */
  sourceAssetType?: ChainAssetType;

  /**
   * The identifier for the source asset - either a contract address for tokens or a ticker symbol.
   * Should be null when SourceAssetType is Native (e.g., BTC, ETH, KAS).
   */
  sourceAsset?: string;

  /**
   * The amount of source asset to be exchanged/transferred, expressed in the smallest unit
   * of the asset (e.g., satoshi for Bitcoin, wei for Ethereum).
   */
  sourceVolume: bigint;

  /**
   * The destination blockchain for the exchange operation.
   * When null, the system will use the same chain as the source (intra-chain operation).
   */
  targetChainId?: ChainId;

  /**
   * The destination wallet address where the target assets will be sent.
   * When null, the system will use the source wallet address as the destination.
   */
  targetWalletAddress?: string;

  /**
   * The type of the target asset to receive.
   * When null, the system will use the same asset type as the source.
   */
  targetAssetType?: ChainAssetType;

  /**
   * The identifier for the target asset - either a contract address for tokens or a ticker symbol.
   * Should be null when TargetAssetType is Native (e.g., BTC, ETH, KAS).
   */
  targetAsset?: string;

  /**
   * The amount of target asset to be received, expressed in the smallest unit
   */
  targetVolume: bigint;

  /**
   * The minimum amount of target asset to be received, expressed in the smallest unit
   */
  targetVolumeMin: bigint;

  /**
   * The schema of the wallet signature used to sign the swap operation.
   */
  signatureSchema?: WalletSignatureSchema;

  /**
   * The signature of the swap operation.
   */
  signature?: string;

  constructor(params: {
    hin: bigint;
    sourceWalletPublicKey: string;
    sourceWalletAddress: string;
    txRef: string;
    sourceChainId: ChainId;
    sourceVolume: bigint;
    targetVolume: bigint;
    targetVolumeMin: bigint;
    sourceAssetType?: ChainAssetType;
    sourceAsset?: string;
    targetChainId?: ChainId;
    targetWalletAddress?: string;
    targetAssetType?: ChainAssetType;
    targetAsset?: string;
  }) {
    this.hin = params.hin;
    this.sourceWalletPublicKey = params.sourceWalletPublicKey;
    this.sourceWalletAddress = params.sourceWalletAddress;
    this.txRef = params.txRef;
    this.sourceChainId = params.sourceChainId;
    this.sourceAssetType = params.sourceAssetType;
    this.sourceAsset = params.sourceAsset;
    this.sourceVolume = params.sourceVolume;
    this.targetChainId = params.targetChainId;
    this.targetWalletAddress = params.targetWalletAddress;
    this.targetAssetType = params.targetAssetType;
    this.targetAsset = params.targetAsset;
    this.targetVolume = params.targetVolume;
    this.targetVolumeMin = params.targetVolumeMin;
  }

  toJson(): string {
    return JSON.stringify({
      hin: this.hin.toString(),
      sourceWalletPublicKey: this.sourceWalletPublicKey,
      sourceWalletAddress: this.sourceWalletAddress,
      txRef: this.txRef,
      sourceChainId: this.sourceChainId.toString(),
      sourceAssetType: this.sourceAssetType?.toString(),
      sourceAsset: this.sourceAsset,
      sourceVolume: this.sourceVolume.toString(),
      targetChainId: this.targetChainId?.toString(),
      targetWalletAddress: this.targetWalletAddress,
      targetAssetType: this.targetAssetType?.toString(),
      targetAsset: this.targetAsset,
      targetVolume: this.targetVolume.toString(),
      targetVolumeMin: this.targetVolumeMin.toString()
    });
  }

  setSignature(signature: string, schema: WalletSignatureSchema): void {
    this.signature = signature;
    this.signatureSchema = schema;
  }
}

export enum AgentOrderStatus {
  /**
   * The order is pending and has not yet been processed.
   */
  Pending = 'Pending',
  /**
   * The order was successfully executed.
   */
  Success = 'Success',
  /**
   * The order was rejected or failed.
   */
  Rejected = 'Rejected'
}

export type AgentOrderData = {
  /**
   * Agent order status
   */
  status: AgentOrderStatus;

  /**
   * The order executing transaction hash.
   */
  txHash: string;
};

export function mapGetPaymentAddressInput(input: GetPaymentAddressInput): Options<GetV1PaymentAddressData> {
  return {
    query: {
      HIN: input.hin.toString(),
      ChainId: input.chainId.toString()
    }
  };
}

export function mapQuoteInput(input: QuoteInput): Options<GetV1QuoteData> {
  return {
    query: {
      SourceChainId: input.sourceChainId?.toString(),
      SourceAssetType: input.sourceAssetType?.toString(),
      SourceAsset: input.sourceAsset,
      SourceVolume: input.sourceVolume?.toString(),
      TargetChainId: input.targetChainId?.toString(),
      TargetAssetType: input.targetAssetType?.toString(),
      TargetAsset: input.targetAsset
    }
  };
}

export function mapQuoteResult(result: Ex3BrokerApiAppServicesDtosQuoteResult): QuoteResult {
  return {
    targetChainId: ChainId.fromString(result.targetChainId!),
    targetVolume: BigInt(result.targetVolume!),
    receiveVolume: BigInt(result.receiveVolume!),
    gasFee: BigInt(result.gasFee!),
    brokerFee: BigInt(result.brokerFee!),
    brokerFeeRate: result.brokerFeeRate ?? 0,
    priceImpact: result.priceImpact ?? 0,
    slippage: result.slippage ?? 0,
    targetVolumeInUsd: result.targetVolumeInUsd ?? 0
  };
}

export function mapSwapInput(input: SwapInput): Options<PostV1SwapData> {
  return {
    body: {
      hin: input.hin.toString(),
      sourceWalletPublicKey: input.sourceWalletPublicKey,
      sourceWalletAddress: input.sourceWalletAddress,
      txRef: input.txRef,
      sourceChainId: input.sourceChainId.toString(),
      sourceAssetType: input.sourceAssetType?.toString(),
      sourceAsset: input.sourceAsset,
      sourceVolume: input.sourceVolume.toString(),
      targetChainId: input.targetChainId?.toString(),
      targetWalletAddress: input.targetWalletAddress,
      targetAssetType: input.targetAssetType?.toString(),
      targetAsset: input.targetAsset,
      targetVolume: input.targetVolume.toString(),
      targetVolumeMin: input.targetVolumeMin.toString(),
      signature: input.signature
    }
  };
}

export function mapGetAgentOrderInput(agentOrderId: string): Options<GetV1OrderData> {
  return {
    query: {
      OrderId: agentOrderId
    }
  };
}

export function mapGeAgentOrderOutput(result: Ex3BrokerApiAppServicesDtosGetOrderOutput): AgentOrderData {
  return {
    status: result.status as AgentOrderStatus,
    txHash: result.txHash!
  };
}
