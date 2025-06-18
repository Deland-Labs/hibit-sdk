import { FC, useEffect, useState } from 'react';
import { HibitNetwork } from '../../src';
import { BrokerClient } from '../../src/broker-client';
import SectionSetBrokerClientOptions from '../components/broker-client-sections/SectionSetBrokerClientOptions';
import SectionGetPaymentAddress from '../components/broker-client-sections/SectionGetPaymentAddress';
import SectionQuote from '../components/broker-client-sections/SectionQuote';
import SectionSwap from '../components/broker-client-sections/SectionSwap';
import SectionGetAgentOrder from '../components/broker-client-sections/SectionGetAgentOrder';

const OPTIONS = {
  network: HibitNetwork.Testnet,
  hin: 10007n
};

const BrokerClientPage: FC = () => {
  const [client, setClient] = useState<BrokerClient | null>(null);

  useEffect(() => {
    const client = new BrokerClient();
    client.setOptions(OPTIONS);
    setClient(client);
  }, []);

  if (!client) {
    return null;
  }

  return (
    <div className="flex flex-col gap-6">
      <SectionSetBrokerClientOptions client={client} defaultOptions={OPTIONS} />
      <SectionGetPaymentAddress client={client} />
      <SectionQuote client={client} />
      <SectionSwap client={client} />
      <SectionGetAgentOrder client={client} />
    </div>
  );
};

export default BrokerClientPage;
