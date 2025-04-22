import { FC, useEffect, useState } from 'react';
import { HibitClient } from '../../src/hibit-client';
import SectionGetTimestamp from '../components/hibit-client-sections/SectionGetTimestamp';
import SectionGetChains from '../components/hibit-client-sections/SectionGetChains';
import SectionGetAssets from '../components/hibit-client-sections/SectionGetAssets';
import SectionGetAsset from '../components/hibit-client-sections/SectionGetAsset';
import SectionGetMarkets from '../components/hibit-client-sections/SectionGetMarkets';
import SectionGetMarket from '../components/hibit-client-sections/SectionGetMarket';
import SectionGetMarkets24HrTicker from '../components/hibit-client-sections/SectionGetMarkets24HrTicker';
import SectionGetMarkets24HrTickerExtended from '../components/hibit-client-sections/SectionGetMarkets24HrTickerExtended';
import SectionGetMarketsSwapInfo from '../components/hibit-client-sections/SectionGetMarketsSwapInfo';
import SectionGetMarketKline from '../components/hibit-client-sections/SectionGetMarketKline';
import SectionGetMarketDepth from '../components/hibit-client-sections/SectionGetMarketDepth';
import SectionGetMarketTrade from '../components/hibit-client-sections/SectionGetMarketTrade';
import SectionSubmitSpotOrderLimit from '../components/hibit-client-sections/SectionSubmitSpotOrderLimit';
import SectionSubmitSpotOrderSwapV2 from '../components/hibit-client-sections/SectionSubmitSpotOrderSwapV2';
import SectionCancelSpotOrder from '../components/hibit-client-sections/SectionCancelSpotOrder';
import SectionGetOrders from '../components/hibit-client-sections/SectionGetOrders';
import SectionGetOrder from '../components/hibit-client-sections/SectionGetOrder';
import SectionGetOrderTrades from '../components/hibit-client-sections/SectionGetOrderTrades';
import SectionGetWalletBalances from '../components/hibit-client-sections/SectionGetWalletBalances';
import SectionGetNonce from '../components/hibit-client-sections/SectionGetNonce';
import { HibitNetwork } from '../../src';
import SectionSetHibitClientOptions from '../components/hibit-client-sections/SectionSetHibitClientOptions';

const OPTIONS = {
  network: HibitNetwork.Testnet,
  hin: BigInt(10000),
  proxyKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
};

const HibitClientPage: FC = () => {
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
    <div className="flex flex-col gap-6">
      <SectionSetHibitClientOptions client={client} defaultOptions={OPTIONS} />
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
    </div>
  );
};

export default HibitClientPage;
