import { FC, useEffect, useState } from 'react';
import { HibitClient } from '../src/hibit-client';
import SectionGetTimestamp from './components/SectionGetTimestamp';
import SectionGetChains from './components/SectionGetChains';
import SectionGetAssets from './components/SectionGetAssets';
import SectionGetAsset from './components/SectionGetAsset';
import SectionGetMarkets from './components/SectionGetMarkets';
import SectionGetMarket from './components/SectionGetMarket';
import SectionGetMarkets24HrTicker from './components/SectionGetMarkets24HrTicker';
import SectionGetMarkets24HrTickerExtended from './components/SectionGetMarkets24HrTickerExtended';
import SectionGetMarketsSwapInfo from './components/SectionGetMarketsSwapInfo';
import SectionGetMarketKline from './components/SectionGetMarketKline';
import SectionGetMarketDepth from './components/SectionGetMarketDepth';
import SectionGetMarketTrade from './components/SectionGetMarketTrade';
import SectionSubmitSpotOrderLimit from './components/SectionSubmitSpotOrderLimit';
import SectionSubmitSpotOrderSwapV2 from './components/SectionSubmitSpotOrderSwapV2';
import SectionCancelSpotOrder from './components/SectionCancelSpotOrder';
import SectionGetOrders from './components/SectionGetOrders';
import SectionGetOrder from './components/SectionGetOrder';
import SectionGetOrderTrades from './components/SectionGetOrderTrades';
import SectionGetWalletBalances from './components/SectionGetWalletBalances';
import SectionGetNonce from './components/SectionGetNonce';
import { HibitNetwork } from '../src';
import SectionSetOptions from './components/SectionSetOptions';

const OPTIONS = {
  network: HibitNetwork.Testnet,
  hin: BigInt(10000),
  proxyKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
};

const App: FC = () => {
  const [client, setClient] = useState<HibitClient | null>(null);

  useEffect(() => {
    const client = new HibitClient();
    client.setOptions(OPTIONS);
    setClient(client);
  }, []);

  if (!client) {
    return null;
  }

  return (
    <main className="container mx-auto flex flex-col gap-6 p-6">
      <h1 className="text-3xl font-bold text-center">Hibit SDK Examples</h1>

      <SectionSetOptions client={client} defaultOptions={OPTIONS} />

      <SectionGetTimestamp client={client} />
      <SectionGetChains client={client} />
      <SectionGetAssets client={client} />
      <SectionGetAsset client={client} />
      <SectionGetMarkets client={client} />
      <SectionGetMarket client={client} />
      <SectionGetMarkets24HrTicker client={client} />
      <SectionGetMarkets24HrTickerExtended client={client} />
      <SectionGetMarketsSwapInfo client={client} />
      <SectionGetMarketDepth client={client} />
      <SectionGetMarketKline client={client} />
      <SectionGetMarketTrade client={client} />
      <SectionSubmitSpotOrderLimit client={client} />
      <SectionSubmitSpotOrderSwapV2 client={client} />
      <SectionCancelSpotOrder client={client} />
      <SectionGetOrders client={client} />
      <SectionGetOrder client={client} />
      <SectionGetOrderTrades client={client} />
      <SectionGetWalletBalances client={client} />
      <SectionGetNonce client={client} />
    </main>
  );
};

export default App;
