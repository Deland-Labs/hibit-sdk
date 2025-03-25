import { ChainId, GetMarket24HrTickerInput, Market24HrTickerInfo } from '../../src';
import { HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from './FormField';
import ChainIdSelector from './ChainIdSelector.tsx';
import AssetTypeSelector from './AssetTypeSelector.tsx';

const schema = object({
  marketId: string(),
  chainIds: object().nullable(),
  chainAssetTypes: object().nullable()
});

export default function SectionGetMarkets24HrTickerExtended({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Array<Market24HrTickerInfo> | null>(null);
  const [error, setError] = useState<string>('');
  const [selectedAssetTypes, setSelectedAssetTypes] = useState<number[]>([]);
  const [selectedChainIds, setSelectedChainIds] = useState<ChainId[]>([]);

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
          <FormField label="MarketId" error={errors.marketId}>
            <input type="number" className="input" {...register('marketId')} />
          </FormField>
          <ChainIdSelector selectedChainIds={selectedChainIds} onChange={setSelectedChainIds} error={errors.chainIds} />
          <AssetTypeSelector
            selectedAssetTypes={selectedAssetTypes}
            onChange={setSelectedAssetTypes}
            error={errors.chainAssetTypes}
          />
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
