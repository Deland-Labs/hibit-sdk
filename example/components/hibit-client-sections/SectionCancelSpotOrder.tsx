import { CancelSpotOrderInput, OrderSide } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string, boolean } from 'yup';
import FormField from '../FormField';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  marketId: string(),
  orderId: string(),
  orderSide: number().oneOf(
    Object.keys(OrderSide)
      .filter((v) => !isNaN(Number(v)))
      .map(Number)
  ),
  isCancelAll: boolean()
});

export default function SectionCancelSpotOrder() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<boolean | null>(null);
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
    const trimMarketId = input.marketId?.trim();
    const trimOrderId = input.orderId?.trim();
    try {
      const req: CancelSpotOrderInput = {
        marketId: trimMarketId ? BigInt(trimMarketId) : undefined,
        orderId: trimOrderId || undefined,
        orderSide: input.orderSide ?? undefined,
        isCancelAll: input.isCancelAll ?? undefined
      };
      await client.cancelSpotOrder(req);
      setResult(true);
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
      setResult(false);
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="CancelSpotOrder"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="MarketId" error={errors.marketId}>
            <input type="number" className="input" {...register('marketId')} />
          </FormField>
          <FormField label="OrderId" error={errors.orderId}>
            <input type="text" className="input" {...register('orderId')} />
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
                          name="CancelSpotOrder-orderSide"
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
          <FormField label="isCancelAll" error={errors.isCancelAll}>
            <label className="flex items-center gap-1">
              <span>IsCancelAll</span>
              <input type="checkbox" className="input" {...register('isCancelAll')} />
            </label>
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
