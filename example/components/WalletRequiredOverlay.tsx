interface WalletRequiredOverlayProps {
  /**
   * Whether to show the overlay
   */
  show: boolean;
  /**
   * The opacity of the overlay background (0-1)
   */
  opacity?: number;
  /**
   * Whether to add blur effect
   */
  blur?: boolean;
  /**
   * Custom background color
   */
  backgroundColor?: string;
  /**
   * Children content that will be overlaid
   */
  children: React.ReactNode;
}

export default function WalletRequiredOverlay({
  show,
  opacity = 0.9,
  blur = true,
  backgroundColor = 'rgba(255, 255, 255, 0.9)',
  children
}: WalletRequiredOverlayProps) {
  return (
    <div className="relative">
      {children}

      {/* Semi-transparent overlay when wallet not connected */}
      {show && (
        <div
          className="absolute inset-0 rounded pointer-events-none z-10"
          style={{
            backgroundColor,
            backdropFilter: blur ? 'blur(0.5px)' : 'none',
            opacity
          }}
        />
      )}
    </div>
  );
}
