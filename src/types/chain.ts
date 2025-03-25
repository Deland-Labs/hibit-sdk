import { Ex3ExchangeOpenApiAppServicesChainInfoDto } from '../openapi';

/**
 * Represents a blockchain with its chain identifier.
 * Provides static instances for supported blockchains.
 *
 * @example
 * ```typescript
 * const btc = Chain.Bitcoin;
 * const eth = Chain.Ethereum;
 * console.log(btc.toString()); // "0"
 * ```
 */
export class Chain {
  /**
   * The chain identifier value
   */
  value: bigint;

  /**
   * Creates a new Chain instance
   * @param value - The chain identifier as a bigint
   */
  constructor(value: bigint) {
    this.value = value;
  }

  /** Bitcoin blockchain (Chain ID: 0) */
  static Bitcoin = new Chain(0n);
  /** Ethereum blockchain (Chain ID: 60) */
  static Ethereum = new Chain(60n);
  /** Solana blockchain (Chain ID: 501) */
  static Solana = new Chain(501n);
  /** Internet Computer blockchain (Chain ID: 223) */
  static Dfinity = new Chain(223n);
  /** TON blockchain (Chain ID: 607) */
  static Ton = new Chain(607n);
  /** TRON blockchain (Chain ID: 195) */
  static Tron = new Chain(195n);
  /** Kaspa blockchain (Chain ID: 111111) */
  static Kaspa = new Chain(111111n);

  /**
   * Creates a Chain instance from a string value
   * @param value - The chain identifier as a string
   * @returns A new Chain instance or null if value is empty
   *
   * @example
   * ```typescript
   * const eth = Chain.fromString("60");
   * ```
   */
  static fromString(value: string): Chain | null {
    if (!value) {
      return null;
    }
    return new Chain(BigInt(value));
  }

  /**
   * Converts the chain identifier to string
   * @returns The chain identifier as a string
   */
  toString(): string {
    return this.value.toString();
  }

  /**
   * Checks if this chain is equal to another chain
   * @param other - The chain to compare with
   * @returns True if the chains are equal, false otherwise
   */
  equals(other: Chain): boolean {
    if (!other) {
      return false;
    }
    return this.value === other.value;
  }
}

/**
 * Represents a blockchain network with its chain-specific network identifier.
 * Provides static instances for common blockchain networks.
 */
export class ChainNetwork {
  /**
   * The network identifier value
   */
  value: bigint;

  /**
   * Creates a new ChainNetwork instance
   * @param value - The network identifier as a bigint
   */
  constructor(value: bigint) {
    this.value = value;
  }

  // Generic Networks
  /** Main network identifier */
  static MainNet = new ChainNetwork(1n);
  /** Test network identifier */
  static TestNet = new ChainNetwork(0n);

  // Bitcoin Networks
  /** Bitcoin mainnet network */
  static BtcMainNet = new ChainNetwork(1n);
  /** Bitcoin testnet network */
  static BtcTestNet = new ChainNetwork(2n);

  // EVM Networks
  /** Ethereum mainnet (Chain ID: 1) */
  static EvmMainNet = new ChainNetwork(0x1n);
  /** Ethereum Sepolia testnet */
  static EvmSepoliaNet = new ChainNetwork(0xaa36a7n);
  /** BNB Smart Chain mainnet */
  static EvmBscNet = new ChainNetwork(0x38n);
  /** BNB Smart Chain testnet */
  static EvmBscTestNet = new ChainNetwork(97n);
  /** Base mainnet */
  static EvmBaseNet = new ChainNetwork(8453n);
  /** Base Sepolia testnet */
  static EvmBaseSepoliaNet = new ChainNetwork(84532n);
  /** Avalanche C-Chain */
  static EvmAvalancheNet = new ChainNetwork(43114n);
  /** Avalanche Fuji testnet */
  static EvmAvalancheFujiNet = new ChainNetwork(43113n);
  /** Scroll mainnet */
  static EvmScrollNet = new ChainNetwork(534352n);
  /** Scroll Sepolia testnet */
  static EvmScrollSepoliaNet = new ChainNetwork(534351n);
  /** Bitlayer mainnet */
  static EvmBitlayerNet = new ChainNetwork(200901n);
  /** Bitlayer testnet */
  static EvmBitlayerTestNet = new ChainNetwork(200810n);
  /** Swan mainnet */
  static EvmSwanNet = new ChainNetwork(254n);
  /** Swan testnet */
  static EvmSwanTestNet = new ChainNetwork(20241133n);
  /** Panta Network */
  static EvmPantaNet = new ChainNetwork(331n);

