import { GetProxyKeyInput, ProxyKeypair, WalletSignatureSchema, Chain } from '../../../src';
import Section from '../Section';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, number } from 'yup';
import FormField from '../FormField';
import { useWalletConnection } from '../../context/WalletConnectionContext';
import WalletConnectionStatus from '../WalletConnectionStatus';
import WalletRequiredOverlay from '../WalletRequiredOverlay';
import { MetaMaskWalletApi, KaswareWalletApi } from '../../../src/wallet-api';
import { useClientContext } from '../../context/ClientContext';
import ChainSelector from '../ChainSelector';

const schema = object({
  chain: object().nullable(),
  signatureSchema: number().required('Signature schema is required'),
  timestamp: number().required('Timestamp is required')
});

export default function SectionGetProxyKeypair() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ProxyKeypair | null>(null);
  const [error, setError] = useState<string>('');
  const [isInitialized, setIsInitialized] = useState(false);
  const [selectedChain, setSelectedChain] = useState<Chain | undefined>();
  const { isConnected, walletType } = useWalletConnection();

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
    if (isConnected && walletType && !isInitialized) {
      // Auto-fill chain based on wallet type
      let autoChain: Chain | undefined;
      if (walletType === 'MetaMask') {
        autoChain = Chain.Ethereum;
      } else if (walletType === 'Kaspa') {
        autoChain = Chain.Kaspa;
      }

      if (autoChain) {
        setSelectedChain(autoChain);
        setValue('chain', autoChain);
      }

      // Auto-fill signature schema based on wallet type
      let signatureSchema: WalletSignatureSchema;
      if (walletType === 'MetaMask') {
        signatureSchema = WalletSignatureSchema.EvmEcdsa;
      } else if (walletType === 'Kaspa') {
        signatureSchema = WalletSignatureSchema.KaspaSchnorr;
      } else {
        return;
      }
      setValue('signatureSchema', signatureSchema);

      // Set initial timestamp only once
      setValue('timestamp', Date.now());
      setIsInitialized(true);
    }
  }, [isConnected, walletType, setValue, isInitialized]);

  const submit = handleSubmit(async (input) => {
    if (!isConnected) return;

    setLoading(true);
    setResult(null);
    setError('');
    try {
      // Set the appropriate wallet API based on wallet type
      if (walletType === 'MetaMask') {
        client.setWalletApi(new MetaMaskWalletApi());
      } else if (walletType === 'Kaspa') {
        client.setWalletApi(new KaswareWalletApi());
      } else {
        setError('Unsupported wallet type');
        return;
      }

      const currentTimestamp = Date.now();
      const req: GetProxyKeyInput = {
        chain: selectedChain!,
        signatureSchema: input.signatureSchema,
        timestamp: currentTimestamp
      };

      setResult(await client.getProxyKeypair(req));

      // Update the displayed timestamp after successful submission
      setValue('timestamp', currentTimestamp);
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="relative">
      <Section
        title="GetProxyKeypair"
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
              <FormField label="Timestamp (nanoseconds)" error={errors.timestamp} required>
                <input
                  type="number"
                  className="input"
                  {...register('timestamp')}
                  disabled={true} // Always disabled, auto-updated before submission
                  placeholder="Auto-updated before submission"
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
