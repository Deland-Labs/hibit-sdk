import { FC, useEffect, useState } from 'react';
import { HibitClient } from '../src/hibit-client';
import SectionGetTimestamp from './components/SectionGetTimestamp';

const OPTIONS = {
  baseUrl: 'https://alphaopenapi.ex3.one',
  walletId: 10000n,
  privateKey: 'fa3e933f1788d7d56a20e078370f4c3b713ee0bcdb44392e4cfeaf524716d06a'
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
    <main className="container mx-auto flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-center">Hibit SDK Examples</h1>

      <SectionGetTimestamp client={client} />
    </main>
  );
};

export default App;
