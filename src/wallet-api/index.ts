import {
  GetProxyKeyInput,
  HexString,
  ResetProxyKeyInput,
  WalletRegisterInput,
  WalletSignatureSchema,
  WithdrawInput
} from '../types';

/**
 * Interface for wallet API implementations.
 * Provides methods for interacting with a blockchain wallet.
 */
export interface IWalletApi {
  /**
   * Defines the signature format or scheme used by this wallet implementation.
   */
  signatureSchema: WalletSignatureSchema;
  /**
   * Signs a message using the wallet's private key.
   * @param message - The message to be signed
   * @returns A promise that resolves to the message signature as a hex string
   */
  signMessage: (message: string) => Promise<HexString>;

  generateWalletRegistrationMessage: (input: WalletRegisterInput) => string;

  generateWalletResetProxyKeyMessage: (input: ResetProxyKeyInput) => string;

  generateGetProxyKeyMessage: (input: GetProxyKeyInput) => string;

  generateWithdrawMessage: (input: WithdrawInput, hin: bigint) => string;
}

/**
 * Abstract base class for wallet API implementations.
 * Provides common implementation for message generation.
 */
export abstract class AbstractWalletApi implements IWalletApi {
  abstract signatureSchema: WalletSignatureSchema;

  abstract signMessage(message: string): Promise<HexString>;

  generateGetProxyKeyMessage(input: GetProxyKeyInput): string {
    // Convert hin (wallet ID) to a hex string
    const walletIdHex = input.hin.toString(16);

    // Format the payload with all required fields
    const payload = [
      `subject: retrieve encrypted proxy key`,
      `wallet_id: ${walletIdHex}`,
      `sign_schema: ${this.signatureSchema}`,
      `timestamp: ${input.timestamp}`
    ].join('\n');

    return payload;
  }

  generateWalletRegistrationMessage(input: WalletRegisterInput): string {
    // Use the public key from input if provided
    const pubKey = input.publicKey || '';

    // Format the payload with all required fields
    const payload = [
      'subject: wallet registration',
      `chain: 0x${input.chain.value.toString(16)}`,
      `sign_schema: ${this.signatureSchema}`,
      `pub_key: ${pubKey}`
    ].join('\n');

    return payload;
  }

  generateWalletResetProxyKeyMessage(input: ResetProxyKeyInput): string {
    // Convert hin (wallet ID) and nonce to hex strings
    const walletIdHex = input.hin.toString(16);
    const nonceHex = input.nonce.toString(16);

    // Format the payload with all required fields
    const payload = [
      'subject: main secret reset',
      `wallet_id: ${walletIdHex}`,
      `nonce: ${nonceHex}`,
      `sign_schema: ${this.signatureSchema}`,
      `data.encrypted_pri_key: 0x${input.encryptedProxyKey}`,
      `data.l2_pub_key: 0x${input.ProxyPublicKey}`
    ].join('\n');

    return payload;
  }

  generateWithdrawMessage(input: WithdrawInput, hin: bigint): string {
    // Format the payload with all required fields
    const payload = [
      `subject: withdrawal`,
      `wallet_id: 0x${hin.toString(16)}`,
      `nonce: 0x${input.nonce.toString(16)}`,
      `sign_schema: ${this.signatureSchema}`,
      `data.chain: 0x${input.targetChain.value.toString(16)}`,
      `data.network: 0x${input.targetChainNetwork.value.toString(16)}`,
      `data.address: ${input.address}`,
      `data.asset_id: 0x${input.assetId.toString(16)}`,
      `data.amount: ${input.amount}`,
      `data.fee: ${input.fee}`
    ].join('\n');

    return payload;
  }
}
