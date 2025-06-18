import BigNumber from 'bignumber.js';
import { getNativeChainDecimals, getNativeChainUnit, EVM_NATIVE_DECIMALS } from '../chainUtils';

declare const window: any;

// Get ERC20 token decimals
export const getErc20Decimals = async (tokenAddress: string): Promise<number> => {
  try {
    if (!window.ethereum) {
      throw new Error('MetaMask not found');
    }

    // If native token (no address or empty), return 18 decimals
    if (!tokenAddress || tokenAddress.trim() === '') {
      return EVM_NATIVE_DECIMALS;
    }

    // ERC20 decimals() function selector
    const data = '0x313ce567';

    const result = await window.ethereum.request({
      method: 'eth_call',
      params: [
        {
          to: tokenAddress,
          data: data
        },
        'latest'
      ]
    });

    // Parse result, returned as hex string
    const decimals = parseInt(result, 16);
    return isNaN(decimals) ? EVM_NATIVE_DECIMALS : decimals;
  } catch (e: any) {
    console.warn('Failed to get ERC20 decimals:', e);
    // Default to 18 decimals
    return EVM_NATIVE_DECIMALS;
  }
};

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

    // Token assets
    if (assetType === 11) {
      // ChainAssetType.KRC20 = 11
      if (!assetAddress) return null;
      const { getKrc20Decimals } = await import('../kasware-wallet');
      const decimals = await getKrc20Decimals(assetAddress);
      return {
        decimals,
        symbol: assetAddress.toUpperCase()
      };
    }

    if (assetType === 3) {
      // ChainAssetType.ERC20 = 3
      if (!assetAddress) return null;
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
