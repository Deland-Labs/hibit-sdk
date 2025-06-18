import { Chain, ChainNetwork, HibitNetwork } from '../../src';

// Chain-specific constants
export const EVM_NATIVE_DECIMALS = 18; // ETH standard 18 decimals
export const KAS_NATIVE_DECIMALS = 8; // KAS uses 8 decimals (SOMPI)

// Get native chain decimals based on chain ID
export const getNativeChainDecimals = (chainId: string): number => {
  const chain = getChainFromId(chainId);
  if (chain?.equals(Chain.Kaspa)) {
    return KAS_NATIVE_DECIMALS;
  } else if (chain?.equals(Chain.Ethereum)) {
    return EVM_NATIVE_DECIMALS;
  }
  return EVM_NATIVE_DECIMALS; // default
};

// Get native chain unit name
export const getNativeChainUnit = (chainId: string): string => {
  const chain = getChainFromId(chainId);
  if (chain?.equals(Chain.Kaspa)) {
    return 'KAS';
  } else if (chain?.equals(Chain.Ethereum)) {
    return 'ETH';
  }
  return 'ETH'; // default to ETH for unknown chains
};

// Get Chain object from chainId string
export const getChainFromId = (chainId: string): Chain | null => {
  if (!chainId) return null;
  const chainPart = chainId.split('_')[0]; // Extract chain part from "chain_network" format
  return Chain.fromString(chainPart);
};

// General function to check if chainId matches a specific chain
export const isChainType = (chainId: string, targetChain: Chain): boolean => {
  const chain = getChainFromId(chainId);
  return chain?.equals(targetChain) ?? false;
};

export const chainNetworkMap = [
  {
    chain: Chain.Bitcoin,
    name: Chain.Bitcoin.name,
    networks: [
      { network: ChainNetwork.BtcMainNet, name: 'MainNet' },
      { network: ChainNetwork.BtcTestNet, name: 'TestNet' },
      { network: ChainNetwork.BtcRegTest, name: 'RegTest' }
    ]
  },
  {
    chain: Chain.Ethereum,
    name: Chain.Ethereum.name,
    networks: [
      { network: ChainNetwork.EvmMainNet, name: 'Ethereum MainNet' },
      { network: ChainNetwork.EvmSepoliaNet, name: 'Ethereum Sepolia' },
      { network: ChainNetwork.EvmBscNet, name: 'BNB Smart Chain MainNet' },
      { network: ChainNetwork.EvmBscTestNet, name: 'BNB Smart Chain TestNet' },
      { network: ChainNetwork.EvmBaseNet, name: 'Base MainNet' },
      { network: ChainNetwork.EvmBaseSepoliaNet, name: 'Base Sepolia' },
      { network: ChainNetwork.EvmAvalancheNet, name: 'Avalanche C-Chain' },
      { network: ChainNetwork.EvmAvalancheFujiNet, name: 'Avalanche Fuji TestNet' },
      { network: ChainNetwork.EvmScrollNet, name: 'Scroll MainNet' },
      { network: ChainNetwork.EvmScrollSepoliaNet, name: 'Scroll Sepolia' },
      { network: ChainNetwork.EvmBitlayerNet, name: 'Bitlayer MainNet' },
      { network: ChainNetwork.EvmBitlayerTestNet, name: 'Bitlayer TestNet' },
      { network: ChainNetwork.EvmSwanNet, name: 'Swan MainNet' },
      { network: ChainNetwork.EvmSwanTestNet, name: 'Swan TestNet' },
      { network: ChainNetwork.EvmPantaNet, name: 'Panta Network' },
      { network: ChainNetwork.EvmNeoXNet, name: 'NeoX MainNet' },
      { network: ChainNetwork.EvmNeoXTestNet, name: 'NeoX TestNet' }
    ]
  },
  {
    chain: Chain.Solana,
    name: Chain.Solana.name,
    networks: [
      { network: ChainNetwork.SolanaMainNet, name: 'MainNet' },
      { network: ChainNetwork.SolanaTestNet, name: 'TestNet' },
      { network: ChainNetwork.SolanaDevNet, name: 'DevNet' }
    ]
  },
  {
    chain: Chain.Dfinity,
    name: Chain.Dfinity.name,
    networks: [{ network: ChainNetwork.DfinityMainNet, name: 'MainNet' }]
  },
  {
    chain: Chain.Ton,
    name: Chain.Ton.name,
    networks: [
      { network: ChainNetwork.TonMainNet, name: 'MainNet' },
      { network: ChainNetwork.TonTestNet, name: 'TestNet' }
    ]
  },
  {
    chain: Chain.Tron,
    name: Chain.Tron.name,
    networks: [
      { network: ChainNetwork.TronMainNet, name: 'MainNet' },
      { network: ChainNetwork.TronShastaTestNet, name: 'Shasta TestNet' },
      { network: ChainNetwork.TronNileTestNet, name: 'Nile TestNet' }
    ]
  },
  {
    chain: Chain.Kaspa,
    name: Chain.Kaspa.name,
    networks: [
      { network: ChainNetwork.KaspaMainNet, name: 'MainNet' },
      { network: ChainNetwork.KaspaTestNet, name: 'TestNet' }
    ]
  }
];

// Filter networks based on HibitNetwork (mainnet/testnet)
export const getFilteredChainNetworkMap = (hibitNetwork?: HibitNetwork) => {
  if (!hibitNetwork) {
    return chainNetworkMap; // Return all networks if no filter specified
  }

  return chainNetworkMap
    .map((chainItem) => ({
      ...chainItem,
      networks: chainItem.networks.filter((networkItem) => {
        // Determine if this network is mainnet or testnet based on naming and network IDs
        if (hibitNetwork === HibitNetwork.Mainnet) {
          // Show mainnet networks
          return isMainnetNetwork(networkItem.name);
        } else {
          // Show testnet networks
          return isTestnetNetwork(networkItem.name);
        }
      })
    }))
    .filter((chainItem) => chainItem.networks.length > 0); // Remove chains with no networks
};

// Helper function to determine if a network is mainnet
const isMainnetNetwork = (networkName: string): boolean => {
  const lowerName = networkName.toLowerCase();

  // First check if it's a testnet (these have priority over mainnet patterns)
  if (
    lowerName.includes('test') ||
    lowerName.includes('dev') ||
    lowerName.includes('regtest') ||
    lowerName.includes('sepolia') ||
    lowerName.includes('holesky') ||
    lowerName.includes('mumbai') ||
    lowerName.includes('fuji') || // Avalanche testnet
    lowerName.includes('goerli')
  ) {
    return false;
  }

  // Explicit mainnet networks
  if (lowerName.includes('mainnet') || lowerName.includes('main net')) {
    return true;
  }

  // Special cases for networks that are mainnet but don't have "mainnet" in name
  if (
    lowerName.includes('c-chain') || // Avalanche C-Chain (but not Fuji)
    lowerName === 'panta network'
  ) {
    // Panta Network
    return true;
  }

  // Default to mainnet for networks without clear indicators
  return true;
};

// Helper function to determine if a network is testnet
const isTestnetNetwork = (networkName: string): boolean => {
  return !isMainnetNetwork(networkName);
};
