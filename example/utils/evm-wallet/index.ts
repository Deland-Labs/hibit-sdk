import { EVM_NATIVE_DECIMALS } from '../chainUtils';

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
