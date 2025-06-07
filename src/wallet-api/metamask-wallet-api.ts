import { AbstractWalletApi } from './abstract-wallet-api';
import { HexString, WalletSignatureSchema } from '../types';

/**
 * MetaMask wallet API implementation.
 * Provides MetaMask-specific wallet functionality including message signing.
 */
export class MetaMaskWalletApi extends AbstractWalletApi {
  signatureSchema = WalletSignatureSchema.EvmEcdsa;

  async signMessage(message: string): Promise<HexString> {
    if (typeof window === 'undefined' || !window.ethereum) {
      throw new Error('MetaMask not detected. Please install MetaMask extension.');
    }

    try {
      // Get the current account
      const accounts = await window.ethereum.request({
        method: 'eth_accounts'
      });

      if (!accounts || accounts.length === 0) {
        throw new Error('No MetaMask accounts found. Please connect your wallet.');
      }

      const account = accounts[0];

      // Sign the message using personal_sign
      const signature = await window.ethereum.request({
        method: 'personal_sign',
        params: [message, account]
      });

      return signature;
    } catch (error: any) {
      throw new Error(`Failed to sign message with MetaMask: ${error.message || error}`);
    }
  }

  /**
   * Check if MetaMask is available in the current environment.
   */
  static isAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.ethereum !== 'undefined';
  }
}
