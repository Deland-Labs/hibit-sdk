import {
  Ex3ExchangeOpenApiAppServicesAssetWithdrawFeeInfoDto,
  Ex3ExchangeOpenApiAppServicesRootAssetInfoDto,
  Ex3ExchangeOpenApiAppServicesSubAssetInfoDto,
  type GetV1AssetData,
  GetV1AssetsData,
  GetV1ChainBalancesData,
  GetV1AssetWithdrawalFeeData,
  Options
} from '../openapi';
import { ChainAssetType } from './enums';
import { toChainAssetType } from './enums/chain-asset-type';
import { Chain, ChainId, ChainNetwork } from './chain';

export type AssetInfo = {
  /**
   * ID of the asset.
   */
  assetId: string;
  /**
   * id of chain
   */
  chainId?: ChainId;
  /**
   * Chain asset type
   */
  chainAssetType: ChainAssetType;
  /**
   * address of smart contract. e.g., eth address for erc20, ticker for krc20
   */
  contractAddress: string;
  /**
   * decimals
   */
  decimalPlaces: string;
  /**
   * the asset can be used only used as base token if true
   */
  isBaseToken: boolean;
  /**
   * display name
   */
  displayName?: string;
  /**
   * symbol
   */
  assetSymbol: string;
  /**
   * sub assets
   */
  subAssets?: Array<SubAssetInfo>;
};

export type SubAssetInfo = {
  /**
   * ID of the asset.
   */
  assetId: string;
  /**
   * id of chain
   */
  chainId?: ChainId;
  /**
   * Chain asset type
   */
  chainAssetType: string;
  /**
   * address of smart contract. e.g., eth address for erc20, ticker for krc20
   */
  contractAddress: string;
  /**
   * decimals
   */
  decimalPlaces: string;
};

export type GetWithdrawFeeInfoInput = {
  /**
   * Root asset ID for which the withdrawal fee information is requested.
   */
  rootAssetId: bigint;

  /**
   * The blockchain where the withdrawal will be processed
   */
  targetChain: Chain;

  /**
   * The network type (e.g., mainnet, testnet) for the blockchain
   */
  targetNetwork: ChainNetwork;
};

export type AssetWithdrawFeeInfo = {
  /**
   * Root ID of the asset
   */
  rootAssetId: bigint;

  /**
   * ID of the target asset
   */
  targetAssetId: bigint;

  /**
   * The rate used to calculate withdrawal fees
   */
  feeRate: bigint;

  /**
   * The decimal precision for the fee rate
   */
  rateDecimal: number;

  /**
   * The minimum fee amount that will be charged for withdrawals
   */
  minFee: bigint;
};

export type GetAssetsInput = {
  /**
   * chain ids to filter the asset list.
   */
  chainIds?: Array<ChainId>;
  /**
   * chain asset types to filter the asset list.
   */
  chainAssetTypes?: Array<ChainAssetType>;
  /**
   * maximum number of items to return. Max value is 500.
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
   *  supported sorting parameters are: "AssetId".
   *
   * default sorting is by " AssetId desc".
   */
  orderBy?: string;
};

export type GetAssetInput = {
  /**
   * ID of the asset, represented as a bigint.
   */
  assetId?: bigint;

  /**
   * Address of the token contract.
   */
  tokenAddress?: string;
};

export type GetChainBalancesInput = {
  /**
   * ID of the asset, represented as a bigint.
   */
  assetId?: string;
};

export function mapAssetInfo(asset: Ex3ExchangeOpenApiAppServicesRootAssetInfoDto): AssetInfo {
  return {
    assetId: asset.assetId,
    chainId: asset.chainId ? ChainId.fromString(asset.chainId) : undefined,
    chainAssetType: toChainAssetType(asset.chainAssetType)!,
    contractAddress: asset.contractAddress,
    decimalPlaces: asset.decimalPlaces,
    isBaseToken: asset.isBaseToken,
    displayName: asset.displayName || undefined,
    assetSymbol: asset.assetSymbol,
    subAssets: asset.subAssets?.map((subAsset) => mapSubAssetInfo(subAsset)) || undefined
  };
}

export function mapSubAssetInfo(subAsset: Ex3ExchangeOpenApiAppServicesSubAssetInfoDto): SubAssetInfo {
  return {
    assetId: subAsset.assetId,
    chainId: subAsset.chainId ? ChainId.fromString(subAsset.chainId) : undefined,
    chainAssetType: subAsset.chainAssetType,
    contractAddress: subAsset.contractAddress,
    decimalPlaces: subAsset.decimalPlaces
  };
}

export function mapGetAssetsInput(input: GetAssetsInput): Options<GetV1AssetsData> {
  return {
    query: {
      ChainIds: input.chainIds?.map((chainId) => chainId.toString()),
      ChainAssetTypes: input.chainAssetTypes?.map((type) => type.toString()),
      Limit: input.limit,
      Offset: input.offset,
      OrderBy: input.orderBy
    }
  };
}

export function mapGetAssetInput(input: GetAssetInput): Options<GetV1AssetData> {
  return {
    query: {
      AssetId: input.assetId?.toString(),
      TokenAddress: input.tokenAddress
    }
  };
}

export function mapGetChainBalancesInput(input: GetChainBalancesInput): Options<GetV1ChainBalancesData> {
  return {
    query: {
      AssetId: input.assetId?.toString()
    }
  };
}

export function mapGetWithdrawFeeInfoInput(input: GetWithdrawFeeInfoInput): Options<GetV1AssetWithdrawalFeeData> {
  return {
    query: {
      RootAssetId: input.rootAssetId.toString(),
      TargetChain: input.targetChain.toString(),
      TargetChainNetwork: input.targetNetwork.toString()
    }
  };
}

export function mapAssetWithdrawFeeInfo(
  input: Ex3ExchangeOpenApiAppServicesAssetWithdrawFeeInfoDto
): AssetWithdrawFeeInfo {
  return {
    rootAssetId: BigInt(input.rootAssetId),
    targetAssetId: BigInt(input.targetAssetId),
    feeRate: BigInt(input.feeRate),
    rateDecimal: Number(input.rateDecimal),
    minFee: BigInt(input.minFee)
  };
}
