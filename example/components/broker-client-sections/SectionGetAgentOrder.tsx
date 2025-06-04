import { AgentOrderData } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import { BrokerClient } from '../../../src/broker-client';

const schema = object({
  agentOrderId: string().required()
});

export default function SectionGetAgentOrder({ client }: { client: BrokerClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AgentOrderData | null>(null);
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
      const req = input.agentOrderId;
      setResult(await client.getAgentOrder(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetAgentOrder"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="Agent Order ID" error={errors.agentOrderId} required>
            <input type="text" className="input" {...register('agentOrderId')} />
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
