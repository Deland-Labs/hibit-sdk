interface WalletConnectionOverlayProps {
  onConnectClick: () => void;
}

export default function WalletConnectionOverlay({ onConnectClick }: WalletConnectionOverlayProps) {
  return (
    <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center z-10 rounded">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg border">
        <div className="mb-4">
          <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Wallet Not Connected</h3>
          <p className="text-gray-600 mb-4">Please connect your wallet first to use this feature.</p>
        </div>
        <button onClick={onConnectClick} className="btn bg-blue-500 text-white hover:bg-blue-600 px-6 py-2">
          Connect Wallet
        </button>
      </div>
    </div>
  );
}
