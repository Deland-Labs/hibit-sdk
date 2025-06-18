import { ChainAssetType } from '../../src';
import { memo } from 'react';
import { getSupportedAssetTypes } from '../utils/chainAssetMapping';

interface AssetTypeSelectorProps {
  selectedAssetTypes: number[];
  onChange: (assetTypes: number[]) => void;
  singleSelect?: boolean;
  name?: string; // Name prop for radio button groups
  selectedChainId?: string; // Chain ID to filter supported asset types
}

function AssetTypeSelector({
  selectedAssetTypes,
  onChange,
  singleSelect,
  name,
  selectedChainId
}: AssetTypeSelectorProps) {
  const handleAssetTypeChange = (type: number) => {
    if (singleSelect) {
      onChange([type]);
      return;
    }
    if (selectedAssetTypes.includes(type)) {
      onChange(selectedAssetTypes.filter((t) => t !== type));
    } else {
      onChange([...selectedAssetTypes, type]);
    }
  };

  // Get supported asset types for the selected chain
  const supportedAssetTypes = selectedChainId ? getSupportedAssetTypes(selectedChainId) : [];
  const hasChainSelected = !!selectedChainId;

  return (
    <div className="flex flex-col gap-1 max-h-40 overflow-y-auto p-2 border rounded">
      {Object.entries(ChainAssetType)
        .filter(([key]) => isNaN(Number(key)))
        .map(([key, value]) => {
          const assetType = Number(value);
          const isSupported = !hasChainSelected || supportedAssetTypes.includes(assetType);

          return (
            <label key={value} className={`flex items-center gap-2 ${!isSupported ? 'opacity-50' : ''}`}>
              <input
                type={singleSelect ? 'radio' : 'checkbox'}
                name={singleSelect ? name : undefined}
                checked={selectedAssetTypes.includes(assetType)}
                onChange={() => handleAssetTypeChange(assetType)}
                disabled={!isSupported}
              />
              <span>
                {key} ({value})
                {!isSupported && hasChainSelected && <span className="text-red-500 text-xs ml-1">(Not supported)</span>}
              </span>
            </label>
          );
        })}
    </div>
  );
}

export default memo(AssetTypeSelector);
