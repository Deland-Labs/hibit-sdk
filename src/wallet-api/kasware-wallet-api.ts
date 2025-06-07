import { AbstractWalletApi } from './abstract-wallet-api';
import { HexString, WalletSignatureSchema } from '../types';

/**
 * Kasware wallet API implementation.
 * Provides Kasware-specific wallet functionality including message signing.
 */
export class KaswareWalletApi extends AbstractWalletApi {
  signatureSchema = WalletSignatureSchema.KaspaSchnorr;

  async signMessage(message: string): Promise<HexString> {
    if (typeof window === 'undefined' || !window.kasware) {
      throw new Error('Kasware wallet not detected. Please install Kasware wallet extension.');
    }

    try {
      // Get the current accounts to ensure wallet is connected
      const accounts = await window.kasware.getAccounts();

      if (!accounts || accounts.length === 0) {
        throw new Error('No Kasware accounts found. Please connect your wallet first.');
      }

      // Sign the message using Kasware's signMessage method
      // noAuxRand parameter set to true for deterministic signatures
      const signature = await window.kasware.signMessage(message, true);

      return `0x${signature}`;
    } catch (error: any) {
      throw new Error(`Failed to sign message with Kasware: ${error.message || error}`);
    }
  }

  /**
   * Check if Kasware wallet is available in the current environment.
   */
  static isAvailable(): boolean {
    return typeof window !== 'undefined' && typeof window.kasware !== 'undefined';
  }
}
