import { AssetInfo, GetAssetInput } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  assetId: string(),
  tokenAddress: string()
});

export default function SectionGetAsset() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AssetInfo[] | null>(null);
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
      const req: GetAssetInput = {
        assetId: input.assetId ? BigInt(input.assetId) : undefined,
        tokenAddress: input.tokenAddress
      };
      setResult(await client.getAsset(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetAsset"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="AssetId" error={errors.assetId}>
            <input type="number" className="input" {...register('assetId')} />
          </FormField>
          <FormField label="TokenAddress" error={errors.tokenAddress}>
            <input type="text" className="input" {...register('tokenAddress')} />
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
