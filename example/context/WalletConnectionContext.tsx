import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export enum WalletType {
  MetaMask = 'MetaMask',
  Kaspa = 'Kaspa'
}

export interface WalletConnectionState {
  isConnected: boolean;
  walletType: WalletType | null;
  walletAddress: string;
  walletPublicKey?: string;
  connecting: boolean;
  connectionError: string;
}

interface WalletConnectionContextType extends WalletConnectionState {
  connectMetaMask: () => Promise<void>;
  connectKaspa: () => Promise<void>;
  disconnectWallet: () => void;
  scrollToWalletConnection: () => void;
}

const WalletConnectionContext = createContext<WalletConnectionContextType | undefined>(undefined);

export function WalletConnectionProvider({ children }: { children: ReactNode }) {
  const [connectionState, setConnectionState] = useState<WalletConnectionState>({
    isConnected: false,
    walletType: null,
    walletAddress: '',
    walletPublicKey: undefined,
    connecting: false,
    connectionError: ''
  });

  // Monitor connection state changes for debugging
  useEffect(() => {
    console.log('WalletConnectionContext - State changed:', {
      isConnected: connectionState.isConnected,
      walletType: connectionState.walletType,
      walletAddress: connectionState.walletAddress
        ? `${connectionState.walletAddress.slice(0, 6)}...${connectionState.walletAddress.slice(-4)}`
        : 'none'
    });
  }, [connectionState]);

  const connectMetaMask = async () => {
    setConnectionState((prev) => ({ ...prev, connecting: true, connectionError: '' }));

    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });

        if (accounts.length > 0) {
          // For MetaMask, we can derive public key from address or use eth_getEncryptionPublicKey
          // For simplicity, we'll use the address as public key identifier for now
          // In production, you might want to use eth_getEncryptionPublicKey method
          setConnectionState((prev) => ({
            ...prev,
            walletAddress: accounts[0],
            walletPublicKey: accounts[0], // Using address as public key identifier for MetaMask
            isConnected: true,
            walletType: WalletType.MetaMask,
            connecting: false
          }));
        } else {
          throw new Error('No accounts found');
        }
      } else {
        throw new Error('MetaMask not detected. Please install MetaMask.');
      }
    } catch (error: any) {
      setConnectionState((prev) => ({
        ...prev,
        connectionError: error.message || 'Failed to connect MetaMask',
        isConnected: false,
        connecting: false
      }));
    }
  };

  const connectKaspa = async () => {
    setConnectionState((prev) => ({ ...prev, connecting: true, connectionError: '' }));

    try {
      if (typeof window.kasware !== 'undefined') {
        const accounts = await window.kasware.requestAccounts();

        if (accounts && accounts.length > 0) {
          // Get public key for Kasware
          const publicKey = await window.kasware.getPublicKey();

          setConnectionState((prev) => ({
            ...prev,
            walletAddress: accounts[0],
            walletPublicKey: publicKey,
            isConnected: true,
            walletType: WalletType.Kaspa,
            connecting: false
          }));
        } else {
          throw new Error('No Kasware accounts found');
        }
      } else {
        throw new Error('Kasware wallet not detected. Please install Kasware wallet extension.');
      }
    } catch (error: any) {
      setConnectionState((prev) => ({
        ...prev,
        connectionError: error.message || 'Failed to connect Kasware wallet',
        isConnected: false,
        connecting: false
      }));
    }
  };

  const disconnectWallet = () => {
    setConnectionState({
      isConnected: false,
      walletType: null,
      walletAddress: '',
      walletPublicKey: undefined,
      connecting: false,
      connectionError: ''
    });
  };

  // Listen for account changes, only handle when already connected
  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
      const handleAccountsChanged = (accounts: string[]) => {
        // Only handle account changes when currently connected to MetaMask
        if (connectionState.walletType === WalletType.MetaMask && connectionState.isConnected) {
          if (accounts.length === 0) {
            // User disconnected in wallet extension
            disconnectWallet();
          } else {
            // User switched accounts
            setConnectionState((prev) => ({
              ...prev,
              walletAddress: accounts[0]
            }));
          }
        }
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      };
    }
  }, [connectionState.walletType, connectionState.isConnected]);

  const scrollToWalletConnection = () => {
    const walletSection = document.querySelector('[data-section="hibit-client-options"]');
    if (walletSection) {
      walletSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <WalletConnectionContext.Provider
      value={{
        ...connectionState,
        connectMetaMask,
        connectKaspa,
        disconnectWallet,
        scrollToWalletConnection
      }}
    >
      {children}
    </WalletConnectionContext.Provider>
  );
}

export function useWalletConnection() {
  const context = useContext(WalletConnectionContext);
  if (context === undefined) {
    throw new Error('useWalletConnection must be used within a WalletConnectionProvider');
  }
  return context;
}
