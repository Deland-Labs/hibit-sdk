import { useState, useEffect } from 'react';

export enum WalletType {
  MetaMask = 'MetaMask',
  Kaspa = 'Kaspa'
}

export interface WalletConnectionState {
  isConnected: boolean;
  walletType: WalletType | null;
  walletAddress: string;
  connecting: boolean;
  connectionError: string;
}

export function useWalletConnection() {
  const [connectionState, setConnectionState] = useState<WalletConnectionState>({
    isConnected: false,
    walletType: null,
    walletAddress: '',
    connecting: false,
    connectionError: ''
  });

  const connectMetaMask = async () => {
    setConnectionState((prev) => ({ ...prev, connecting: true, connectionError: '' }));

    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        });

        if (accounts.length > 0) {
          setConnectionState((prev) => ({
            ...prev,
            walletAddress: accounts[0],
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
        const result = await window.kasware.requestAccounts();

        if (result && result.length > 0) {
          setConnectionState((prev) => ({
            ...prev,
            walletAddress: result[0],
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
    // Manually disconnect, clear state directly
    setConnectionState({
      isConnected: false,
      walletType: null,
      walletAddress: '',
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

  return {
    ...connectionState,
    connectMetaMask,
    connectKaspa,
    disconnectWallet,
    scrollToWalletConnection
  };
}
