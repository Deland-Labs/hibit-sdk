import { FC, useEffect, useState } from 'react';
import { HibitNetwork } from '../../src';
import { BrokerClient } from '../../src/broker-client';
import SectionSetBrokerClientOptions from '../components/broker-client-sections/SectionSetBrokerClientOptions';

const OPTIONS = {
  network: HibitNetwork.Testnet
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
    </div>
  );
};

export default BrokerClientPage;
