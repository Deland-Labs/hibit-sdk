import { Chain, ChainNetwork } from '../../src';

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
