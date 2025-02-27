import { GetOrdersInput, OrderCategory, OrderInfo, OrderSide, OrderStatus, PageResponse } from '../../src';
import { HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string, array } from 'yup';
import FormField from './FormField';
import dayjs from 'dayjs';

const schema = object({
  hin: string().required(),
  status: array(
    number()
      .oneOf(
        Object.keys(OrderStatus)
          .filter((v) => !isNaN(Number(v)))
          .map(Number)
      )
      .required()
  ),
  marketId: string(),
  orderCategory: number().oneOf(
    Object.keys(OrderCategory)
      .filter((v) => !isNaN(Number(v)))
      .map(Number)
  ),
  orderSide: number().oneOf(
    Object.keys(OrderSide)
      .filter((v) => !isNaN(Number(v)))
      .map(Number)
  ),
  createdAtStart: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  createdAtEnd: number()
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

export default function SectionGetOrders({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PageResponse<OrderInfo> | null>(null);
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
      const req: GetOrdersInput = {
        hin: BigInt(input.hin),
        status: input.status?.length ? input.status : undefined,
        marketId: input.marketId ? BigInt(input.marketId) : undefined,
        orderCategory: input.orderCategory ?? undefined,
        orderSide: input.orderSide ?? undefined,
        createdAtStart: input.createdAtStart ?? undefined,
        createdAtEnd: input.createdAtEnd ?? undefined,
        limit: input.limit ?? undefined,
        offset: input.offset ?? undefined,
        orderBy: input.orderBy || undefined
      };
      setResult(await client.getOrders(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetOrders"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="HIN(Hibit chain identity number)" error={errors.hin} required>
            <input type="number" className="input" {...register('hin')} />
          </FormField>
          <FormField label="Status" error={errors.status}>
            <Controller
              name="status"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-3 flex-wrap">
                  {Object.keys(OrderStatus)
                    .filter((v) => isNaN(Number(v)))
                    .map((key) => (
                      <label key={key} className="flex items-center gap-1">
                        <span>{key}</span>
                        <input
                          name="GetOrders-status"
                          type="checkbox"
                          value={Number(OrderStatus[key as any])}
                          checked={field.value?.includes(Number(OrderStatus[key as any])) ?? false}
                          onChange={(ev) => {
                            if (ev.target.checked) {
                              field.onChange([...(field.value ?? []), Number(OrderStatus[key as any])]);
                            } else {
                              field.onChange((field.value ?? []).filter((v) => v !== Number(OrderStatus[key as any])));
                            }
                          }}
                        />
                      </label>
                    ))}
                </div>
              )}
            />
          </FormField>
          <FormField label="MarketId" error={errors.marketId}>
            <input type="number" className="input" {...register('marketId')} />
          </FormField>
          <FormField label="OrderCategory" error={errors.orderCategory}>
            <Controller
              name="orderCategory"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-3 flex-wrap">
                  {Object.keys(OrderCategory)
                    .filter((v) => isNaN(Number(v)))
                    .map((key) => (
                      <label key={key} className="flex items-center gap-1">
                        <span>{key}</span>
                        <input
                          name="GetOrders-orderCategory"
                          type="radio"
                          value={Number(OrderCategory[key as any])}
                          checked={field.value === Number(OrderCategory[key as any])}
                          onChange={(ev) => {
                            if (ev.target.checked) {
                              field.onChange(Number(OrderCategory[key as any]));
                            }
                          }}
                        />
                      </label>
                    ))}
                </div>
              )}
            />
          </FormField>
          <FormField label="OrderSide" error={errors.orderSide}>
            <Controller
              name="orderSide"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-3 flex-wrap">
                  {Object.keys(OrderSide)
                    .filter((v) => isNaN(Number(v)))
                    .map((key) => (
                      <label key={key} className="flex items-center gap-1">
                        <span>{key}</span>
                        <input
                          name="GetOrders-orderSide"
                          type="radio"
                          value={Number(OrderSide[key as any])}
                          checked={field.value === Number(OrderSide[key as any])}
                          onChange={(ev) => {
                            if (ev.target.checked) {
                              field.onChange(Number(OrderSide[key as any]));
                            }
                          }}
                        />
                      </label>
                    ))}
                </div>
              )}
            />
          </FormField>
          <FormField label="CreatedAtStart" error={errors.createdAtStart}>
            <Controller
              control={control}
              name="createdAtStart"
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
          <FormField label="CreatedAtEnd" error={errors.createdAtEnd}>
            <Controller
              control={control}
              name="createdAtEnd"
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
      result={result}
      error={error}
    />
  );
}
