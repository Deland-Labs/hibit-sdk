import { HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from './FormField';

const schema = object({
  walletId: string().required()
});

export default function SectionGetNonce({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<bigint | null>(null);
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
      const req = BigInt(input.walletId);
      setResult(await client.getNonce(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetNonce"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="WalletId" error={errors.walletId} required>
            <input type="number" className="input" {...register('walletId')} />
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
