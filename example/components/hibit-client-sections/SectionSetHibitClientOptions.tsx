import { HibitNetwork } from '../../../src';
import { HibitApiOptions } from '../../../src/hibit-client';
import Section from '../Section';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import FormField from '../FormField';
import { useEffect, useRef } from 'react';
import { useWalletConnection } from '../../context/WalletConnectionContext';
import { useClientContext } from '../../context/ClientContext';

const schema = object({
  network: string().oneOf(Object.values(HibitNetwork).map(String)).required(),
  hin: string().required(),
  proxyKey: string().required()
});

export default function SectionSetHibitClientOptions({ defaultOptions }: { defaultOptions: HibitApiOptions }) {
  const {
    isConnected: walletConnected,
    walletType,
    walletAddress,
    connecting: walletConnecting,
    connectionError,
    connectMetaMask,
    connectKaspa,
    disconnectWallet
  } = useWalletConnection();

  const { client, hinValue, refreshHin } = useClientContext();
  const isUpdatingFromContext = useRef(false);

  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      network: defaultOptions.network,
      hin: defaultOptions.hin?.toString() ?? '',
      proxyKey: defaultOptions.proxyKey
    },
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  // Update HIN when context HIN changes (but avoid triggering client update)
  useEffect(() => {
    if (hinValue) {
      isUpdatingFromContext.current = true;
      setValue('hin', hinValue.toString());
      setTimeout(() => {
        isUpdatingFromContext.current = false;
      }, 0);
    }
  }, [hinValue, setValue]);

  const formValues = watch();

  useEffect(() => {
    if (isValid && formValues.hin && formValues.proxyKey && !isUpdatingFromContext.current) {
      client.setOptions({
        network: formValues.network as HibitNetwork,
        hin: BigInt(formValues.hin),
        proxyKey: formValues.proxyKey
      });
      refreshHin();
    }
  }, [formValues, isValid, client, refreshHin]);

  return (
    <Section
      title="Hibit Client Options Config"
      data-section="hibit-client-options"
      form={
        <div className="flex flex-col gap-2">
          {/* Wallet Connection Section */}
          <div className="border rounded p-3 bg-gray-50">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Wallet Connection</span>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${walletConnected ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm">{walletConnected ? 'Connected' : 'Disconnected'}</span>
              </div>
            </div>

            {walletConnected ? (
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Wallet Type: </span>
                  <span className="text-blue-600">{walletType}</span>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Address: </span>
                  <span className="font-mono break-all">{walletAddress}</span>
                </div>
                <button
                  type="button"
                  onClick={disconnectWallet}
                  className="btn bg-red-500 text-white hover:bg-red-600 w-fit"
                >
                  Disconnect Wallet
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600 mb-2">Choose a wallet to connect:</div>
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={connectMetaMask}
                    disabled={walletConnecting}
                    className="btn bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 flex items-center gap-2"
                  >
                    {walletConnecting ? 'Connecting...' : 'MetaMask'}
                  </button>
                  <button
                    type="button"
                    onClick={connectKaspa}
                    disabled={walletConnecting}
                    className="btn bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50 flex items-center gap-2"
                  >
                    {walletConnecting ? 'Connecting...' : 'Kasware'}
                  </button>
                </div>
                {connectionError && <div className="text-red-500 text-sm">{connectionError}</div>}
              </div>
            )}
          </div>

          <FormField label="Network" error={errors.network} required>
            <Controller
              name="network"
              control={control}
              render={({ field }) => (
                <div className="flex items-center gap-3 flex-wrap">
                  {Object.values(HibitNetwork).map((v) => (
                    <label key={v} className="flex items-center gap-1">
                      <span>{v}</span>
                      <input
                        name="network"
                        type="radio"
                        checked={field.value === v}
                        onChange={(ev) => {
                          if (ev.target.checked) {
                            field.onChange(v);
                          }
                        }}
                      />
                    </label>
                  ))}
                </div>
              )}
            />
          </FormField>
          <FormField label="HIN" error={errors.hin} required>
            <input type="number" className="input" {...register('hin')} />
          </FormField>
          <FormField label="Proxy Key" error={errors.proxyKey} required>
            <input type="text" className="input" {...register('proxyKey')} />
          </FormField>
          <div className="flex items-center gap-2">
            <a
              href="https://docs.hibit.app/developers/getting-your-proxy-key"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              How to get your HIN and Proxy Key?
            </a>
          </div>
        </div>
      }
      error={''}
    />
  );
}
