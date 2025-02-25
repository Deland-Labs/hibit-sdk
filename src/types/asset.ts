import {
  Ex3ExchangeOpenApiAppServicesRootAssetInfoDto,
  Ex3ExchangeOpenApiAppServicesSubAssetInfoDto,
  GetV1AssetsData,
  Options
} from '../openapi';

/**
 * Represents a type of asset on a blockchain.
 * Provides static instances for supported asset types across different chains.
 *
 * @example
 * ```typescript
 * const erc20 = ChainAssetType.ERC20;
 * const native = ChainAssetType.Native;
 * console.log(erc20.toString()); // "3"
 * ```
 */
export class ChainAssetType {
  /**
   * The asset type identifier value
   */
  value: bigint;

  /**
   * Creates a new ChainAssetType instance
   * @param value - The asset type identifier as a bigint
   */
  constructor(value: bigint) {
    this.value = value;
  }

  /** Native blockchain token (Type ID: 0) */
  static Native = new ChainAssetType(0n);
  /** Native gas token (Type ID: 1) */
  static NativeGas = new ChainAssetType(1n);
  /** ERC20 token standard (Type ID: 3) */
  static ERC20 = new ChainAssetType(3n);
  /** ERC721 NFT standard (Type ID: 4) */
  static ERC721 = new ChainAssetType(4n);
  /** Internet Computer Protocol token (Type ID: 5) */
  static ICP = new ChainAssetType(5n);
  /** ICRC-3 token standard (Type ID: 6) */
  static ICRC3 = new ChainAssetType(6n);
  /** BRC20 token standard (Type ID: 7) */
  static BRC20 = new ChainAssetType(7n);
  /** Solana Program Library token (Type ID: 8) */
  static SPL = new ChainAssetType(8n);
  /** TRON TRC20 token standard (Type ID: 9) */
  static TRC20 = new ChainAssetType(9n);
  /** TON Jetton token standard (Type ID: 10) */
  static Jetton = new ChainAssetType(10n);
  /** Kaspa KRC20 token standard (Type ID: 11) */
  static KRC20 = new ChainAssetType(11n);

  /**
   * Creates a ChainAssetType instance from a string value
   * @param value - The asset type identifier as a string
   * @returns A new ChainAssetType instance or null if value is empty
   *
   * @example
   * ```typescript
   * const erc20 = ChainAssetType.fromString("3");
   * ```
   */
  static fromString(value: string): ChainAssetType | null {
    if (!value) {
      return null;
    }
    return new ChainAssetType(BigInt(value));
  }

  /**
   * Converts the asset type identifier to string
   * @returns The asset type identifier as a string
   */
  toString(): string {
    return this.value.toString();
  }

  /**
   * Checks if this asset type is equal to another asset type
   * @param other - The asset type to compare with
   * @returns True if the asset types are equal, false otherwise
   */
  equals(other: ChainAssetType): boolean {
    if (!other) {
      return false;
    }
    return this.value === other.value;
  }
}

export type AssetInfo = {
  /**
   * ID of the asset.
   */
  assetId: string;
  /**
   * id of chain
   */
  chainId?: string;
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
  chainId?: string;
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
   * chain ids to filter the markets list.
   */
  chainIds?: Array<string>;
  /**
   * chain asset types to filter the markets list.
   */
  chainAssetTypes?: Array<string>;
  /**
   * maximum number of items to return. maximum value is 500.
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
    chainId: asset.chainId || undefined,
    chainAssetType: asset.chainAssetType,
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
    chainId: subAsset.chainId || undefined,
    chainAssetType: subAsset.chainAssetType,
    contractAddress: subAsset.contractAddress,
    decimalPlaces: subAsset.decimalPlaces
  };
}

export function mapGetAssetsInput(input: GetAssetsInput): Options<GetV1AssetsData, boolean> {
  return {
    query: {
      ChainIds: input.chainIds,
      ChainAssetTypes: input.chainAssetTypes,
      Limit: input.limit,
      Offset: input.offset,
      OrderBy: input.orderBy
    }
  };
}
