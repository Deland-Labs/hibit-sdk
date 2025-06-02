import {
  Ex3ExchangeOpenApiAppServicesRootAssetInfoDto,
  Ex3ExchangeOpenApiAppServicesSubAssetInfoDto,
  type GetV1AssetData,
  GetV1AssetsData,
  Options
} from '../openapi';
import { ChainAssetType } from './enums';
import { toChainAssetType } from './enums/chain-asset-type';
import { ChainId } from './chain';

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

export function mapGetAssetInput(assetId: bigint): Options<GetV1AssetData> {
  return {
    query: {
      AssetId: assetId.toString()
    }
  };
}