  // Solana Networks
  /** Solana mainnet */
  static SolanaMainNet = new ChainNetwork(0x3n);
  /** Solana testnet */
  static SolanaTestNet = new ChainNetwork(0x2n);

  // TON Networks
  /** TON mainnet */
  static TonMainNet = new ChainNetwork(1n);
  /** TON testnet */
  static TonTestNet = new ChainNetwork(2n);

  // TRON Networks
  /** TRON mainnet */
  static TronMainNet = new ChainNetwork(0x2b6653dcn);
  /** TRON Shasta testnet */
  static TronShastaTestNet = new ChainNetwork(0x94a9059en);
  /** TRON Nile testnet */
  static TronNileTestNet = new ChainNetwork(0xcd8690dcn);

  // Dfinity Networks
  /** Internet Computer mainnet */
  static DfinityMainNet = new ChainNetwork(1n);

  // Kaspa Networks
  /** Kaspa mainnet */
  static KaspaMainNet = new ChainNetwork(0n);
  /** Kaspa testnet */
  static KaspaTestNet = new ChainNetwork(1n);

  /**
   * Creates a ChainNetwork instance from a string value
   * @param value - The network identifier as a string
   * @returns A new ChainNetwork instance or null if value is empty
   */
  static fromString(value: string): ChainNetwork | null {
    if (!value) {
      return null;
    }
    return new ChainNetwork(BigInt(value));
  }

  /**
   * Converts the network identifier to string
   * @returns The network identifier as a string
   */
  toString(): string {
    return this.value.toString();
  }

  /**
   * Checks if this network is equal to another network
   * @param other - The network to compare with
   * @returns True if the networks are equal, false otherwise
   */
  equals(other: ChainNetwork): boolean {
    if (!other) {
      return false;
    }
    return this.value === other.value;
  }
}

/**
 * Represents a chain identifier with its network identifier.
 * Provides methods to convert to and from string.
 */
export class ChainId {
  chain: Chain;
  network: ChainNetwork;

  constructor(chain: Chain, network: ChainNetwork) {
    this.chain = chain;
    this.network = network;
  }

  toString(): string {
    return `${this.chain.toString()}_${this.network.toString()}`;
  }

  static fromString(chainId: string): ChainId {
    if (!chainId || !chainId.includes('_')) {
      throw new Error(`Invalid chainId format: ${chainId}. Expected format: "chain_network"`);
    }
    const [chain, network] = chainId.split('_');
    const chainObj = Chain.fromString(chain);
    const networkObj = ChainNetwork.fromString(network);

    if (!chainObj || !networkObj) {
      throw new Error(`Invalid chain or network in chainId: ${chainId}`);
    }

    return new ChainId(chainObj, networkObj);
  }

  equals(other: ChainId): boolean {
    return this.chain.equals(other.chain) && this.network.equals(other.network);
  }
}

export type ChainInfo = {
  /**
   * chain id
   */
  chainId: string;
  /**
   * address for user to deposit
   */
  depositAddress?: string;
  /**
   * display name
   */
  displayName?: string;
};

export function mapChainInfo(chain: Ex3ExchangeOpenApiAppServicesChainInfoDto): ChainInfo {
  return {
    chainId: chain.chainId,
    depositAddress: chain.depositAddress || undefined,
    displayName: chain.displayName || undefined
  };
}
