import {
  Options,
  GetV1WalletNonceData,
  GetV1WalletBalancesData,
  PostV1WalletRegisterData,
  GetV1WalletInfoData,
  Ex3ExchangeOpenApiAppServicesWalletRegistrationInfo,
  PostV1ProxyKeyData,
  Ex3ExchangeOpenApiAppServicesProxyKeyResult
} from '../openapi';
import { Chain } from './chain';
import { WalletSignatureSchema } from './enums';
import { HexString } from './index';
import { OriginWalletTransaction } from './tx.ts';

/**
 * Information about a registered wallet on the hibit chain.
 * Contains the HIN (https://docs.hibit.app/glossary#hin)
 */
export type RegisteredWalletInfo = {
  /** The HIN of the wallet */
  hin?: bigint;
};

/**
 * Represents a proxy key pair.
 * Contains both the private and public keys in hex string format.
 */
export type ProxyKeypair = {
  /** The private key in hexadecimal format */
  privateKey: HexString;
  /** The public key in hexadecimal format */
  publicKey: HexString;
};

/**
 * Input parameters for registering a new wallet.
 * Used to provide necessary information when creating a wallet registration.
 */
export type WalletRegisterInput = {
  /** The blockchain type for the wallet */
  chain: Chain;

  /**
   * The public key of the wallet in string format.
   * This is used to identify the wallet on the blockchain,
   * it is required if the signature cannot recover the public key.
   */
  publicKey?: string;

  /** The signature schema used by the wallet */
  signatureSchema: WalletSignatureSchema;
};

export type GetRegisteredWalletInfoInput = {
  /**
   * The blockchain type of wallet.
   */
  chain: Chain;

  /**
   * Public key of the wallet, optional.
   * At least one of publicKey or address must be provided.
   */
  publicKey?: string;

  /**
   * The address of the wallet, optional.
   * At least one of publicKey or address must be provided.
   */
  address?: string;
};

/**
 * Input parameters for resetting a proxy key.
 * Used to provide necessary information when resetting a proxy key for a wallet.
 */
export type ResetProxyKeyInput = {
  /** The chain on which the wallet operates */
  chain: Chain;

  /** The current nonce value needed for the proxy key reset operation */
  nonce: bigint;

  /** The signature schema used by the wallet */
  signatureSchema: WalletSignatureSchema;

  /** The proxy private key in hex format */
  proxyPrivateKey: HexString;

  /** The public key of the proxy in hex format */
  proxyPublicKey: HexString;
};

/**
 * Input parameters for retrieving a proxy key.
 * Used to provide necessary information when fetching a proxy key for a wallet.
 */
export type GetProxyKeyInput = {
  /** The chain on which the wallet operates */
  chain: Chain;

  /** The signature schema used by the wallet */
  signatureSchema: WalletSignatureSchema;

  /** Timestamp of the request in milliseconds */
  timestamp: number;
};

/**
 * Input parameters for retrieving wallet balance information.
 * Used to query balances for a specific wallet and optionally filter by asset.
 *
 * @example Query all balances for a wallet
 * ```typescript
 * const input: GetWalletBalancesInput = {
 *   hin: BigInt("12345")
 * };
 * ```
 *
 * @example Query balance for a specific asset
 * ```typescript
 * const input: GetWalletBalancesInput = {
 *   hin: BigInt("12345"),
 *   assetId: BigInt("56789")
 * };
 * ```
 */
export type GetWalletBalancesInput = {
  /** The HIN(hibit chain identity number) of the wallet to query. If not provided, will use the HIN from client options. */
  hin?: bigint;

  /**
   * Optional asset ID to filter the balance query.
   * If provided, returns balance for only this asset.
   * If omitted, returns balances for all assets.
   */
  assetId?: bigint;
};

/**
 * Maps a wallet transaction to the format required for the wallet registration API.
 *
 * @param originTx - The original wallet transaction containing chain, network, message, and signature data
 * @returns An object formatted as required by the wallet registration API endpoint
 */
export function mapToWalletRegisterApiRequest(
  originTx: OriginWalletTransaction
): Options<PostV1WalletRegisterData, boolean> {
  return {
    body: {
      chain: originTx.chain.toString(),
      message: originTx.message,
      signature: originTx.signature
    }
  };
}

/**
 * Maps a wallet transaction to the format required for wallet-related API requests (register, proxy key, withdraw, etc).
 *
 * @param originTx - The original wallet transaction containing chain, network, message, and signature data
 * @returns An object formatted as required by the wallet-related API endpoints
 */
export function mapToWalletRequest(originTx: OriginWalletTransaction): {
  body: { chain: string; message: string; signature: string };
} {
  return {
    body: {
      chain: originTx.chain.toString(),
      message: originTx.message,
      signature: originTx.signature
    }
  };
}

export function mapGetProxyKeyOutput(data: Ex3ExchangeOpenApiAppServicesProxyKeyResult): ProxyKeypair {
  return {
    privateKey: data.ex3KeyPair?.privateKeyHex ?? '',
    publicKey: data.ex3KeyPair?.publicKeyHex ?? ''
  };
}

/**
 * Maps wallet info query input to the format required for the registered wallet info API call.
 *
 * @param input - The registered wallet query parameters, including chain, public key, and optional address.
 * @returns An object containing the query parameters for the API call.
 */
export function mapGetRegisteredWalletInfoInput(
  input: GetRegisteredWalletInfoInput
): Options<GetV1WalletInfoData, boolean> {
  return {
    query: {
      Chain: input.chain.toString(),
      PublicKey: input.publicKey,
      Address: input.address
    }
  };
}

/**
 * Maps the wallet registration information from the API response to the RegisteredWalletInfo type.
 *
 * @param data - The wallet registration information from the API response
 * @returns A RegisteredWalletInfo object containing the wallet's HIN (hibit identity number)
 */
export function mapGetRegisteredWalletInfoOutput(
  data: Ex3ExchangeOpenApiAppServicesWalletRegistrationInfo
): RegisteredWalletInfo {
  return {
    hin: data.hin ? BigInt(data.hin!) : undefined
  };
}

/**
 * Maps the HIN to the input format required for retrieving the wallet nonce.
 *
 * @param hin - The HIN (hibit chain identity number) of the wallet.
 * @returns An object containing the query parameters for the API call.
 */
export function mapGetNonceInput(hin: bigint): Options<GetV1WalletNonceData, boolean> {
  return {
    query: {
      HIN: String(hin)
    }
  };
}

export function mapGetWalletBalancesInput(input: GetWalletBalancesInput): Options<GetV1WalletBalancesData, boolean> {
  return {
    query: {
      HIN: String(input.hin),
      AssetId: input.assetId ? String(input.assetId) : undefined
    }
  };
}
