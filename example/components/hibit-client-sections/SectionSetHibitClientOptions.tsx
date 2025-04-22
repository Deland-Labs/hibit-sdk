import { HibitNetwork } from '../../../src';
import { HibitApiOptions, HibitClient } from '../../../src/hibit-client';
import Section from '../Section';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import { useEffect } from 'react';

const schema = object({
  network: string().oneOf(Object.values(HibitNetwork).map(String)).required(),
  hin: string().required(),
  proxyKey: string().required()
});

export default function SectionSetHibitClientOptions({
  client,
  defaultOptions
}: {
  client: HibitClient;
  defaultOptions: HibitApiOptions;
}) {
  const {
    register,
    control,
    watch,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      network: defaultOptions.network,
      hin: defaultOptions.hin?.toString() ?? '',
      proxyKey: defaultOptions.proxyKey
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  const formValues = watch();

  useEffect(() => {
    if (isValid && formValues.hin && formValues.proxyKey) {
      client.setOptions({
        network: formValues.network as HibitNetwork,
        hin: BigInt(formValues.hin),
        proxyKey: formValues.proxyKey
      });
    }
  }, [formValues, isValid, client]);

  return (
    <Section
      title="Hibit Client Options Config"
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
            <input type="number" className="input" {...register('hin')} />
          </FormField>
          <FormField label="Proxy Key" error={errors.proxyKey} required>
            <input type="text" className="input" {...register('proxyKey')} />
          </FormField>
          <div className="flex items-center gap-2">
            <a
              href="https://docs.hibit.app/developers/getting-your-proxy-key"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              How to get your HIN and Proxy Key?
            </a>
          </div>
        </div>
      }
      error={''}
    />
  );
}
