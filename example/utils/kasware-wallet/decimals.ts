import { GetKrc20BalanceResponse } from './types';

// KRC20 token decimals mapping for common tokens
// This is a fallback when user doesn't have the token in their wallet
export const KRC20_DECIMALS_MAP: Record<string, number> = {
  // Add known KRC20 tokens and their decimals here
  HITZ: 8,
  NACHO: 8,
  KAS: 8 // Kaspa native token when represented as KRC20
  // Add more tokens as needed
};

declare const window: any;

// Get decimals for a KRC20 token with fallback to hardcoded values
export const getKrc20DecimalsWithFallback = async (tokenAddress: string): Promise<number> => {
  try {
    console.log('[DEBUG] getKrc20DecimalsWithFallback called with:', tokenAddress);
    console.log('[DEBUG] window.kasware exists:', !!window.kasware);

    if (!window.kasware) {
      console.log('[DEBUG] Kasware not available, using fallback');
      return KRC20_DECIMALS_MAP[tokenAddress.toUpperCase()] || 8; // Default to 8 decimals
    }

    const balanceRes: GetKrc20BalanceResponse = await window.kasware.getKRC20Balance();
    console.log('[DEBUG] KRC20 balance response:', balanceRes);

    const tickBalance = balanceRes.find((item) => item.tick.toUpperCase() === tokenAddress.toUpperCase());
    console.log('[DEBUG] Found tick balance:', tickBalance);

    if (tickBalance) {
      const result = Number(tickBalance.dec);
      console.log('[DEBUG] Got decimals from wallet:', result);
      return result;
    } else {
      // Fallback to hardcoded values
      const fallbackDecimals = KRC20_DECIMALS_MAP[tokenAddress.toUpperCase()] || 8;
      console.log('[DEBUG] Using fallback decimals:', fallbackDecimals);
      return fallbackDecimals;
    }
  } catch (e: any) {
    console.warn('Failed to get KRC20 decimals from wallet, using fallback:', e);
    const fallbackDecimals = KRC20_DECIMALS_MAP[tokenAddress.toUpperCase()] || 8;
    console.log('[DEBUG] Using fallback decimals due to error:', fallbackDecimals);
    return fallbackDecimals;
  }
};
