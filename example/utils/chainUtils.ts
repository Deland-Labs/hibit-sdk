import { Chain, ChainNetwork } from '../../src';

export const chainNetworkMap = [
  {
    chain: Chain.Bitcoin,
    name: 'Bitcoin',
    networks: [
      { network: ChainNetwork.BtcMainNet, name: 'MainNet' },
      { network: ChainNetwork.BtcTestNet, name: 'TestNet' }
    ]
  },
  {
    chain: Chain.Ethereum,
    name: 'Ethereum',
    networks: [
      { network: ChainNetwork.EvmMainNet, name: 'MainNet' },
      { network: ChainNetwork.EvmSepoliaNet, name: 'Sepolia' }
    ]
  },
  {
    chain: Chain.Solana,
    name: 'Solana',
    networks: [
      { network: ChainNetwork.SolanaMainNet, name: 'MainNet' },
      { network: ChainNetwork.SolanaTestNet, name: 'TestNet' }
    ]
  },
  {
    chain: Chain.Dfinity,
    name: 'Internet Computer',
    networks: [{ network: ChainNetwork.DfinityMainNet, name: 'MainNet' }]
  },
  {
    chain: Chain.Ton,
    name: 'TON',
    networks: [
      { network: ChainNetwork.TonMainNet, name: 'MainNet' },
      { network: ChainNetwork.TonTestNet, name: 'TestNet' }
    ]
  },
  {
    chain: Chain.Tron,
    name: 'TRON',
    networks: [
      { network: ChainNetwork.TronMainNet, name: 'MainNet' },
      { network: ChainNetwork.TronShastaTestNet, name: 'Shasta TestNet' },
      { network: ChainNetwork.TronNileTestNet, name: 'Nile TestNet' }
    ]
  },
  {
    chain: Chain.Kaspa,
    name: 'Kaspa',
    networks: [
      { network: ChainNetwork.KaspaMainNet, name: 'MainNet' },
      { network: ChainNetwork.KaspaTestNet, name: 'TestNet' }
    ]
  }
];
