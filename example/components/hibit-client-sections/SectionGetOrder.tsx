import { OrderInfo } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  orderId: string(),
  clientOrderId: string(),
  txHash: string()
}).test(
  'exactly-one-identifier',
  'Exactly one of Order ID, Client Order ID, or Tx Hash must be provided',
  function (value) {
    const providedCount = [!!value.orderId, !!value.clientOrderId, !!value.txHash].filter(Boolean).length;
    return providedCount === 1;
  }
);

export default function SectionGetOrder() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<OrderInfo | null>(null);
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
      setResult(await client.getOrder(input));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetOrder"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="Order ID" error={errors.orderId}>
            <input type="text" className="input" {...register('orderId')} />
          </FormField>
          <FormField label="Client Order ID" error={errors.clientOrderId}>
            <input type="text" className="input" {...register('clientOrderId')} />
          </FormField>
          <FormField label="Tx Hash" error={errors.txHash}>
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
