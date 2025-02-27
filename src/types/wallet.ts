import { Options, GetV1WalletNonceData, GetV1WalletBalancesData } from '../openapi';

/**
 * Input parameters for retrieving wallet balance information.
 * Used to query balances for a specific wallet and optionally filter by asset.
 *
 * @example Query all balances for a wallet
 * ```typescript
 * const input: GetWalletBalancesInput = {
 *   hin: BigInt("12345")
 * };
 * ```
 *
 * @example Query balance for a specific asset
 * ```typescript
 * const input: GetWalletBalancesInput = {
 *   hin: BigInt("12345"),
 *   assetId: BigInt("56789")
 * };
 * ```
 */
export type GetWalletBalancesInput = {
  /** The HIN(hibit chain identity number) of the wallet to query */
  hin: bigint;

  /**
   * Optional asset ID to filter the balance query.
   * If provided, returns balance for only this asset.
   * If omitted, returns balances for all assets.
   */
  assetId?: bigint;
};

/**
 * Maps the HIN to the input format required for retrieving the wallet nonce.
 *
 * @param hin - The HIN (hibit chain identity number) of the wallet.
 * @returns An object containing the query parameters for the API call.
 */
export function mapGetNonceInput(hin: bigint): Options<GetV1WalletNonceData, boolean> {
  return {
    query: {
      HIN: String(hin)
    }
  };
}

export function mapGetWalletBalancesInput(input: GetWalletBalancesInput): Options<GetV1WalletBalancesData, boolean> {
  return {
    query: {
      HIN: String(input.hin),
      AssetId: input.assetId ? String(input.assetId) : undefined
    }
  };
}
