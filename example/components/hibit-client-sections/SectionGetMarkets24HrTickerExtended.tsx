import { GetMarket24HrTickerInput, Market24HrTickerExtendInfo, ChainId, HibitNetwork } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import ChainIdSelector from '../ChainIdSelector';
import AssetTypeSelector from '../AssetTypeSelector';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  marketId: string(),
  chainIds: object().nullable(),
  chainAssetTypes: object().nullable()
});

interface SectionGetMarkets24HrTickerExtendedProps {
  hibitNetwork?: HibitNetwork;
}

export default function SectionGetMarkets24HrTickerExtended({
  hibitNetwork
}: SectionGetMarkets24HrTickerExtendedProps = {}) {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Market24HrTickerExtendInfo[] | null>(null);
  const [error, setError] = useState<string>('');
  const [selectedChainIds, setSelectedChainIds] = useState<ChainId[]>([]);
  const [selectedAssetTypes, setSelectedAssetTypes] = useState<number[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const submit = handleSubmit(async (input) => {
    setLoading(true);
    setResult(null);
    setError('');
    try {
      const req: GetMarket24HrTickerInput = {
        marketId: input.marketId ? BigInt(input.marketId) : undefined,
        chainIds: selectedChainIds.length > 0 ? selectedChainIds : undefined,
        chainAssetTypes: selectedAssetTypes.length > 0 ? selectedAssetTypes : undefined
      };
      setResult(await client.getMarkets24HrTickerExtended(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetMarkets24HrTickerExtended"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="Market ID" error={errors.marketId}>
            <input type="number" className="input" {...register('marketId')} placeholder="Optional market ID" />
          </FormField>
          <FormField label="Chain IDs" labelDesc="select multiple chains">
            <ChainIdSelector
              selectedChainIds={selectedChainIds}
              onChange={setSelectedChainIds}
              hibitNetwork={hibitNetwork}
            />
          </FormField>
          <FormField label="Chain Asset Types" labelDesc="select multiple types">
            <AssetTypeSelector selectedAssetTypes={selectedAssetTypes} onChange={setSelectedAssetTypes} />
          </FormField>
          <button className="btn" onClick={submit} disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      }
      loading={loading}
      result={result}
      error={error}
    />
  );
}
