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
   * @throws Error if the chain value is not supported
   */
  constructor(value: bigint) {
    // Check if the value is one of the supported chains
    const supportedValues = [0n, 60n, 501n, 223n, 607n, 195n, 111111n];
    if (!supportedValues.includes(value)) {
      throw new Error(`Unsupported chain value: ${value}. Supported chains: ${supportedValues.join(', ')}`);
    }
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
   * @throws Error if the chain value is not supported
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

  /**
   * Retrieves all supported blockchain chains.
   *
   * @returns An array containing all available Chain enum values including Bitcoin, Ethereum, Solana, Dfinity, Ton, Tron, and Kaspa.
   */
  static getAllChains(): Chain[] {
    return [Chain.Bitcoin, Chain.Ethereum, Chain.Solana, Chain.Dfinity, Chain.Ton, Chain.Tron, Chain.Kaspa];
  }

  get name(): string {
    switch (this.value) {
      case Chain.Bitcoin.value:
        return 'Bitcoin';
      case Chain.Ethereum.value:
        return 'Ethereum';
      case Chain.Solana.value:
        return 'Solana';
      case Chain.Dfinity.value:
        return 'Internet Computer';
      case Chain.Ton.value:
        return 'TON';
      case Chain.Tron.value:
        return 'Tron';
      case Chain.Kaspa.value:
        return 'Kaspa';
      default:
        return `Unknown Chain (${this.value})`;
    }
  }
}

/**
 * Represents a blockchain network with its chain-specific network identifier.
 * Provides static instances for common blockchain networks.
 */
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
   * @throws Error if the network value is not supported
   */
  constructor(value: bigint) {
    // Check if the value is one of the supported networks
    const supportedValues = [
      0n,
      2n,
      3n, // Bitcoin and Kaspa networks
      0x1n,
      0x2n,
      0x3n,
      0x3e9n, // Special network values that might come from API
      0xaa36a7n,
      0x38n,
      0x61n,
      0x2105n,
      0x14a34n,
      0xa86an,
      0xa869n, // EVM networks
      0x82750n,
      0x8274fn,
      0x310c5n,
      0x3106an,
      0xfen,
      0x134daedn,
      0x14bn,
      0xba93n,
      0xba9304n, // More EVM networks
      0x2b6653dcn,
      0x94a9059en,
      0xcd8690dcn // TRON networks
    ];
    if (!supportedValues.includes(value)) {
      throw new Error(`Unsupported network value: ${value}. Please use one of the predefined ChainNetwork constants.`);
    }
    this.value = value;
  }

  // Bitcoin Networks
  /** Bitcoin mainnet network */
  static BtcMainNet = new ChainNetwork(1n);
  /** Bitcoin testnet network */
  static BtcTestNet = new ChainNetwork(2n);
  /** Bitcoin regtest network */
  static BtcRegTest = new ChainNetwork(3n);

  // EVM Networks
  /** Ethereum mainnet (Chain ID: 1) */
  static EvmMainNet = new ChainNetwork(0x1n);
  /** Ethereum Sepolia testnet */
  static EvmSepoliaNet = new ChainNetwork(0xaa36a7n);
  /** BNB Smart Chain mainnet */
  static EvmBscNet = new ChainNetwork(0x38n);
  /** BNB Smart Chain testnet */
  static EvmBscTestNet = new ChainNetwork(0x61n); // Updated to match C# value
  /** Base mainnet */
  static EvmBaseNet = new ChainNetwork(0x2105n);
  /** Base Sepolia testnet */
  static EvmBaseSepoliaNet = new ChainNetwork(0x14a34n);
  /** Avalanche C-Chain */
  static EvmAvalancheNet = new ChainNetwork(0xa86an);
  /** Avalanche Fuji testnet */
  static EvmAvalancheFujiNet = new ChainNetwork(0xa869n);
  /** Scroll mainnet */
  static EvmScrollNet = new ChainNetwork(0x82750n);
  /** Scroll Sepolia testnet */
  static EvmScrollSepoliaNet = new ChainNetwork(0x8274fn);
  /** Bitlayer mainnet */
  static EvmBitlayerNet = new ChainNetwork(0x310c5n);
  /** Bitlayer testnet */
  static EvmBitlayerTestNet = new ChainNetwork(0x3106an);
  /** Swan mainnet */
  static EvmSwanNet = new ChainNetwork(0xfen);
  /** Swan testnet */
  static EvmSwanTestNet = new ChainNetwork(0x134daedn);
  /** Panta Network */
  static EvmPantaNet = new ChainNetwork(0x14bn);
  /** NeoX mainnet */
  static EvmNeoXNet = new ChainNetwork(0xba93n);
  /** NeoX testnet */
  static EvmNeoXTestNet = new ChainNetwork(0xba9304n);

  // Solana Networks
  /** Solana devnet */
  static SolanaDevNet = new ChainNetwork(0x1n);
  /** Solana testnet */
  static SolanaTestNet = new ChainNetwork(0x2n);
  /** Solana mainnet */
  static SolanaMainNet = new ChainNetwork(0x3n);

  // TON Networks
  /** TON mainnet */
  static TonMainNet = new ChainNetwork(0x1n);
  /** TON testnet */
  static TonTestNet = new ChainNetwork(0x2n);

  // TRON Networks
  /** TRON mainnet */
  static TronMainNet = new ChainNetwork(0x2b6653dcn);
  /** TRON Shasta testnet */
  static TronShastaTestNet = new ChainNetwork(0x94a9059en);
  /** TRON Nile testnet */
  static TronNileTestNet = new ChainNetwork(0xcd8690dcn);

  // Dfinity Networks
  /** Internet Computer mainnet */
  static DfinityMainNet = new ChainNetwork(0x1n);

  // Kaspa Networks
  /** Kaspa mainnet */
  static KaspaMainNet = new ChainNetwork(0x0n);
  /** Kaspa testnet */
  static KaspaTestNet = new ChainNetwork(0x1n);

  /**
   * Creates a ChainNetwork instance from a string value
   * @param value - The network identifier as a string
   * @returns A new ChainNetwork instance or null if value is empty
   * @throws Error if the network value is not supported
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

    const parts = chainId.split('_');
    if (parts.length !== 2) {
      throw new Error(`Invalid chainId format: ${chainId}. Expected format: "chain_network"`);
    }

    const [chain, network] = parts;
    if (!chain || !network) {
      throw new Error(`Invalid chainId format: ${chainId}. Expected format: "chain_network"`);
    }

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
