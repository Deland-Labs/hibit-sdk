import { ChainId, SwapInput } from '../../../src';
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
  hin: string().required(),
  sourceWalletPublicKey: string().required(),
  sourceWalletAddress: string().required(),
  sourceChainId: string().required(),
  sourceAssetType: number(),
  sourceAsset: string(),
  sourceVolume: number().required(),
  txRef: string().required(),
  targetChainId: string(),
  targetWalletAddress: string(),
  targetAssetType: number(),
  targetAsset: string(),
  targetVolume: number().required(),
  targetVolumeMin: number().required()
});

export default function SectionGetPaymentAddress({ client }: { client: BrokerClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const {
    setValue,
    trigger,
    watch,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
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
      const req = new SwapInput({
        hin: BigInt(input.hin),
        sourceWalletPublicKey: input.sourceWalletPublicKey,
        sourceWalletAddress: input.sourceWalletAddress,
        txRef: input.txRef,
        sourceChainId: ChainId.fromString(input.sourceChainId),
        sourceAssetType: input.sourceAssetType,
        sourceAsset: input.sourceAsset,
        sourceVolume: BigInt(input.sourceVolume),
        targetChainId: input.targetChainId ? ChainId.fromString(input.targetChainId) : undefined,
        targetAssetType: input.targetAssetType,
        targetAsset: input.targetAsset,
        targetVolume: BigInt(input.targetVolume),
        targetVolumeMin: BigInt(input.targetVolumeMin)
      });
      setResult(await client.swap(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="Swap"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="HIN" error={errors.hin} required>
            <input type="number" className="input" {...register('hin')} />
          </FormField>
          <FormField label="Source Wallet Public Key" error={errors.sourceWalletPublicKey} required>
            <input type="text" className="input" {...register('sourceWalletPublicKey')} />
          </FormField>
          <FormField label="Source Wallet Address" error={errors.sourceWalletAddress} required>
            <input type="text" className="input" {...register('sourceWalletAddress')} />
          </FormField>
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
          <FormField label="Source Asset Type" error={errors.sourceAssetType}>
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
          <FormField label="Transaction Reference" error={errors.txRef} required>
            <input type="text" className="input" {...register('txRef')} />
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
          <FormField label="Target Asset Type" error={errors.targetAssetType}>
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
          <FormField label="Target Volume" error={errors.targetVolume} required>
            <input type="number" className="input" {...register('targetVolume')} />
          </FormField>
          <FormField label="Target Volume Min" error={errors.targetVolumeMin} required>
            <input type="number" className="input" {...register('targetVolumeMin')} />
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
