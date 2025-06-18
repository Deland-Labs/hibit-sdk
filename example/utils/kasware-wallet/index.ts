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
  try {
    const balanceRes: GetKrc20BalanceResponse = await window.kasware.getKRC20Balance();
    const tickBalance = balanceRes.find((item) => item.tick.toUpperCase() === tokenAddress.toUpperCase());
    return tickBalance ? Number(tickBalance.dec) : 0;
  } catch (e: any) {
    console.warn('Failed to get KRC20 decimals:', e);
    return 0;
  }
};
