import { AssetInfo, GetAssetsInput, PageResponse } from '../../src';
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
  limit: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  offset: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  orderBy: string()
});

export default function SectionGetAssets({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PageResponse<AssetInfo> | null>(null);
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
      const req: GetAssetsInput = {
        chainIds: input.chainIds ? input.chainIds.split(',').map((id) => id.trim()) : undefined,
        chainAssetTypes: input.chainAssetTypes ? input.chainAssetTypes.split(',').map((id) => id.trim()) : undefined,
        limit: input.limit ? input.limit : undefined,
        offset: input.offset ? input.offset : undefined,
        orderBy: input.orderBy || undefined
      };
      setResult(await client.getAssets(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetAssets"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="ChainIds" labelDesc="comma separated" error={errors.chainIds}>
            <input type="text" className="input" {...register('chainIds')} />
          </FormField>
          <FormField label="ChainAssetTypes" labelDesc="comma separated" error={errors.chainAssetTypes}>
            <input type="text" className="input" {...register('chainAssetTypes')} />
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
