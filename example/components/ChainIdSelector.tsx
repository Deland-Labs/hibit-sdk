import { Chain, ChainId, ChainNetwork, HibitNetwork } from '../../src';
import { getFilteredChainNetworkMap } from '../utils/chainUtils';
import { memo, useMemo } from 'react';

interface ChainIdSelectorProps {
  selectedChainIds: ChainId[];
  onChange: (chainIds: ChainId[]) => void;
  /**
   * Whether to allow only single selection. Default is false (multi-select).
   */
  singleSelect?: boolean;
  /**
   * Placeholder text when no selection is made
   */
  placeholder?: string;
  /**
   * Unique name for radio button group (required when singleSelect is true)
   */
  name?: string;
  /**
   * Filter networks based on HibitNetwork (mainnet/testnet)
   */
  hibitNetwork?: HibitNetwork;
}

function ChainIdSelector({
  selectedChainIds,
  onChange,
  singleSelect = false,
  placeholder,
  name,
  hibitNetwork
}: ChainIdSelectorProps) {
  const filteredChainNetworkMap = useMemo(() => {
    return getFilteredChainNetworkMap(hibitNetwork);
  }, [hibitNetwork]);

  const isChainIdSelected = (chain: Chain, network: ChainNetwork) => {
    return selectedChainIds.some((chainId) => chainId.chain.equals(chain) && chainId.network.equals(network));
  };

  const handleChainIdChange = (chain: Chain, network: ChainNetwork) => {
    const chainId = new ChainId(chain, network);

    if (singleSelect) {
      // For single select, replace the entire selection
      onChange([chainId]);
      return;
    }

    // For multi-select, toggle the selection
    const exists = selectedChainIds.some((id) => id.equals(chainId));
    if (exists) {
      onChange(selectedChainIds.filter((id) => !id.equals(chainId)));
    } else {
      onChange([...selectedChainIds, chainId]);
    }
  };

  return (
    <div className="flex flex-col">
      {placeholder && selectedChainIds.length === 0 && <div className="text-gray-500 text-sm mb-2">{placeholder}</div>}
      <div className="flex flex-col gap-1 max-h-80 overflow-y-auto p-2 border rounded">
        {filteredChainNetworkMap.map((chainItem) => (
          <div key={chainItem.chain.toString()}>
            <div className="font-bold mt-1">{chainItem.name}</div>
            <div className="ml-4">
              {chainItem.networks.map((networkItem) => (
                <label key={networkItem.network.toString()} className="flex items-center gap-2">
                  <input
                    type={singleSelect ? 'radio' : 'checkbox'}
                    name={singleSelect ? name : undefined}
                    checked={isChainIdSelected(chainItem.chain, networkItem.network)}
                    onChange={() => handleChainIdChange(chainItem.chain, networkItem.network)}
                  />
                  <span>
                    {networkItem.name} ({chainItem.chain.toString()}_{networkItem.network.toString()})
                  </span>
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!singleSelect && selectedChainIds.length > 0 && (
        <div className="text-sm text-gray-600 mt-1">
          Selected: {selectedChainIds.length} chain{selectedChainIds.length > 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
}

export default memo(ChainIdSelector);
