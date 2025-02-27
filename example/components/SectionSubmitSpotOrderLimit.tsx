import { DecimalOptions, OrderCategory, OrderSide, SubmitSpotOrderInput } from '../../src';
import { HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string } from 'yup';
import FormField from './FormField';

const schema = object({
  marketId: string().required(),
  orderSide: number()
    .oneOf(
      Object.keys(OrderSide)
        .filter((v) => !isNaN(Number(v)))
        .map(Number)
    )
    .required(),
  price: number().required(),
  volume: number().required(),
  baseAssetDecimals: number().required(),
  quoteAssetDecimals: number().required()
});

export default function SectionSubmitSpotOrderLimit({ client }: { client: HibitClient }) {
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
    try {
      const req: SubmitSpotOrderInput = {
        marketId: BigInt(input.marketId),
        orderCategory: OrderCategory.LimitOrder,
        limitOrderDetails: {
          orderSide: input.orderSide,
          price: input.price,
          volume: input.volume
        }
      };
      const decimalOptions: DecimalOptions = {
        baseAssetDecimals: input.baseAssetDecimals,
        quoteAssetDecimals: input.quoteAssetDecimals
      };
      await client.submitSpotOrder(req, decimalOptions);
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
      title="SubmitSpotOrderLimit"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="MarketId" error={errors.marketId} required>
            <input type="number" className="input" {...register('marketId')} />
          </FormField>
          <FormField label="OrderSide" error={errors.orderSide} required>
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
                          name="SubmitSpotOrderLimit-orderSide"
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
          <FormField label="Price" error={errors.price} required>
            <input type="number" className="input" {...register('price')} />
          </FormField>
          <FormField label="Volume" error={errors.volume} required>
            <input type="number" className="input" {...register('volume')} />
          </FormField>
          <FormField label="BaseAssetDecimals" error={errors.baseAssetDecimals} required>
            <input type="number" className="input" {...register('baseAssetDecimals')} />
          </FormField>
          <FormField label="QuoteAssetDecimals" error={errors.quoteAssetDecimals} required>
            <input type="number" className="input" {...register('quoteAssetDecimals')} />
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
