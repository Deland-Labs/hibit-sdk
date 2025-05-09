import { HibitNetwork } from '../../../src';
import Section from '../Section';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import { useEffect } from 'react';
import { BrokerApiOptions, BrokerClient } from '../../../src/broker-client';

const schema = object({
  network: string().oneOf(Object.values(HibitNetwork).map(String)).required()
});

export default function SectionSetBrokerClientOptions({
  client,
  defaultOptions
}: {
  client: BrokerClient;
  defaultOptions: BrokerApiOptions;
}) {
  const {
    control,
    watch,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      network: defaultOptions.network
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const formValues = watch();

  useEffect(() => {
    if (isValid) {
      client.setOptions({
        network: formValues.network as HibitNetwork
      });
    }
  }, [formValues, isValid, client]);

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
        </div>
      }
      error={''}
    />
  );
}
