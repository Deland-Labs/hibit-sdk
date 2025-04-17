/**
 * Enumeration of wallet signature schemas for different blockchain protocols.
 * Each value represents a unique identifier for a specific signature algorithm.
 *
 * Values are grouped by signature type:
 * - 0x3e8-0x3ea (1000-1002): ECDSA algorithms
 * - 0x7d0-0x7e4 (2000-2020): EDDSA algorithms
 * - 0xbc2 (3010): Schnorr algorithms
 */
export enum WalletSignatureSchema {
  /** Bitcoin ECDSA signature schema (1000) */
  BtcEcdsa = 0x3e8,
  /** Ethereum Virtual Machine ECDSA signature schema (1001) */
  EvmEcdsa = 0x3e9,
  /** Tron ECDSA signature schema (1002) */
  TronEcdsa = 0x3ea,
  /** TON EDDSA OpenMask signature schema (2000) */
  TonEddsaOpenMask = 0x7d0,
  /** Solana EDDSA signature schema (2010) */
  SolanaEddsa = 0x7da,
  /** Internet Computer Protocol EDDSA signature schema (2020) */
  IcpEddsa = 0x7e4,
  /** Kaspa Schnorr signature schema (3010) */
  KaspaSchnorr = 0xbc2
}
