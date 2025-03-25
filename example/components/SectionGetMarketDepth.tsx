import { DepthIndex, GetMarketDepthInput, MarketDepth } from '../../src';
import { HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string } from 'yup';
import FormField from './FormField';

const schema = object({
  index: number()
    .oneOf(
      Object.keys(DepthIndex)
        .filter((v) => !isNaN(Number(v)))
        .map(Number)
    )
    .required(),
  marketId: string().required(),
  limit: number().required().min(1).max(100)
});

export default function SectionGetMarketDepth({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<MarketDepth | null>(null);
  const [error, setError] = useState<string>('');

  const {
    register,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      limit: 10
    },
    resolver: yupResolver(schema)
  });

  const submit = handleSubmit(async (input) => {
    setLoading(true);
    setResult(null);
    setError('');
    try {
      const req: GetMarketDepthInput = {
        index: input.index,
        marketId: BigInt(input.marketId),
        limit: input.limit
      };
      setResult(await client.getMarketDepth(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetMarketDepth"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="Index" error={errors.index} required>
            <Controller
              name="index"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-3 flex-wrap">
                  {Object.keys(DepthIndex)
                    .filter((v) => isNaN(Number(v)))
                    .map((key) => (
                      <label key={key} className="flex items-center gap-1">
                        <span>{key}</span>
                        <input
                          name="getMarketDepth-index"
                          type="radio"
                          checked={field.value === Number(DepthIndex[key as any])}
                          onChange={(ev) => {
                            if (ev.target.checked) {
                              field.onChange(Number(DepthIndex[key as any]));
                            }
                          }}
                        />
                      </label>
                    ))}
                </div>
              )}
            />
          </FormField>
          <FormField label="MarketId" error={errors.marketId} required>
            <input type="number" className="input" {...register('marketId')} />
          </FormField>
          <FormField label="Limit" error={errors.limit} required>
            <input type="number" min={1} max={100} className="input" {...register('limit')} />
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
