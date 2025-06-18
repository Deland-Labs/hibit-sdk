import { ResetProxyKeyInput, Chain, Keypair, WalletSignatureSchema } from '../../../src';
import Section from '../Section';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number } from 'yup';
import FormField from '../FormField';
import ChainSelector from '../ChainSelector';
import { useWalletConnection } from '../../context/WalletConnectionContext';
import WalletConnectionStatus from '../WalletConnectionStatus';
import WalletRequiredOverlay from '../WalletRequiredOverlay';
import { MetaMaskWalletApi, KaswareWalletApi } from '../../../src/wallet-api';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  chain: object().nullable(),
  nonce: string().required('Nonce is required'),
  signatureSchema: number().required('Signature schema is required'),
  proxyPrivateKey: string().required('Proxy private key is required'),
  proxyPublicKey: string().required('Proxy public key is required')
});

export default function SectionResetProxyKey() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [selectedChain, setSelectedChain] = useState<Chain | undefined>();
  const { isConnected, walletType } = useWalletConnection();
  const [loadingNonce, setLoadingNonce] = useState(false);
  const [generatingKeypair, setGeneratingKeypair] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  });

  // Auto-fill fields when wallet is connected
  useEffect(() => {
    if (isConnected && walletType) {
      // Auto-fill chain and signature schema based on wallet type
      let autoChain: Chain | undefined;
      let autoSignatureSchema: WalletSignatureSchema | undefined;

      if (walletType === 'MetaMask') {
        autoChain = Chain.Ethereum;
        autoSignatureSchema = WalletSignatureSchema.EvmEcdsa;
      } else if (walletType === 'Kaspa') {
        autoChain = Chain.Kaspa;
        autoSignatureSchema = WalletSignatureSchema.KaspaSchnorr;
      }

      if (autoChain) {
        setSelectedChain(autoChain);
        setValue('chain', autoChain);
      }

      if (autoSignatureSchema !== undefined) {
        setValue('signatureSchema', autoSignatureSchema);
      }
    }
  }, [isConnected, walletType, setValue]);

  const submit = handleSubmit(async (input) => {
    if (!isConnected) return;

    setLoading(true);
    setResult(null);
    setError('');
    try {
      if (!selectedChain) {
        setError('Please select a chain');
        return;
      }

      // Set the appropriate wallet API based on wallet type
      if (walletType === 'MetaMask') {
        client.setWalletApi(new MetaMaskWalletApi());
      } else if (walletType === 'Kaspa') {
        client.setWalletApi(new KaswareWalletApi());
      } else {
        setError('Unsupported wallet type');
        return;
      }

      const req: ResetProxyKeyInput = {
        chain: selectedChain,
        nonce: BigInt(input.nonce),
        signatureSchema: input.signatureSchema,
        proxyPrivateKey: input.proxyPrivateKey,
        proxyPublicKey: input.proxyPublicKey
      };

      await client.resetProxyKey(req);
      setResult({ success: true, message: 'Proxy key reset successfully' });
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  const handleGetNonce = async () => {
    const currentOptions = client.getOptions();
    if (!currentOptions.hin) {
      setError('HIN is required to get nonce. Please set HIN in client options first.');
      return;
    }

    setLoadingNonce(true);
    try {
      // Use client's default HIN
      const nonce = await client.getNonce();
      setValue('nonce', nonce.toString());
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoadingNonce(false);
    }
  };

  const handleGenerateKeypair = () => {
    setGeneratingKeypair(true);
    try {
      const keypair = Keypair.generate();
      setValue('proxyPrivateKey', keypair.getPrivateKey());
      setValue('proxyPublicKey', keypair.publicKey);
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setGeneratingKeypair(false);
    }
  };

  return (
    <div className="relative">
      <Section
        title="ResetProxyKey"
        titleExtra={<WalletConnectionStatus />}
        form={
          <WalletRequiredOverlay show={!isConnected}>
            <div className="flex flex-col gap-2">
              <FormField label="Chain" required>
                <ChainSelector
                  selectedChain={selectedChain}
                  onChange={setSelectedChain}
                  placeholder="Select Chain"
                  disabled={true} // Always disabled, auto-filled from wallet
                />
              </FormField>
              <FormField label="Nonce" error={errors.nonce} required>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input flex-1"
                    {...register('nonce')}
                    placeholder="Enter current nonce value"
                  />
                  <button
                    type="button"
                    onClick={handleGetNonce}
                    disabled={loadingNonce}
                    className="btn bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 px-3 py-1 text-sm"
                  >
                    {loadingNonce ? 'Loading...' : 'Get'}
                  </button>
                </div>
              </FormField>
              <FormField label="Signature Schema" error={errors.signatureSchema} required>
                <select className="input" {...register('signatureSchema')} disabled={true}>
                  <option value="">Auto-filled from wallet type</option>
                  {Object.keys(WalletSignatureSchema)
                    .filter((v) => isNaN(Number(v)))
                    .map((key) => (
                      <option key={key} value={WalletSignatureSchema[key as keyof typeof WalletSignatureSchema]}>
                        {key}
                      </option>
                    ))}
                </select>
              </FormField>
              <FormField label="Proxy Private Key" error={errors.proxyPrivateKey} required>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input flex-1"
                    {...register('proxyPrivateKey')}
                    placeholder="Generated proxy private key"
                    disabled={true}
                  />
                  <button
                    type="button"
                    onClick={handleGenerateKeypair}
                    disabled={generatingKeypair}
                    className="btn bg-green-500 text-white hover:bg-green-600 disabled:opacity-50 px-3 py-1 text-sm"
                  >
                    {generatingKeypair ? 'Generating...' : 'Generate'}
                  </button>
                </div>
              </FormField>
              <FormField label="Proxy Public Key" error={errors.proxyPublicKey} required>
                <input
                  type="text"
                  className="input"
                  {...register('proxyPublicKey')}
                  placeholder="Generated proxy public key"
                  disabled={true}
                />
              </FormField>
              <button className="btn" onClick={submit} disabled={loading || !isConnected}>
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </WalletRequiredOverlay>
        }
        result={result}
        error={error}
      />
    </div>
  );
}
