import { GetWalletBalancesInput } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import BigNumber from 'bignumber.js';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  hin: string().optional(),
  assetId: string().optional()
});

export default function SectionGetWalletBalances() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Map<string, BigNumber> | null>(null);
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
      const req: GetWalletBalancesInput = {
        hin: input.hin ? BigInt(input.hin) : undefined,
        assetId: input.assetId ? BigInt(input.assetId) : undefined
      };
      const res = await client.getWalletBalances(req);
      setResult(res);
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetWalletBalances"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="HIN (optional - uses client default if empty)" error={errors.hin}>
            <input
              type="number"
              className="input"
              {...register('hin')}
              pattern="[0-9]*"
              placeholder="Leave empty to use client default HIN"
            />
          </FormField>
          <FormField label="AssetId (optional)" error={errors.assetId}>
            <input
              type="number"
              className="input"
              {...register('assetId')}
              pattern="[0-9]*"
              placeholder="Leave empty to get all assets"
            />
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
