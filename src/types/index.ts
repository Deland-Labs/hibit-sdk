export type HexString = string;
export type { AssetInfo, SubAssetInfo, GetAssetsInput, GetAssetInput, GetChainBalancesInput } from './asset';
export { Chain, ChainNetwork, ChainId, type ChainInfo } from './chain';
export * from './enums';
export type * from './market';
export type * from './order';
export type * from './wallet';
export type * from './broker';
export { SwapInput } from './broker';
export { Transaction } from './tx';

export type HibitApiResponse = { code?: number; message?: string | null };

/**
 * Represents a paginated response.
 *
 * @template T - The type of the items in the response.
 * @property {T[]} items - The list of items.
 * @property {number} totalCount - The total number of items.
 */
export type PageResponse<T> = {
  items: T[];
  totalCount: number;
};
