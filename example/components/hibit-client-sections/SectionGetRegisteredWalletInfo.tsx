import { GetRegisteredWalletInfoInput, RegisteredWalletInfo, Chain } from '../../../src';
import Section from '../Section';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import ChainSelector from '../ChainSelector';
import { useWalletConnection } from '../../context/WalletConnectionContext';
import WalletConnectionStatus from '../WalletConnectionStatus';
import WalletRequiredOverlay from '../WalletRequiredOverlay';
import { MetaMaskWalletApi, KaswareWalletApi } from '../../../src/wallet-api';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  publicKey: string(),
  address: string()
});

export default function SectionGetRegisteredWalletInfo() {
  const { client, refreshHin } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<RegisteredWalletInfo | null>(null);
  const [error, setError] = useState<string>('');
  const [selectedChain, setSelectedChain] = useState<Chain | undefined>();
  const [hinUpdatedMessage, setHinUpdatedMessage] = useState<string>('');
  const { isConnected, walletType, walletAddress, walletPublicKey } = useWalletConnection();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
  } = useForm({
    resolver: yupResolver(schema)
  });

  // Auto-fill chain, public key and address when wallet is connected
  useEffect(() => {
    if (isConnected && walletType && walletAddress) {
      // Auto-select chain based on wallet type
      let autoChain: Chain | undefined;

      if (walletType === 'MetaMask') {
        autoChain = Chain.Ethereum;
        // MetaMask uses address, clear public key
        setValue('address', walletAddress);
        setValue('publicKey', '');
      } else if (walletType === 'Kaspa') {
        autoChain = Chain.Kaspa;
        // Kaspa fills both address and public key
        setValue('address', walletAddress);
        if (walletPublicKey) {
          setValue('publicKey', walletPublicKey);
        }
      }

      if (autoChain) {
        setSelectedChain(autoChain);
      }
    }
  }, [isConnected, walletType, walletAddress, walletPublicKey, setValue]);

  const submit = handleSubmit(async (input) => {
    if (!isConnected) return;

    setLoading(true);
    setResult(null);
    setError('');
    setHinUpdatedMessage('');
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

      const req: GetRegisteredWalletInfoInput = {
        chain: selectedChain,
        publicKey: input.publicKey || undefined,
        address: input.address || undefined
      };
      const walletInfo = await client.getRegisteredWalletInfo(req);
      setResult(walletInfo);

      // Update client's HIN and refresh context
      if (walletInfo?.hin) {
        const currentOptions = client.getOptions();
        client.setOptions({
          ...currentOptions,
          hin: walletInfo.hin
        });
        refreshHin(); // Notify all components that HIN has been updated
        setHinUpdatedMessage('The HIN value in client options has been updated.');
      }
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="relative">
      <Section
        title="GetRegisteredWalletInfo"
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
              <FormField label="Public Key" error={errors.publicKey}>
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
              <FormField label="Address" error={errors.address}>
                <input
                  type="text"
                  className="input"
                  {...register('address')}
                  disabled={true} // Always disabled, auto-filled from wallet
                  placeholder={
                    !isConnected ? 'Will be auto-filled when wallet is connected' : 'Auto-filled from connected wallet'
                  }
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
        successMessage={hinUpdatedMessage}
      />
    </div>
  );
}
