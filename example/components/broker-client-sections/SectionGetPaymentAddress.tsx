import { ChainId, GetPaymentAddressInput } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import ChainIdSelector from '../ChainIdSelector';
import { BrokerClient } from '../../../src/broker-client';

const schema = object({
  hin: string().required(),
  chainId: string().required()
});

export default function SectionGetPaymentAddress({ client }: { client: BrokerClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const {
    setValue,
    trigger,
    watch,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const selectedChainId = watch('chainId');

  const submit = handleSubmit(async (input) => {
    setLoading(true);
    setResult(null);
    setError('');
    try {
      const req: GetPaymentAddressInput = {
        hin: BigInt(input.hin),
        chainId: ChainId.fromString(input.chainId)
      };
      setResult(await client.getPaymentAddress(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetPaymentAddress"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="HIN" error={errors.hin} required>
            <input type="number" className="input" {...register('hin')} />
          </FormField>
          <FormField label="ChainId" error={errors.chainId} required>
            <ChainIdSelector
              singleSelect
              selectedChainIds={selectedChainId ? [ChainId.fromString(selectedChainId)] : []}
              onChange={(ids) => {
                setValue('chainId', ids[0]?.toString() ?? '');
                trigger('chainId');
              }}
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
