import { DecimalOptions, OrderCategory, OrderSide, SubmitSpotOrderInput, SwapV2ExactTokensType } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number, string } from 'yup';
import FormField from '../FormField';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  marketId: string().required(),
  orderSide: number()
    .oneOf(
      Object.keys(OrderSide)
        .filter((v) => !isNaN(Number(v)))
        .map(Number)
    )
    .required(),
  exactTokensType: number()
    .oneOf(
      Object.keys(SwapV2ExactTokensType)
        .filter((v) => !isNaN(Number(v)))
        .map(Number)
    )
    .required(),
  exactTokens: number().required(),
  minOut: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  maxIn: number()
    .nullable()
    .transform((value, original) => (original === '' ? null : value)),
  baseAssetDecimals: number().required(),
  quoteAssetDecimals: number().required()
});

export default function SectionSubmitSpotOrderSwapV2() {
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
    try {
      const req: SubmitSpotOrderInput = {
        marketId: BigInt(input.marketId),
        orderCategory: OrderCategory.SwapOrder,
        swapV2OrderDetails: {
          orderSide: input.orderSide,
          exactTokensType: input.exactTokensType,
          exactTokens: input.exactTokens,
          minOut: input.minOut ?? undefined,
          maxIn: input.maxIn ?? undefined
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
      title="SubmitSpotOrderSwapV2"
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
                          name="SubmitSpotOrderSwapV2-orderSide"
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
          <FormField label="ExactTokensType" error={errors.exactTokensType} required>
            <Controller
              name="exactTokensType"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-3 flex-wrap">
                  {Object.keys(SwapV2ExactTokensType)
                    .filter((v) => isNaN(Number(v)))
                    .map((key) => (
                      <label key={key} className="flex items-center gap-1">
                        <span>{key}</span>
                        <input
                          name="SubmitSpotOrderSwapV2-exactTokensType"
                          type="radio"
                          value={Number(SwapV2ExactTokensType[key as any])}
                          checked={field.value === Number(SwapV2ExactTokensType[key as any])}
                          onChange={(ev) => {
                            if (ev.target.checked) {
                              field.onChange(Number(SwapV2ExactTokensType[key as any]));
                            }
                          }}
                        />
                      </label>
                    ))}
                </div>
              )}
            />
          </FormField>
          <FormField label="ExactTokens" error={errors.exactTokens} required>
            <input type="number" className="input" {...register('exactTokens')} />
          </FormField>
          <FormField label="MinOut" error={errors.minOut}>
            <input type="number" className="input" {...register('minOut')} />
          </FormField>
          <FormField label="MaxIn" error={errors.maxIn}>
            <input type="number" className="input" {...register('maxIn')} />
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
      loading={loading}
      result={result}
      error={error}
    />
  );
}
