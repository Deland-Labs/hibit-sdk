import { AssetWithdrawFeeInfo, GetWithdrawFeeInfoInput, ChainId } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import ChainIdSelector from '../ChainIdSelector';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  rootAssetId: string().required('Root Asset ID is required'),
  chainIds: object().nullable()
});

export default function SectionGetWithdrawFee() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AssetWithdrawFeeInfo | null>(null);
  const [error, setError] = useState<string>('');
  const [selectedChainIds, setSelectedChainIds] = useState<ChainId[]>([]);

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
      if (selectedChainIds.length === 0) {
        setError('Please select a chain');
        return;
      }

      const chainId = selectedChainIds[0]; // Use the first (and only) selected chain
      const req: GetWithdrawFeeInfoInput = {
        rootAssetId: BigInt(input.rootAssetId),
        targetChain: chainId.chain,
        targetNetwork: chainId.network
      };
      setResult(await client.getWithdrawFee(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <Section
      title="GetWithdrawFee"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="Root Asset ID" error={errors.rootAssetId} required>
            <input type="number" className="input" {...register('rootAssetId')} />
          </FormField>
          <FormField label="Chain ID" error={errors.chainIds} required>
            <ChainIdSelector
              selectedChainIds={selectedChainIds}
              onChange={setSelectedChainIds}
              singleSelect={true}
              placeholder="Select a target chain"
            />
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
