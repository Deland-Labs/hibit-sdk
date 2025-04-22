import { MarketInfo } from '../../../src';
import { HibitClient } from '../../../src/hibit-client';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';

const schema = object({
  marketId: string().required()
});

export default function SectionGetMarket({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MarketInfo | null>(null);
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
      const req = BigInt(input.marketId);
      setResult(await client.getMarket(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetMarket"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="MarketId" error={errors.marketId} required>
            <input type="number" className="input" {...register('marketId')} />
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
