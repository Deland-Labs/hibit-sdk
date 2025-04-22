import { OrderTradeRecord } from '../../../src';
import { HibitClient } from '../../../src/hibit-client';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';

const schema = object({
  orderId: string().required()
});

export default function SectionGetOrderTrades({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Array<OrderTradeRecord> | null>(null);
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
      const req = input.orderId;
      setResult(await client.getOrderTrades(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetOrderTrades"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="OrderId" error={errors.orderId} required>
            <input type="text" className="input" {...register('orderId')} />
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
