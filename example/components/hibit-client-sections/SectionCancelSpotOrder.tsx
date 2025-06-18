import { CancelSpotOrderInput, OrderSide } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string, boolean } from 'yup';
import FormField from '../FormField';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  marketId: string().optional(),
  orderId: string().optional(),
  orderSide: number()
    .oneOf(
      Object.keys(OrderSide)
        .filter((v) => !isNaN(Number(v)))
        .map(Number)
    )
    .optional(),
  isCancelAll: boolean().optional()
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
          <div className="text-sm text-gray-600 mb-2">
            Choose one cancellation method:
            <ul className="list-disc ml-5 mt-1">
              <li>Cancel by Order ID only</li>
              <li>Cancel by Market ID + Order Side</li>
              <li>Cancel all by Market ID + Cancel All flag</li>
            </ul>
          </div>
          <FormField label="OrderId (for single order cancellation)" error={errors.orderId}>
            <input type="text" className="input" {...register('orderId')} placeholder="Order ID to cancel" />
          </FormField>
          <FormField label="MarketId (for market-based cancellation)" error={errors.marketId}>
            <input type="number" className="input" {...register('marketId')} placeholder="Market ID" />
          </FormField>
          <FormField label="OrderSide (when cancelling by market + side)" error={errors.orderSide}>
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
          <FormField label="Cancel All (when cancelling all orders in market)" error={errors.isCancelAll}>
            <label className="flex items-center gap-1">
              <span>Cancel All Orders</span>
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
