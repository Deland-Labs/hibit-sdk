import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import { useClientContext } from '../../context/ClientContext';
import { WithdrawDetailsInfo } from '../../../src/types/withdraw';

const schema = object({
  txHash: string().required()
});

export default function SectionGetWithdrawDetails() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<WithdrawDetailsInfo | null>(null);
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
      const res = await client.getWithdrawDetails(input.txHash);
      setResult(res);
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetWithdrawDetails"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="Transaction Hash" error={errors.txHash} required>
            <input type="text" className="input" {...register('txHash')} />
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
