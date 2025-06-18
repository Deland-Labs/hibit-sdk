import { Chain, ChainAssetType } from '../../src';

/**
 * Maps chains to their supported asset types
 */
export const chainAssetTypeMap = new Map<Chain, ChainAssetType[]>([
  // Kaspa chain supports Native KAS and KRC20 tokens
  [Chain.Kaspa, [ChainAssetType.Native, ChainAssetType.KRC20]],

  // Ethereum chain supports Native ETH and ERC20 tokens
  [Chain.Ethereum, [ChainAssetType.Native, ChainAssetType.ERC20]],

  // Bitcoin chain supports Native BTC and BRC20 tokens
  [Chain.Bitcoin, [ChainAssetType.Native, ChainAssetType.BRC20]],

  // Solana chain supports Native SOL and SPL tokens
  [Chain.Solana, [ChainAssetType.Native, ChainAssetType.SPL]],

  // Dfinity chain supports Native ICP, ICP tokens, and ICRC3 tokens
  [Chain.Dfinity, [ChainAssetType.Native, ChainAssetType.ICP, ChainAssetType.ICRC3]],

  // Ton chain supports Native TON and Jetton tokens
  [Chain.Ton, [ChainAssetType.Native, ChainAssetType.Jetton]],

  // Tron chain supports Native TRX and TRC20 tokens
  [Chain.Tron, [ChainAssetType.Native, ChainAssetType.TRC20]]
]);

/**
 * Get supported asset types for a given chain ID
 * @param chainId The chain ID string (e.g., "111111_0" for Kaspa mainnet)
 * @returns Array of supported ChainAssetType values, or all types if chain not found
 */
export const getSupportedAssetTypes = (chainId: string): ChainAssetType[] => {
  if (!chainId) {
    // Return all asset types if no chain is selected
    return Object.values(ChainAssetType).filter((value) => typeof value === 'number') as ChainAssetType[];
  }

  // Extract chain part from chainId (format: "chain_network")
  const chainPart = chainId.split('_')[0];
  const chain = Chain.fromString(chainPart);

  if (!chain) {
    // If we can't parse the chain, return all asset types as fallback
    return Object.values(ChainAssetType).filter((value) => typeof value === 'number') as ChainAssetType[];
  }

  return getSupportedAssetTypesForChain(chain);
};

/**
 * Get supported asset types for a given chain
 * @param chain The Chain object
 * @returns Array of supported ChainAssetType values, or all types if chain not found
 */
export const getSupportedAssetTypesForChain = (chain: Chain): ChainAssetType[] => {
  // Find the matching chain in our map
  for (const [mapChain, supportedTypes] of chainAssetTypeMap) {
    if (mapChain.equals(chain)) {
      return supportedTypes;
    }
  }

  // If chain is not in our map, return all asset types as fallback
  return Object.values(ChainAssetType).filter((value) => typeof value === 'number') as ChainAssetType[];
};

/**
 * Check if a specific asset type is supported by a chain
 * @param chainId The chain ID string
 * @param assetType The asset type to check
 * @returns true if supported, false otherwise
 */
export const isAssetTypeSupported = (chainId: string, assetType: ChainAssetType): boolean => {
  const supportedTypes = getSupportedAssetTypes(chainId);
  return supportedTypes.includes(assetType);
};

/**
 * Check if a specific asset type is supported by a chain
 * @param chain The Chain object
 * @param assetType The asset type to check
 * @returns true if supported, false otherwise
 */
export const isAssetTypeSupportedForChain = (chain: Chain, assetType: ChainAssetType): boolean => {
  const supportedTypes = getSupportedAssetTypesForChain(chain);
  return supportedTypes.includes(assetType);
};
