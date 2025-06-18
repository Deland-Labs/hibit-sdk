import { GetMarketsInput, MarketInfo, PageResponse, ChainId, HibitNetwork } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string } from 'yup';
import FormField from '../FormField';
import ChainIdSelector from '../ChainIdSelector';
import AssetTypeSelector from '../AssetTypeSelector';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  chainIds: object().nullable(),
  chainAssetTypes: object().nullable(),
  baseAssetId: string(),
  quoteAssetId: string(),
  limit: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  offset: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  orderBy: string()
});

interface SectionGetMarketsProps {
  hibitNetwork?: HibitNetwork;
}

export default function SectionGetMarkets({ hibitNetwork }: SectionGetMarketsProps = {}) {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PageResponse<MarketInfo> | null>(null);
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
      const req: GetMarketsInput = {
        chainIds: selectedChainIds.length > 0 ? selectedChainIds : undefined,
        chainAssetTypes: selectedAssetTypes.length > 0 ? selectedAssetTypes : undefined,
        baseAssetId: input.baseAssetId ? BigInt(input.baseAssetId) : undefined,
        quoteAssetId: input.quoteAssetId ? BigInt(input.quoteAssetId) : undefined,
        limit: input.limit ?? undefined,
        offset: input.offset ?? undefined,
        orderBy: input.orderBy || undefined
      };
      setResult(await client.getMarkets(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetMarkets"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="ChainIds" labelDesc="select multiple chains" error={errors.chainIds}>
            <ChainIdSelector
              selectedChainIds={selectedChainIds}
              onChange={setSelectedChainIds}
              hibitNetwork={hibitNetwork}
            />
          </FormField>
          <FormField label="ChainAssetTypes" labelDesc="select multiple types" error={errors.chainAssetTypes}>
            <AssetTypeSelector selectedAssetTypes={selectedAssetTypes} onChange={setSelectedAssetTypes} />
          </FormField>
          <FormField label="BaseAssetId" error={errors.baseAssetId}>
            <input type="number" className="input" {...register('baseAssetId')} />
          </FormField>
          <FormField label="QuoteAssetId" error={errors.quoteAssetId}>
            <input type="number" className="input" {...register('quoteAssetId')} />
          </FormField>
          <FormField label="Limit" error={errors.limit}>
            <input type="number" className="input" {...register('limit')} />
          </FormField>
          <FormField label="Offset" error={errors.offset}>
            <input type="number" className="input" {...register('offset')} />
          </FormField>
          <FormField label="OrderBy" error={errors.orderBy}>
            <input type="text" className="input" {...register('orderBy')} />
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
