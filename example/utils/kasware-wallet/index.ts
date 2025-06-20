import BigNumber from 'bignumber.js';
import { GetBalanceResponse, GetKrc20BalanceResponse, TransferKaspaResponse, TransferKrc20Response } from './types';

export type KaswareAccount = {
  address: string;
  publicKey: string;
};

export type KaswareNetwork = 'kaspa_mainnet' | 'kaspa_testnet_10';

declare const window: any;

export const SOMPI_DECIMALS = 8;

export const connect = async (network: KaswareNetwork): Promise<KaswareAccount> => {
  try {
    await window.kasware.requestAccounts();
    const currentNetwork: KaswareNetwork = await window.kasware.getNetwork();
    if (currentNetwork !== network) {
      await window.kasware.switchNetwork(network);
    }
    const accounts = await window.kasware.getAccounts();
    const pubKey = await window.kasware.getPublicKey();
    return {
      address: accounts[0].toLowerCase(),
      publicKey: pubKey
    };
  } catch (e: any) {
    throw new Error('KasWare connect: ' + (e.message ?? JSON.stringify(e)));
  }
};

export const sign = async (message: string) => {
  try {
    const signature: string = await window.kasware.signMessage(message);
    return `0x${signature}`;
  } catch (e: any) {
    throw new Error('KasWare sign: ' + (e.message ?? JSON.stringify(e)));
  }
};

export const transferKaspa = async (toAddress: string, originalAmount: number) => {
  try {
    if (!toAddress || originalAmount <= 0) {
      throw new Error('Invalid parameters');
    }
    const accounts = await window.kasware.getAccounts();
    if (!accounts.length) {
      throw new Error('Wallet not connected.');
    }
    const sompiAmount = new BigNumber(originalAmount).toNumber();
    const balanceRes: GetBalanceResponse = await window.kasware.getBalance();
    if (balanceRes.total < sompiAmount) {
      throw new Error('Not enough KAS balance');
    }
    const resString = await window.kasware.sendKaspa(toAddress, sompiAmount);
    const res = JSON.parse(resString) as TransferKaspaResponse;
    console.debug(`Transfer KAS: ${res}`);
    return res.id;
  } catch (e: any) {
    throw new Error('KasWare transferKaspa: ' + (e.message ?? JSON.stringify(e)));
  }
};

export const transferKrc20 = async (toAddress: string, originalAmount: number, tokenAddress: string) => {
  try {
    if (!toAddress || !tokenAddress || originalAmount <= 0) {
      throw new Error('Invalid parameters');
    }
    const accounts = await window.kasware.getAccounts();
    if (!accounts.length) {
      throw new Error('Wallet not connected.');
    }
    const balanceRes: GetKrc20BalanceResponse = await window.kasware.getKRC20Balance();
    const tickBalance = balanceRes.find((item) => item.tick.toUpperCase() === tokenAddress.toUpperCase());
    if (!tickBalance) {
      throw new Error(`Not enough KRC20(${tokenAddress}) balance`);
    }
    const amount = new BigNumber(originalAmount).toNumber();
    if (Number(tickBalance.balance) < amount) {
      throw new Error(`Not enough KRC20(${tokenAddress}) balance`);
    }
    const transferJson = {
      p: 'KRC-20',
      op: 'transfer',
      tick: tokenAddress.toUpperCase(),
      amt: amount.toString(),
      to: toAddress
    };
    const type = 4;
    const resString = await window.kasware.signKRC20Transaction(JSON.stringify(transferJson), type, toAddress);
    const res = JSON.parse(resString) as TransferKrc20Response;
    console.debug(`Transfer KRC20: ${res}`);
    return res.revealId;
  } catch (e: any) {
    throw new Error('KasWare transferKrc20: ' + (e.message ?? JSON.stringify(e)));
  }
};

export const getKrc20Decimals = async (tokenAddress: string): Promise<number> => {
  // Known KRC20 token decimals mapping
  const KRC20_DECIMALS_MAP: Record<string, number> = {
    HITZ: 8,
    NACHO: 8,
    KAS: 8
    // Add more known tokens here
  };

  try {
    console.log('[DEBUG] getKrc20Decimals called with:', tokenAddress);
    console.log('[DEBUG] window.kasware exists:', !!window.kasware);

    if (!window.kasware) {
      console.log('[DEBUG] Kasware not available, using fallback decimals');
      return KRC20_DECIMALS_MAP[tokenAddress.toUpperCase()] || 8;
    }

    // Check if wallet is connected by trying to get accounts
    try {
      const accounts = await window.kasware.getAccounts();
      console.log('[DEBUG] Kasware accounts:', accounts);
      if (!accounts || accounts.length === 0) {
        console.log('[DEBUG] Kasware not connected, using fallback decimals');
        return KRC20_DECIMALS_MAP[tokenAddress.toUpperCase()] || 8;
      }
    } catch (connectError) {
      console.log('[DEBUG] Failed to check Kasware connection, using fallback decimals:', connectError);
      return KRC20_DECIMALS_MAP[tokenAddress.toUpperCase()] || 8;
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
      // Token not found in wallet, use fallback
      const fallbackDecimals = KRC20_DECIMALS_MAP[tokenAddress.toUpperCase()] || 8;
      console.log('[DEBUG] Token not found in wallet, using fallback decimals:', fallbackDecimals);
      return fallbackDecimals;
    }
  } catch (e: any) {
    console.warn('Failed to get KRC20 decimals:', e);
    console.error('[DEBUG] Error details:', e);
    // Always fallback to known decimals or 8
    const fallbackDecimals = KRC20_DECIMALS_MAP[tokenAddress.toUpperCase()] || 8;
    console.log('[DEBUG] Using fallback decimals due to error:', fallbackDecimals);
    return fallbackDecimals;
  }
};
