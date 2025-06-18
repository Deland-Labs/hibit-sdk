import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  hin: string().optional()
});

export default function SectionGetNonce() {
  const { client } = useClientContext();
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
      // If HIN is provided, use it; otherwise use default from client options
      const hin = input.hin ? BigInt(input.hin) : undefined;
      setResult(await client.getNonce(hin));
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
          <FormField label="HIN (optional - uses client default if empty)" error={errors.hin}>
            <input
              type="number"
              className="input"
              {...register('hin')}
              placeholder="Leave empty to use client default HIN"
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
