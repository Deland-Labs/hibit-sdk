import { GetMarketKlineInput, MarketKlineItem, PageResponse, TickSpace } from '../../src';
import { HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string } from 'yup';
import FormField from './FormField';

const schema = object({
  marketId: string().required(),
  tickSpace: number()
    .oneOf(
      Object.keys(TickSpace)
        .filter((v) => !isNaN(Number(v)))
        .map(Number)
    )
    .required(),
  limit: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  offset: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  orderBy: string()
});

export default function SectionGetMarketKline({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PageResponse<MarketKlineItem> | null>(null);
  const [error, setError] = useState<string>('');

  const {
    register,
    control,
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
      const req: GetMarketKlineInput = {
        marketId: BigInt(input.marketId),
        tickSpace: input.tickSpace,
        limit: input.limit ?? undefined,
        offset: input.offset ?? undefined,
        orderBy: input.orderBy || undefined
      };
      setResult(await client.getMarketKline(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetMarketKline"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="MarketId" error={errors.marketId} required>
            <input type="number" className="input" {...register('marketId')} />
          </FormField>
          <FormField label="TickSpace" error={errors.tickSpace} required>
            <Controller
              name="tickSpace"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-3 flex-wrap">
                  {Object.keys(TickSpace)
                    .filter((v) => isNaN(Number(v)))
                    .map((key) => (
                      <label key={key} className="flex items-center gap-1">
                        <span>{key}</span>
                        <input
                          name="getMarketKline-tickSpace"
                          type="radio"
                          checked={field.value === Number(TickSpace[key as any])}
                          onChange={(ev) => {
                            if (ev.target.checked) {
                              field.onChange(Number(TickSpace[key as any]));
                            }
                          }}
                        />
                      </label>
                    ))}
                </div>
              )}
            />
          </FormField>
          <FormField label="Limit" error={errors.limit}>
            <input type="number" className="input" {...register('limit')} />
          </FormField>
          <FormField label="Offset" error={errors.offset}>
            <input type="number" className="input" {...register('offset')} />
          </FormField>
          <FormField label="OrderBy" error={errors.orderBy}>
            <input type="text" className="input" {...register('orderBy')} />
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
