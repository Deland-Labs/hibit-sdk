import { ChainAssetType } from '../../src';
import FormField from './FormField';

interface AssetTypeSelectorProps {
  selectedAssetTypes: number[];
  onChange: (assetTypes: number[]) => void;
  error?: any;
}

export default function AssetTypeSelector({ selectedAssetTypes, onChange, error }: AssetTypeSelectorProps) {
  const handleAssetTypeChange = (type: number) => {
    if (selectedAssetTypes.includes(type)) {
      onChange(selectedAssetTypes.filter((t) => t !== type));
    } else {
      onChange([...selectedAssetTypes, type]);
    }
  };

  return (
    <FormField label="ChainAssetTypes" labelDesc="select multiple types" error={error}>
      <div className="flex flex-col gap-1 max-h-40 overflow-y-auto p-2 border rounded">
        {Object.entries(ChainAssetType)
          .filter(([key]) => isNaN(Number(key)))
          .map(([key, value]) => (
            <label key={value} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedAssetTypes.includes(Number(value))}
                onChange={() => handleAssetTypeChange(Number(value))}
              />
              <span>
                {key} ({value})
              </span>
            </label>
          ))}
      </div>
    </FormField>
  );
}
