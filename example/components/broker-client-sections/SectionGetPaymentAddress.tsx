import { ChainId, GetPaymentAddressInput, HibitNetwork } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import ChainIdSelector from '../ChainIdSelector';
import { BrokerClient } from '../../../src/broker-client';

const schema = object({
  hin: string().optional(),
  chainId: string().required()
});

interface SectionGetPaymentAddressProps {
  client: BrokerClient;
  hibitNetwork?: HibitNetwork;
}

export default function SectionGetPaymentAddress({ client, hibitNetwork }: SectionGetPaymentAddressProps) {
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
        ...(input.hin && { hin: BigInt(input.hin) }),
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
          <FormField label="HIN (optional - uses client option if not provided)" error={errors.hin}>
            <input type="number" className="input" placeholder="Leave empty to use client HIN" {...register('hin')} />
          </FormField>
          <FormField label="ChainId" error={errors.chainId} required>
            <ChainIdSelector
              singleSelect
              selectedChainIds={selectedChainId ? [ChainId.fromString(selectedChainId)] : []}
              onChange={(ids) => {
                setValue('chainId', ids[0]?.toString() ?? '');
                trigger('chainId');
              }}
              hibitNetwork={hibitNetwork}
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
