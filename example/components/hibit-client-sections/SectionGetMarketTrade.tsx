import { GetMarketTradeInput, PageResponse, Trade } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string } from 'yup';
import FormField from '../FormField';
import dayjs from 'dayjs';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  marketId: string().required(),
  tradedAtStart: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  tradedAtEnd: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  limit: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  offset: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  orderBy: string()
});

export default function SectionGetMarketTrade() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PageResponse<Trade> | null>(null);
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
      const req: GetMarketTradeInput = {
        marketId: BigInt(input.marketId),
        tradedAtStart: input.tradedAtStart ?? undefined,
        tradedAtEnd: input.tradedAtEnd ?? undefined,
        limit: input.limit ?? undefined,
        offset: input.offset ?? undefined,
        orderBy: input.orderBy || undefined
      };
      setResult(await client.getMarketTrade(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetMarketTrade"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="MarketId" error={errors.marketId} required>
            <input type="number" className="input" {...register('marketId')} />
          </FormField>
          <FormField label="TradedAtStart" error={errors.tradedAtStart}>
            <Controller
              control={control}
              name="tradedAtStart"
              render={({ field }) => (
                <input
                  type="datetime-local"
                  className="input"
                  {...field}
                  value={field.value ? dayjs(field.value).format('YYYY-MM-DDTHH:mm:ss') : undefined}
                  onChange={(e) => {
                    field.onChange(e.target.value ? new Date(e.target.value).getTime() : undefined);
                  }}
                />
              )}
            />
          </FormField>
          <FormField label="TradedAtEnd" error={errors.tradedAtEnd}>
            <Controller
              control={control}
              name="tradedAtEnd"
              render={({ field }) => (
                <input
                  type="datetime-local"
                  className="input"
                  {...field}
                  value={field.value ? dayjs(field.value).format('YYYY-MM-DDTHH:mm:ss') : undefined}
                  onChange={(e) => {
                    field.onChange(e.target.value ? new Date(e.target.value).getTime() : undefined);
                  }}
                />
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
