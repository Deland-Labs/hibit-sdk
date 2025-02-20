import { Ex3ExchangeOpenApiAppServicesChainInfoDto } from '../client';

export type ChainInfo = {
  /**
   * chain id
   */
  chainId: string;
  /**
   * address for user to deposit
   */
  depositAddress?: string;
  /**
   * display name
   */
  displayName?: string;
};

export function mapChainInfo(chain: Ex3ExchangeOpenApiAppServicesChainInfoDto): ChainInfo {
  return {
    chainId: chain.chainId,
    depositAddress: chain.depositAddress || undefined,
    displayName: chain.displayName || undefined
  };
}
