import BigNumber from 'bignumber.js';
import { getNativeChainDecimals, getNativeChainUnit } from './chainUtils';

// Universal token info interface
export interface TokenInfo {
  decimals: number;
  symbol: string;
}

// Get token info for any asset type
export const getTokenInfo = async (
  chainId: string,
  assetType: number,
  assetAddress?: string
): Promise<TokenInfo | null> => {
  try {
    if (!chainId) return null;

    // Native assets
    if (!assetType || assetType === 0) {
      // ChainAssetType.Native = 0
      return {
        decimals: getNativeChainDecimals(chainId),
        symbol: getNativeChainUnit(chainId)
      };
    }

    // KRC20 tokens (Kaspa)
    if (assetType === 11) {
      // ChainAssetType.KRC20 = 11
      if (!assetAddress) return null;
      const { getKrc20Decimals } = await import('./kasware-wallet');
      const decimals = await getKrc20Decimals(assetAddress);
      return {
        decimals,
        symbol: assetAddress.toUpperCase()
      };
    }

    // ERC20 tokens (Ethereum and EVM chains)
    if (assetType === 3) {
      // ChainAssetType.ERC20 = 3
      if (!assetAddress) return null;
      const { getErc20Decimals } = await import('./evm-wallet');
      const decimals = await getErc20Decimals(assetAddress);
      return {
        decimals,
        symbol: assetAddress.toUpperCase()
      };
    }

    return null;
  } catch (e) {
    console.warn('Failed to get token info:', e);
    return null;
  }
};

// Calculate actual amount with decimals for any token
export const calculateActualAmount = async (
  rawAmount: string | number,
  chainId: string,
  assetType: number,
  assetAddress?: string
): Promise<string> => {
  try {
    if (!rawAmount || !chainId) return '';

    const tokenInfo = await getTokenInfo(chainId, assetType, assetAddress);
    if (!tokenInfo) return '';

    return new BigNumber(rawAmount).shiftedBy(-tokenInfo.decimals).toFixed();
  } catch (e) {
    console.warn('Failed to calculate actual amount:', e);
    return '';
  }
};
