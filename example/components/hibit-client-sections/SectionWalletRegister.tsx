import { WalletRegisterInput, Chain, WalletSignatureSchema } from '../../../src';
import Section from '../Section';
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
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
  chain: number().nullable(),
  publicKey: string(),
  signatureSchema: number().required('Signature schema is required')
});

export default function SectionWalletRegister() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string>('');
  const [selectedChain, setSelectedChain] = useState<Chain | undefined>();
  const { isConnected, walletType, walletAddress, walletPublicKey } = useWalletConnection();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  });

  // Auto-fill chain and public key when wallet is connected
  useEffect(() => {
    if (isConnected && walletType && walletAddress) {
      // Auto-select chain based on wallet type
      let autoChain: Chain | undefined;
      let autoSignatureSchema: WalletSignatureSchema | undefined;

      if (walletType === 'MetaMask') {
        autoChain = Chain.Ethereum;
        autoSignatureSchema = WalletSignatureSchema.EvmEcdsa;
        // MetaMask doesn't need public key, clear it
        setValue('publicKey', '');
      } else if (walletType === 'Kaspa') {
        autoChain = Chain.Kaspa;
        autoSignatureSchema = WalletSignatureSchema.KaspaSchnorr;
        // Auto-fill public key for Kaspa wallets
        if (walletPublicKey) {
          setValue('publicKey', walletPublicKey);
        }
      }
      // TODO: Handle other wallet types if needed

      if (autoChain) {
        setSelectedChain(autoChain);
      }

      if (autoSignatureSchema !== undefined) {
        setValue('signatureSchema', autoSignatureSchema);
      }
    }
  }, [isConnected, walletType, walletAddress, walletPublicKey, setValue]);

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

      const req: WalletRegisterInput = {
        chain: selectedChain,
        publicKey: input.publicKey || undefined,
        SignatureSchema: input.signatureSchema
      };

      await client.walletRegister(req);
      setResult({ success: true, message: 'Wallet registered successfully' });
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="relative">
      <Section
        title="WalletRegister"
        titleExtra={<WalletConnectionStatus />}
        form={
          <WalletRequiredOverlay show={!isConnected}>
            <div className="flex flex-col gap-2">
              <FormField label="Chain" error={errors.chain} required>
                <ChainSelector
                  selectedChain={selectedChain}
                  onChange={(chain) => {
                    setSelectedChain(chain);
                  }}
                  placeholder="Select Chain"
                  disabled={true} // Always disabled, auto-filled from wallet
                />
              </FormField>
              <FormField label="Public Key (optional)" error={errors.publicKey}>
                <input
                  type="text"
                  className="input"
                  {...register('publicKey')}
                  disabled={true} // Always disabled, auto-filled from wallet
                  placeholder={
                    !isConnected
                      ? 'Will be auto-filled when wallet is connected'
                      : walletType === 'MetaMask'
                        ? 'Not required for MetaMask'
                        : 'Auto-filled from connected wallet'
                  }
                />
              </FormField>
              <FormField label="Signature Schema" error={errors.signatureSchema} required>
                <Controller
                  name="signatureSchema"
                  control={control}
                  render={({ field }) => (
                    <select className="input" {...field} disabled={true}>
                      {' '}
                      {/* Always disabled, auto-filled from wallet */}
                      <option value="">
                        {!isConnected
                          ? 'Will be auto-filled when wallet is connected'
                          : 'Auto-filled from connected wallet'}
                      </option>
                      {Object.keys(WalletSignatureSchema)
                        .filter((v) => isNaN(Number(v)))
                        .map((key) => (
                          <option key={key} value={WalletSignatureSchema[key as keyof typeof WalletSignatureSchema]}>
                            {key}
                          </option>
                        ))}
                    </select>
                  )}
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
