declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>;
      on: (event: string, callback: (accounts: string[]) => void) => void;
      removeListener: (event: string, callback: (accounts: string[]) => void) => void;
    };
    kasware?: {
      requestAccounts: () => Promise<string[]>;
      getAccounts: () => Promise<string[]>;
      getPublicKey: () => Promise<string>;
      signMessage: (msg: string, noAuxRand?: boolean) => Promise<string>;
      getNetwork: () => Promise<string>;
      switchNetwork: (network: string) => Promise<void>;
      getBalance: () => Promise<{ confirmed: number; unconfirmed: number; total: number }>;
      sendKaspa: (toAddress: string, satoshis: number, options?: any) => Promise<string>;
      signPsbt: (psbtHex: string, options?: any) => Promise<string>;
    };
  }
}

export {};
