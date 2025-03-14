import { HibitNetwork } from '../../src';
import { HibitApiOptions, HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from './FormField';

const schema = object({
  network: string().oneOf(Object.values(HibitNetwork).map(String)).required(),
  hin: string().required(),
  proxyKey: string().required()
});

export default function SectionSetOptions({
  client,
  defaultOptions
}: {
  client: HibitClient;
  defaultOptions: HibitApiOptions;
}) {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      network: defaultOptions.network,
      hin: defaultOptions.hin?.toString() ?? '',
      proxyKey: defaultOptions.proxyKey
    },
    resolver: yupResolver(schema)
  });

  const submit = handleSubmit(async (input) => {
    client.setOptions({
      network: input.network as HibitNetwork,
      hin: BigInt(input.hin),
      proxyKey: input.proxyKey
    });
  });

  return (
    <Section
      title="SDK Options Config"
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
          <button className="btn self-start" onClick={submit}>
            Update Options
          </button>
        </div>
      }
      error={''}
    />
  );
}
