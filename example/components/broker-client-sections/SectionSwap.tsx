import { Chain, ChainAssetType, ChainId, HibitNetwork, SwapInput, WalletSignatureSchema } from '../../../src';
import Section from '../Section';
import { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { number, object, string } from 'yup';
import FormField from '../FormField';
import ChainIdSelector from '../ChainIdSelector';
import { BrokerClient } from '../../../src/broker-client';
import AssetTypeSelector from '../AssetTypeSelector';
import { connect, sign, transferKaspa, transferKrc20 } from '../../utils/kasware-wallet';

const schema = object({
  hin: string().required(),
  sourceWalletPublicKey: string().required(),
  sourceWalletAddress: string().required(),
  sourceChainId: string().required(),
  sourceAssetType: number(),
  sourceAsset: string(),
  paymentAddress: string().required(),
  sourceVolume: number().required(),
  txRef: string().required(),
  targetChainId: string(),
  targetWalletAddress: string(),
  targetAssetType: number(),
  targetAsset: string(),
  targetVolume: number().required(),
  targetVolumeMin: number().required(),
  signatureSchema: number().required(),
  signature: string().required()
});

export default function SectionGetPaymentAddress({ client }: { client: BrokerClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string>('');

  const {
    control,
    setValue,
    trigger,
    watch,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });
  const values = watch();

  const kaswareTransferable = useMemo(() => {
    if (!values.sourceChainId) {
      return false;
    }
    const chainId = ChainId.fromString(values.sourceChainId);
    const assetType = values.sourceAssetType;
    const isKaspa = chainId.chain.equals(Chain.Kaspa);
    const isNative = !assetType || assetType === ChainAssetType.Native;
    const isKrc20 = assetType === ChainAssetType.KRC20;
    return isKaspa && (isNative || isKrc20);
  }, [values.sourceChainId, values.sourceAssetType]);

  const getInputReq = (input: any) => {
    return new SwapInput({
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
  };

  const copySignatureMessage = () => {
    try {
      const req = getInputReq(values);
      const message = req.toJson();
      navigator.clipboard.writeText(message);
      alert('Signature message copied to clipboard');
    } catch (e: any) {
      alert(e.message ?? JSON.stringify(e));
    }
  };

  const submit = handleSubmit(async (input) => {
    setLoading(true);
    setResult(null);
    setError('');
    try {
      const req = getInputReq(input);
      req.setSignature(input.signature, input.signatureSchema);
      setResult(await client.swap(req));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  const connectKasware = async () => {
    try {
      const network = client.getOptions().network;
      const { address, publicKey } = await connect(
        network === HibitNetwork.Testnet ? 'kaspa_testnet_10' : 'kaspa_mainnet'
      );
      setValue('sourceWalletAddress', address);
      setValue('sourceWalletPublicKey', publicKey);
      trigger('sourceWalletAddress');
      trigger('sourceWalletPublicKey');
    } catch (e: any) {
      alert(e.message ?? JSON.stringify(e));
    }
  };

  const transferByKasware = async () => {
    try {
      let txRef = '';
      if (values.sourceAssetType === ChainAssetType.KRC20) {
        if (!values.paymentAddress || !values.sourceAsset || !values.sourceVolume) {
          throw new Error('paymentAddress, sourceAsset and sourceVolume are required for KRC20 transfer');
        }
        txRef = await transferKrc20(values.paymentAddress, values.sourceVolume, values.sourceAsset);
      } else {
        if (!values.paymentAddress || !values.sourceVolume) {
          throw new Error('paymentAddress and sourceVolume are required for KAS transfer');
        }
        txRef = await transferKaspa(values.paymentAddress, values.sourceVolume);
      }
      setValue('txRef', txRef);
      trigger('txRef');
    } catch (e: any) {
      alert(e.message ?? JSON.stringify(e));
    }
  };

  const signByKasware = async () => {
    try {
      const req = getInputReq(values);
      const message = req.toJson();
      const signature = await sign(message);
      setValue('signature', signature);
      setValue('signatureSchema', WalletSignatureSchema.KaspaSchnorr);
      trigger('signature');
      trigger('signatureSchema');
    } catch (e: any) {
      alert(e.message ?? JSON.stringify(e));
    }
  };

  return (
    <Section
      title="Swap"
      form={
        <div className="flex flex-col gap-2">
          <FormField label="HIN" error={errors.hin} required>
            <input type="number" className="input" {...register('hin')} />
          </FormField>

          <div className="py-4 px-4 -mx-4 flex flex-col gap-2 bg-gray-100">
            <FormField label="Source Wallet Public Key" error={errors.sourceWalletPublicKey} required>
              <input type="text" className="input" {...register('sourceWalletPublicKey')} />
            </FormField>
            <FormField label="Source Wallet Address" error={errors.sourceWalletAddress} required>
              <input type="text" className="input" {...register('sourceWalletAddress')} />
            </FormField>
            <button className="btn-outline text-green-500" onClick={connectKasware}>
              Connect Kasware Wallet
            </button>
          </div>

          <FormField label="Source ChainId" error={errors.sourceChainId} required>
            <ChainIdSelector
              singleSelect
              selectedChainIds={values.sourceChainId ? [ChainId.fromString(values.sourceChainId)] : []}
              onChange={(ids) => {
                setValue('sourceChainId', ids[0]?.toString() ?? '');
                trigger('sourceChainId');
              }}
            />
          </FormField>
          <FormField label="Source Asset Type" error={errors.sourceAssetType}>
            <AssetTypeSelector
              singleSelect
              selectedAssetTypes={typeof values.sourceAssetType === 'number' ? [values.sourceAssetType] : []}
              onChange={(types) => {
                setValue('sourceAssetType', types[0] ?? null);
                trigger('sourceAssetType');
              }}
            />
          </FormField>
          <FormField label="Source Asset" error={errors.sourceAsset}>
            <input type="text" className="input" {...register('sourceAsset')} />
          </FormField>
          <FormField label="Payment Address" error={errors.paymentAddress} required>
            <input type="text" className="input" {...register('paymentAddress')} />
          </FormField>
          <FormField label="Source Volume" error={errors.sourceVolume} required>
            <input type="number" className="input" {...register('sourceVolume')} />
          </FormField>

          <div className="py-4 px-4 -mx-4 flex flex-col gap-2 bg-gray-100">
            <FormField label="Transaction Reference" error={errors.txRef} required>
              <input type="text" className="input" {...register('txRef')} />
            </FormField>
            <button className="btn-outline text-green-500" onClick={transferByKasware} disabled={!kaswareTransferable}>
              Transfer using Kasware Wallet
            </button>
          </div>

          <FormField label="Target ChainId" error={errors.targetChainId}>
            <ChainIdSelector
              singleSelect
              selectedChainIds={values.targetChainId ? [ChainId.fromString(values.targetChainId)] : []}
              onChange={(ids) => {
                setValue('targetChainId', ids[0]?.toString() ?? '');
                trigger('targetChainId');
              }}
            />
          </FormField>
          <FormField label="Target Asset Type" error={errors.targetAssetType}>
            <AssetTypeSelector
              singleSelect
              selectedAssetTypes={typeof values.targetAssetType === 'number' ? [values.targetAssetType] : []}
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

          <div className="py-4 px-4 -mx-4 flex flex-col gap-2 bg-gray-100">
            <FormField label="Signature Schema" error={errors.signatureSchema} required>
              <Controller
                name="signatureSchema"
                control={control}
                render={({ field }) => (
                  <div className="flex items-center gap-3 flex-wrap">
                    {Object.keys(WalletSignatureSchema)
                      .filter((v) => isNaN(Number(v)))
                      .map((key) => (
                        <label key={key} className="flex items-center gap-1">
                          <span>{key}</span>
                          <input
                            name="swap-signatureSchema"
                            type="radio"
                            checked={field.value === Number(WalletSignatureSchema[key as any])}
                            onChange={(ev) => {
                              if (ev.target.checked) {
                                field.onChange(Number(WalletSignatureSchema[key as any]));
                              }
                            }}
                          />
                        </label>
                      ))}
                  </div>
                )}
              />
            </FormField>
            <FormField label="Signature" error={errors.signature} required>
              <input type="text" className="input" {...register('signature')} />
            </FormField>
            <div className="flex items-center gap-4">
              <button className="flex-1 btn-outline text-gray-500" onClick={copySignatureMessage}>
                Copy message to sign
              </button>
              <button className="flex-1 btn-outline text-green-500" onClick={signByKasware}>
                Sign using Kasware Wallet
              </button>
            </div>
          </div>

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
