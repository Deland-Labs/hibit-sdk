import { ChainAssetType } from '../../src';

interface AssetTypeSelectorProps {
  selectedAssetTypes: number[];
  onChange: (assetTypes: number[]) => void;
  singleSelect?: boolean;
}

export default function AssetTypeSelector({ selectedAssetTypes, onChange, singleSelect }: AssetTypeSelectorProps) {
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

  return (
    <div className="flex flex-col gap-1 max-h-40 overflow-y-auto p-2 border rounded">
      {Object.entries(ChainAssetType)
        .filter(([key]) => isNaN(Number(key)))
        .map(([key, value]) => (
          <label key={value} className="flex items-center gap-2">
            <input
              type={singleSelect ? 'radio' : 'checkbox'}
              checked={selectedAssetTypes.includes(Number(value))}
              onChange={() => handleAssetTypeChange(Number(value))}
            />
            <span>
              {key} ({value})
            </span>
          </label>
        ))}
    </div>
  );
}
