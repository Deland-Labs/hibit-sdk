import { Chain, ChainNetwork } from '../../src';

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
      { network: ChainNetwork.BtcTestNet, name: 'TestNet' }
    ]
  },
  {
    chain: Chain.Ethereum,
    name: Chain.Ethereum.name,
    networks: [
      { network: ChainNetwork.EvmMainNet, name: 'MainNet' },
      { network: ChainNetwork.EvmSepoliaNet, name: 'Sepolia' }
    ]
  },
  {
    chain: Chain.Solana,
    name: Chain.Solana.name,
    networks: [
      { network: ChainNetwork.SolanaMainNet, name: 'MainNet' },
      { network: ChainNetwork.SolanaTestNet, name: 'TestNet' }
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
