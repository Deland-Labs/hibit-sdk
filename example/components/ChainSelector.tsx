import { Chain } from '../../src';

interface ChainSelectorProps {
  selectedChain?: Chain;
  onChange: (chain: Chain) => void;
  placeholder?: string;
  disabled?: boolean;
}

export default function ChainSelector({ selectedChain, onChange, placeholder, disabled }: ChainSelectorProps) {
  const chains = Chain.getAllChains();

  return (
    <select
      className={`input ${disabled ? 'bg-gray-100 cursor-not-allowed' : ''}`}
      value={selectedChain?.toString() || ''}
      onChange={(e) => {
        if (disabled) return;
        const value = e.target.value;
        if (value) {
          const chain = chains.find((c) => c.toString() === value);
          if (chain) {
            onChange(chain);
          }
        }
      }}
      disabled={disabled}
    >
      <option value="">{placeholder || 'Select Chain'}</option>
      {chains.map((chain) => (
        <option key={chain.toString()} value={chain.toString()}>
          {chain.name} ({chain.toString()})
        </option>
      ))}
    </select>
  );
}
