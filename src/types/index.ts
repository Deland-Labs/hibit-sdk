export type HexString = string;
export * from './asset';
export * from './chain';
export * from './enums';
export * from './market';
export * from './order';
export * from './wallet';
export * from './withdraw';
export * from './broker';
export * from './broker';
export * from './tx';

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
