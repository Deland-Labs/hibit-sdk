import { Options, GetV1WalletNonceData, GetV1WalletBalancesData } from '../client';

/**
 * Input parameters for retrieving wallet balance information.
 * Used to query balances for a specific wallet and optionally filter by asset.
 *
 * @example Query all balances for a wallet
 * ```typescript
 * const input: GetWalletBalancesInput = {
 *   walletId: BigInt("12345")
 * };
 * ```
 *
 * @example Query balance for a specific asset
 * ```typescript
 * const input: GetWalletBalancesInput = {
 *   walletId: BigInt("12345"),
 *   assetId: BigInt("56789")
 * };
 * ```
 */
export type GetWalletBalancesInput = {
  /** The unique identifier of the wallet to query */
  walletId: bigint;

  /**
   * Optional asset ID to filter the balance query.
   * If provided, returns balance for only this asset.
   * If omitted, returns balances for all assets.
   */
  assetId?: bigint;
};
export function mapGetNonceInput(walletId: bigint): Options<GetV1WalletNonceData, boolean> {
  return {
    query: {
      WalletId: String(walletId)
    }
  };
}

export function mapGetWalletBalancesInput(input: GetWalletBalancesInput): Options<GetV1WalletBalancesData, boolean> {
  return {
    query: {
      WalletId: String(input.walletId),
      AssetId: input.assetId ? String(input.assetId) : undefined
    }
  };
}
