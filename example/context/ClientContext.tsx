import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { HibitClient } from '../../src/hibit-client';

interface ClientContextType {
  client: HibitClient;
  hinValue: bigint | undefined;
  refreshHin: () => void;
}

const ClientContext = createContext<ClientContextType | undefined>(undefined);

export function ClientProvider({ children, client }: { children: ReactNode; client: HibitClient }) {
  const [hinValue, setHinValue] = useState<bigint | undefined>();

  const refreshHin = () => {
    const options = client.getOptions();
    setHinValue(options?.hin);
  };

  useEffect(() => {
    refreshHin();
  }, [client]);

  return <ClientContext.Provider value={{ client, hinValue, refreshHin }}>{children}</ClientContext.Provider>;
}

export function useClientContext() {
  const context = useContext(ClientContext);
  if (context === undefined) {
    throw new Error('useClientContext must be used within a ClientProvider');
  }
  return context;
}
