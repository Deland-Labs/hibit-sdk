import { GetMarketsInput, MarketInfo, PageResponse } from '../../src';
import { HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string } from 'yup';
import FormField from './FormField';

const schema = object({
  chainIds: string(),
  chainAssetTypes: string(),
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

export default function SectionGetMarkets({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PageResponse<MarketInfo> | null>(null);
  const [error, setError] = useState<string>('');

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
        chainIds: input.chainIds ? input.chainIds.split(',').map((id) => id.trim()) : undefined,
        chainAssetTypes: input.chainAssetTypes ? input.chainAssetTypes.split(',').map((id) => id.trim()) : undefined,
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
          <FormField label="ChainIds" labelDesc="comma separated" error={errors.chainIds}>
            <input type="text" className="input" {...register('chainIds')} />
          </FormField>
          <FormField label="ChainAssetTypes" labelDesc="comma separated" error={errors.chainAssetTypes}>
            <input type="text" className="input" {...register('chainAssetTypes')} />
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
      result={result}
      error={error}
    />
  );
}
