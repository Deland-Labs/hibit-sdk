import { useWalletConnection } from '../context/WalletConnectionContext';

interface WalletConnectionStatusProps {
  /**
   * Whether to show the connect button when disconnected
   */
  showConnectButton?: boolean;
  /**
   * Custom text for the connect button
   */
  connectButtonText?: string;
  /**
   * Size variant for the connect button
   */
  buttonSize?: 'sm' | 'xs';
}

export default function WalletConnectionStatus({
  showConnectButton = true,
  connectButtonText = 'Connect Wallet',
  buttonSize = 'xs'
}: WalletConnectionStatusProps) {
  const { isConnected, walletType, scrollToWalletConnection } = useWalletConnection();

  const buttonClasses = buttonSize === 'sm' ? 'text-sm px-4 py-2' : 'text-xs px-3 py-1';

  return (
    <div className="flex items-center justify-between gap-3 w-full">
      {/* Wallet Connection Status */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
        <span className="text-sm whitespace-nowrap">{isConnected ? `Connected (${walletType})` : 'Disconnected'}</span>
      </div>

      {/* Connect Button - only show when disconnected */}
      {!isConnected && showConnectButton && (
        <button
          onClick={scrollToWalletConnection}
          className={`btn bg-blue-500 text-white hover:bg-blue-600 flex-shrink-0 ${buttonClasses}`}
        >
          {connectButtonText}
        </button>
      )}
    </div>
  );
}
