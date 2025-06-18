import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { HibitClient } from '../../src/hibit-client';
import { HibitNetwork } from '../../src';

interface ClientContextType {
  client: HibitClient;
  hinValue: bigint | undefined;
  hibitNetwork: HibitNetwork | undefined;
  refreshHin: () => void;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({ children, client }: { children: ReactNode; client: HibitClient }) {
  const [hinValue, setHinValue] = useState<bigint | undefined>();
  const [hibitNetwork, setHibitNetwork] = useState<HibitNetwork | undefined>();

  const refreshHin = useCallback(() => {
    const options = client.getOptions();
    setHinValue(options?.hin);
    setHibitNetwork(options?.network);
  }, [client]);

  useEffect(() => {
    refreshHin();
  }, [refreshHin]);

  return (
    <ClientContext.Provider value={{ client, hinValue, hibitNetwork, refreshHin }}>{children}</ClientContext.Provider>
  );
}

export function useClientContext() {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useClientContext must be used within a ClientProvider');
  }
  return context;
}
