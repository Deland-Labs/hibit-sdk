import { GetChainBalancesInput } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import BigNumber from 'bignumber.js';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  assetId: string()
});

export default function SectionGetChainBalances() {
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
      const req: GetChainBalancesInput = {
        assetId: input.assetId || undefined
      };
      setResult(await client.getChainBalances(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetChainBalances"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="Asset ID (optional)" error={errors.assetId}>
            <input
              type="text"
              className="input"
              {...register('assetId')}
              placeholder="Leave empty to get all balances"
            />
          </FormField>
          <button className="btn" onClick={submit} disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      }
      result={result ? Object.fromEntries(result) : null}
      error={error}
    />
  );
}
