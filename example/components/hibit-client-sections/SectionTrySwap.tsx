import { TrySwapInput, TrySwapResult, OrderSide, SwapV2ExactTokensType } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number } from 'yup';
import FormField from '../FormField';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  marketId: string().required('Market ID is required'),
  exactTokensType: number().required('Exact tokens type is required'),
  exactTokens: string().required('Exact tokens is required'),
  side: number().required('Side is required'),
  minOut: string(),
  minIn: string()
});

export default function SectionTrySwap() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrySwapResult | null>(null);
  const [error, setError] = useState<string>('');

  const {
    register,
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
      const req: TrySwapInput = {
        marketId: BigInt(input.marketId),
        exactTokensType: input.exactTokensType as SwapV2ExactTokensType,
        exactTokens: BigInt(input.exactTokens),
        side: input.side as OrderSide,
        minOut: input.minOut ? BigInt(input.minOut) : undefined,
        minIn: input.minIn ? BigInt(input.minIn) : undefined
      };

      setResult(await client.trySwap(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="TrySwap"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="Market ID" error={errors.marketId} required>
            <input type="text" className="input" {...register('marketId')} placeholder="Enter market ID" />
          </FormField>
          <FormField label="Exact Tokens Type" error={errors.exactTokensType} required>
            <select className="input" {...register('exactTokensType')}>
              <option value="">Select exact tokens type</option>
              <option value={SwapV2ExactTokensType.Source}>Source (what you provide)</option>
              <option value={SwapV2ExactTokensType.Target}>Target (what you want to receive)</option>
            </select>
          </FormField>
          <FormField label="Exact Tokens" error={errors.exactTokens} required>
            <input type="text" className="input" {...register('exactTokens')} placeholder="Enter exact tokens amount" />
          </FormField>
          <FormField label="Side" error={errors.side} required>
            <select className="input" {...register('side')}>
              <option value="">Select order side</option>
              <option value={OrderSide.Ask}>Ask (sell)</option>
              <option value={OrderSide.Bid}>Bid (buy)</option>
            </select>
          </FormField>
          <FormField label="Min Out (optional)" error={errors.minOut}>
            <input type="text" className="input" {...register('minOut')} placeholder="Minimum output amount" />
          </FormField>
          <FormField label="Min In (optional)" error={errors.minIn}>
            <input type="text" className="input" {...register('minIn')} placeholder="Minimum input amount" />
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
