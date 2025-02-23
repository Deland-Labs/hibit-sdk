import BigNumber from 'bignumber.js';

export type HexString = string;
export type { ChainInfo } from './chain';
export type * from './asset';
export type * from './enums';
export * from './enums';
export type * from './market';
export type * from './order';
export type { AssetInfo, SubAssetInfo, GetAssetsInput } from './asset';
export { Transaction } from './tx';
export type HibitApiResponse = { code?: number; message?: string | null };
export interface UserKeyPair {
  privateKey: string;
}
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
