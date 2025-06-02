import { Chain, ChainId, ChainNetwork } from '../../src';
import { chainNetworkMap } from '../utils/chainUtils';

interface ChainIdSelectorProps {
  selectedChainIds: ChainId[];
  onChange: (chainIds: ChainId[]) => void;
  singleSelect?: boolean;
}

export default function ChainIdSelector({ selectedChainIds, onChange, singleSelect }: ChainIdSelectorProps) {
  const isChainIdSelected = (chain: Chain, network: ChainNetwork) => {
    return selectedChainIds.some((chainId) => chainId.chain.equals(chain) && chainId.network.equals(network));
  };

  const handleChainIdChange = (chain: Chain, network: ChainNetwork) => {
    const chainId = new ChainId(chain, network);
    if (singleSelect) {
      onChange([chainId]);
      return;
    }

    const exists = selectedChainIds.some((id) => id.equals(chainId));
    if (exists) {
      onChange(selectedChainIds.filter((id) => !id.equals(chainId)));
    } else {
      onChange([...selectedChainIds, chainId]);
    }
  };

  return (
    <div className="flex flex-col gap-1 max-h-80 overflow-y-auto p-2 border rounded">
      {chainNetworkMap.map((chainItem) => (
        <div key={chainItem.chain.toString()}>
          <div className="font-bold mt-1">{chainItem.name}</div>
          <div className="ml-4">
            {chainItem.networks.map((networkItem) => (
              <label key={networkItem.network.toString()} className="flex items-center gap-2">
                <input
                  type={singleSelect ? 'radio' : 'checkbox'}
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
  );
}
