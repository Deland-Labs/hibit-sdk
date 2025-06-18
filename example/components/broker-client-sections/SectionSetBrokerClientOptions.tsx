import { HibitNetwork } from '../../../src';
import Section from '../Section';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import { useEffect } from 'react';
import { BrokerApiOptions, BrokerClient } from '../../../src/broker-client';

const schema = object({
  network: string().oneOf(Object.values(HibitNetwork).map(String)).required(),
  hin: string().required('HIN is required')
});

interface SectionSetBrokerClientOptionsProps {
  client: BrokerClient;
  defaultOptions: BrokerApiOptions;
  onNetworkChange?: (network: HibitNetwork) => void;
}

export default function SectionSetBrokerClientOptions({
  client,
  defaultOptions,
  onNetworkChange
}: SectionSetBrokerClientOptionsProps) {
  const {
    control,
    watch,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      network: defaultOptions.network,
      hin: defaultOptions.hin?.toString() || ''
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const formValues = watch();

  useEffect(() => {
    if (isValid) {
      const newNetwork = formValues.network as HibitNetwork;
      client.setOptions({
        network: newNetwork,
        hin: formValues.hin ? BigInt(formValues.hin) : undefined
      });
      // Notify parent component about network change
      onNetworkChange?.(newNetwork);
    }
  }, [formValues, isValid, client, onNetworkChange]);

  return (
    <Section
      title="Broker Client Options Config"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="Network" error={errors.network} required>
            <Controller
              name="network"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-3 flex-wrap">
                  {Object.values(HibitNetwork).map((v) => (
                    <label key={v} className="flex items-center gap-1">
                      <span>{v}</span>
                      <input
                        name="network"
                        type="radio"
                        checked={field.value === v}
                        onChange={(ev) => {
                          if (ev.target.checked) {
                            field.onChange(v);
                          }
                        }}
                      />
                    </label>
                  ))}
                </div>
              )}
            />
          </FormField>

          <FormField label="HIN" error={errors.hin} required>
            <Controller
              name="hin"
              control={control}
              render={({ field }) => (
                <input
                  type="text"
                  placeholder="Enter HIN (e.g., 10007)"
                  className="border rounded p-2 w-full"
                  {...field}
                />
              )}
            />
          </FormField>
        </div>
      }
      error={''}
    />
  );
}
