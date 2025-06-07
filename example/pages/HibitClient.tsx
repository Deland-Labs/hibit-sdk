import { FC, useEffect, useState } from 'react';
import { HibitClient } from '../../src/hibit-client';
import SectionGetTimestamp from '../components/hibit-client-sections/SectionGetTimestamp';
import SectionGetChains from '../components/hibit-client-sections/SectionGetChains';
import SectionGetAssets from '../components/hibit-client-sections/SectionGetAssets';
import SectionGetAsset from '../components/hibit-client-sections/SectionGetAsset';
import SectionGetChainBalances from '../components/hibit-client-sections/SectionGetChainBalances';
import SectionGetWithdrawFee from '../components/hibit-client-sections/SectionGetWithdrawFee';
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
import SectionWalletRegister from '../components/hibit-client-sections/SectionWalletRegister';
import SectionGetRegisteredWalletInfo from '../components/hibit-client-sections/SectionGetRegisteredWalletInfo';
import SectionResetProxyKey from '../components/hibit-client-sections/SectionResetProxyKey';
import SectionGetProxyKeypair from '../components/hibit-client-sections/SectionGetProxyKeypair';
import SectionGetWalletBalances from '../components/hibit-client-sections/SectionGetWalletBalances';
import SectionWithdraw from '../components/hibit-client-sections/SectionWithdraw';
import SectionGetNonce from '../components/hibit-client-sections/SectionGetNonce';
import { HibitNetwork } from '../../src';
import SectionSetHibitClientOptions from '../components/hibit-client-sections/SectionSetHibitClientOptions';
import { WalletConnectionProvider } from '../context/WalletConnectionContext';
import { ClientProvider } from '../context/ClientContext';

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
    <WalletConnectionProvider>
      <ClientProvider client={client}>
        <div className="flex flex-col gap-6">
          <SectionSetHibitClientOptions defaultOptions={OPTIONS} />

          {/* Basic APIs */}
          <SectionGetTimestamp />
          <SectionGetChains />
          <SectionGetAssets />
          <SectionGetAsset />
          <SectionGetChainBalances />
          <SectionGetWithdrawFee />

          {/* Market APIs */}
          <SectionGetMarkets />
          <SectionGetMarket />
          <SectionGetMarkets24HrTicker />
          <SectionGetMarkets24HrTickerExtended />
          <SectionGetMarketsSwapInfo />
          <SectionGetMarketDepth />
          <SectionGetMarketKline />
          <SectionGetMarketTrade />

          {/* Order APIs */}
          <SectionSubmitSpotOrderLimit />
          <SectionSubmitSpotOrderSwapV2 />
          <SectionCancelSpotOrder />
          <SectionGetOrders />
          <SectionGetOrder />
          <SectionGetOrderTrades />

          {/* Wallet APIs */}
          <SectionWalletRegister />
          <SectionGetRegisteredWalletInfo />
          <SectionResetProxyKey />
          <SectionGetProxyKeypair />
          <SectionGetWalletBalances />
          <SectionWithdraw />
          <SectionGetNonce />
        </div>
      </ClientProvider>
    </WalletConnectionProvider>
  );
};

export default HibitClientPage;
