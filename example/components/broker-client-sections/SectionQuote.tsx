import { ChainId, QuoteInput, QuoteResult } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { number, object, string } from 'yup';
import FormField from '../FormField';
import ChainIdSelector from '../ChainIdSelector';
import { BrokerClient } from '../../../src/broker-client';
import AssetTypeSelector from '../AssetTypeSelector';

const schema = object({
  sourceChainId: string().required(),
  sourceAssetType: number().required(),
  sourceAsset: string(),
  sourceVolume: string().required(),
  targetChainId: string(),
  targetAssetType: number().required(),
  targetAsset: string()
});

export default function SectionQuote({ client }: { client: BrokerClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<QuoteResult | null>(null);
  const [error, setError] = useState<string>('');

  const {
    setValue,
    trigger,
    watch,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      sourceChainId: '',
      sourceAssetType: undefined,
      sourceAsset: '',
      sourceVolume: '',
      targetChainId: '',
      targetAssetType: undefined,
      targetAsset: ''
    }
  });
  const selectedSourceChainId = watch('sourceChainId');
  const selectedSourceAssetType = watch('sourceAssetType');
  const selectedTargetChainId = watch('targetChainId');
  const selectedTargetAssetType = watch('targetAssetType');

  const submit = handleSubmit(async (input) => {
    setLoading(true);
    setResult(null);
    setError('');
    try {
      const req: QuoteInput = {
        sourceChainId: ChainId.fromString(input.sourceChainId),
        sourceAssetType: input.sourceAssetType,
        sourceAsset: input.sourceAsset,
        sourceVolume: BigInt(input.sourceVolume),
        targetChainId: input.targetChainId ? ChainId.fromString(input.targetChainId) : undefined,
        targetAssetType: input.targetAssetType,
        targetAsset: input.targetAsset
      };
      setResult(await client.quote(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="Quote"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="Source ChainId" error={errors.sourceChainId} required>
            <ChainIdSelector
              singleSelect
              selectedChainIds={selectedSourceChainId ? [ChainId.fromString(selectedSourceChainId)] : []}
              onChange={(ids) => {
                setValue('sourceChainId', ids[0]?.toString() ?? '');
                trigger('sourceChainId');
              }}
            />
          </FormField>
          <FormField label="Source Asset Type" error={errors.sourceAssetType} required>
            <AssetTypeSelector
              singleSelect
              selectedAssetTypes={typeof selectedSourceAssetType === 'number' ? [selectedSourceAssetType] : []}
              onChange={(types) => {
                setValue('sourceAssetType', types[0] ?? null);
                trigger('sourceAssetType');
              }}
            />
          </FormField>
          <FormField label="Source Asset" error={errors.sourceAsset}>
            <input type="text" className="input" {...register('sourceAsset')} />
          </FormField>
          <FormField label="Source Volume" error={errors.sourceVolume} required>
            <input type="number" className="input" {...register('sourceVolume')} />
          </FormField>
          <FormField label="Target ChainId" error={errors.targetChainId}>
            <ChainIdSelector
              singleSelect
              selectedChainIds={selectedTargetChainId ? [ChainId.fromString(selectedTargetChainId)] : []}
              onChange={(ids) => {
                setValue('targetChainId', ids[0]?.toString() ?? '');
                trigger('targetChainId');
              }}
            />
          </FormField>
          <FormField label="Target Asset Type" error={errors.targetAssetType} required>
            <AssetTypeSelector
              singleSelect
              selectedAssetTypes={typeof selectedTargetAssetType === 'number' ? [selectedTargetAssetType] : []}
              onChange={(types) => {
                setValue('targetAssetType', types[0] ?? null);
                trigger('targetAssetType');
              }}
            />
          </FormField>
          <FormField label="Target Asset" error={errors.targetAsset}>
            <input type="text" className="input" {...register('targetAsset')} />
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
