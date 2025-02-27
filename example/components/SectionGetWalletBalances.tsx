import { GetWalletBalancesInput } from '../../src';
import { HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from './FormField';
import BigNumber from 'bignumber.js';

const schema = object({
  hin: string().required(),
  assetId: string()
});

export default function SectionGetWalletBalances({ client }: { client: HibitClient }) {
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
        hin: BigInt(input.hin),
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
          <FormField label="WalletId" error={errors.hin} required>
            <input type="number" className="input" {...register('hin')} pattern="[0-9]*" />
          </FormField>
          <FormField label="AssetId" error={errors.assetId}>
            <input type="number" className="input" {...register('assetId')} pattern="[0-9]*" />
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
