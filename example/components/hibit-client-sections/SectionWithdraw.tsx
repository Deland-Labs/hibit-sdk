import { WithdrawInput, ChainId } from '../../../src';
import { fromSmallestUnit } from '../../../src/utils';
import Section from '../Section';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string, number } from 'yup';
import FormField from '../FormField';
import { useWalletConnection } from '../../context/WalletConnectionContext';
import WalletConnectionStatus from '../WalletConnectionStatus';
import WalletRequiredOverlay from '../WalletRequiredOverlay';
import { MetaMaskWalletApi, KaswareWalletApi } from '../../../src/wallet-api';
import { useClientContext } from '../../context/ClientContext';
import ChainIdSelector from '../ChainIdSelector';
import { BigNumber } from 'bignumber.js';
import { HibitNetwork } from '../../../src';

const schema = object({
  nonce: string().required('Nonce is required'),
  chainId: object().nullable(),
  address: string().required('Address is required'),
  assetId: string().required('Asset ID is required'),
  assetDecimals: number().nullable(),
  amount: number().required('Amount is required'),
  fee: number().nullable()
});

interface SectionWithdrawProps {
  hibitNetwork?: HibitNetwork;
}

export default function SectionWithdraw({ hibitNetwork }: SectionWithdrawProps = {}) {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message?: string; txHash?: string } | null>(null);
  const [error, setErrorState] = useState<string>('');
  const [loadingNonce, setLoadingNonce] = useState(false);
  const [loadingAssetDecimals, setLoadingAssetDecimals] = useState(false);
  const [loadingFee, setLoadingFee] = useState(false);
  const [selectedChainId, setSelectedChainId] = useState<ChainId | undefined>();
  const { isConnected, walletType, walletAddress } = useWalletConnection();
  const [assetDecimalsError, setAssetDecimalsError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    setError,
    clearErrors
  } = useForm({
    resolver: yupResolver(schema)
  });

  const assetIdValue = watch('assetId');
  const amountValue = watch('amount');

  // Auto-fetch asset decimals when asset ID changes
  useEffect(() => {
    const fetchAssetDecimals = async () => {
      if (!assetIdValue || assetIdValue.trim() === '') {
        setValue('assetDecimals', null);
        setAssetDecimalsError('');
        clearErrors('assetDecimals');
        return;
      }

      setLoadingAssetDecimals(true);
      setAssetDecimalsError('');
      clearErrors('assetDecimals');

      try {
        const assetInfos = await client.getAsset({ assetId: BigInt(assetIdValue) });

        if (!assetInfos || assetInfos.length === 0) {
          const errorMsg = 'Invalid asset ID: Asset not found';
          setAssetDecimalsError(errorMsg);
          setError('assetDecimals', { type: 'manual', message: errorMsg });
          setValue('assetDecimals', null);
          return;
        }

        let selectedAsset = assetInfos[0];

        // If multiple assets found and target chain is selected, filter by chain
        if (assetInfos.length > 1 && selectedChainId) {
          const filteredAssets = assetInfos.filter(
            (asset) => asset.chainId && asset.chainId.chain.equals(selectedChainId.chain)
          );

          if (filteredAssets.length > 0) {
            selectedAsset = filteredAssets[0];
          }
        }

        if (selectedAsset?.decimalPlaces !== undefined) {
          setValue('assetDecimals', Number(selectedAsset.decimalPlaces));
        } else {
          const errorMsg = 'Asset decimals information not available';
          setAssetDecimalsError(errorMsg);
          setError('assetDecimals', { type: 'manual', message: errorMsg });
          setValue('assetDecimals', null);
        }
      } catch (e: any) {
        const errorMsg = 'Failed to fetch asset information';
        setAssetDecimalsError(errorMsg);
        setError('assetDecimals', { type: 'manual', message: errorMsg });
        setValue('assetDecimals', null);
        console.warn('Failed to fetch asset decimals:', e.message);
      } finally {
        setLoadingAssetDecimals(false);
      }
    };

    const timeoutId = setTimeout(fetchAssetDecimals, 500); // Debounce API calls
    return () => clearTimeout(timeoutId);
  }, [assetIdValue, selectedChainId, client, setValue, setError, clearErrors]);

  const handleGetNonce = async () => {
    const currentOptions = client.getOptions();
    if (!currentOptions.hin) {
      setErrorState('HIN is required to get nonce. Please set HIN in client options first.');
      return;
    }

    setLoadingNonce(true);
    try {
      // Use client's default HIN
      const nonce = await client.getNonce();
      setValue('nonce', nonce.toString());
    } catch (e: any) {
      setErrorState(e.message ?? JSON.stringify(e));
    } finally {
      setLoadingNonce(false);
    }
  };

  const handleFillWalletAddress = () => {
    if (walletAddress) {
      setValue('address', walletAddress);
    }
  };

  const handleCalculateFee = async () => {
    if (!selectedChainId || !assetIdValue || !amountValue) {
      setErrorState('Please select chain, enter asset ID and amount first');
      return;
    }

    const assetDecimals = watch('assetDecimals');
    if (assetDecimals === null || assetDecimals === undefined) {
      setErrorState('Asset decimals is required to calculate fee');
      return;
    }

    setLoadingFee(true);
    try {
      const feeInfo = await client.getWithdrawFee({
        rootAssetId: BigInt(assetIdValue),
        targetChain: selectedChainId.chain,
        targetNetwork: selectedChainId.network
      });

      if (feeInfo) {
        // Calculate fee using BigNumber to avoid floating point issues
        const feeRateDecimal = fromSmallestUnit(feeInfo.feeRate, feeInfo.rateDecimal);
        const amountBN = new BigNumber(amountValue);
        const feeRateBN = new BigNumber(feeRateDecimal);
        const calculatedFeeBN = amountBN.multipliedBy(feeRateBN);

        // Convert minFee from smallest unit to decimal for comparison
        const minFeeBN = new BigNumber(fromSmallestUnit(feeInfo.minFee, assetDecimals));

        // Use the larger value between calculated fee and minimum fee
        const finalFeeBN = BigNumber.maximum(calculatedFeeBN, minFeeBN);

        setValue('fee', finalFeeBN.toNumber());
        clearErrors('fee');
      }
    } catch (e: any) {
      const errorMsg = 'Failed to calculate fee';
      setErrorState(e.message ?? errorMsg);
      setError('fee', { type: 'manual', message: errorMsg });
    } finally {
      setLoadingFee(false);
    }
  };

  const submit = handleSubmit(async (input) => {
    if (!isConnected) return;

    setLoading(true);
    setResult(null);
    setErrorState('');
    try {
      if (!selectedChainId) {
        setErrorState('Please select a chain');
        return;
      }

      if (input.assetDecimals === null || input.assetDecimals === undefined) {
        setErrorState('Asset decimals is required');
        return;
      }

      // Set the appropriate wallet API based on wallet type
      if (walletType === 'MetaMask') {
        client.setWalletApi(new MetaMaskWalletApi());
      } else if (walletType === 'Kaspa') {
        client.setWalletApi(new KaswareWalletApi());
      } else {
        setErrorState('Unsupported wallet type');
        return;
      }

      const req: WithdrawInput = {
        nonce: BigInt(input.nonce),
        targetChain: selectedChainId.chain,
        targetChainNetwork: selectedChainId.network,
        address: input.address,
        assetId: BigInt(input.assetId),
        assetDecimals: input.assetDecimals,
        amount: input.amount,
        fee: input.fee!
      };

      const txHash = await client.withdraw(req);
      setResult({ success: true, message: 'Withdrawal initiated successfully', txHash });
    } catch (e: any) {
      setErrorState(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  });

  return (
    <div className="relative">
      <Section
        title="Withdraw"
        titleExtra={<WalletConnectionStatus />}
        form={
          <WalletRequiredOverlay show={!isConnected}>
            <div className="flex flex-col gap-2">
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
              <FormField label="Target Chain" required>
                <ChainIdSelector
                  selectedChainIds={selectedChainId ? [selectedChainId] : []}
                  onChange={(chainIds) => setSelectedChainId(chainIds[0])}
                  singleSelect={true}
                  placeholder="Please select target chain"
                  hibitNetwork={hibitNetwork}
                />
              </FormField>
              <FormField label="Address" error={errors.address} required>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="input flex-1"
                    {...register('address')}
                    placeholder="Enter withdrawal address"
                  />
                  <button
                    type="button"
                    onClick={handleFillWalletAddress}
                    disabled={!walletAddress}
                    className="btn bg-purple-500 text-white hover:bg-purple-600 disabled:opacity-50 px-3 py-1 text-sm"
                  >
                    Fill Wallet
                  </button>
                </div>
              </FormField>
              <FormField label="Asset ID" error={errors.assetId} required>
                <input type="text" className="input" {...register('assetId')} />
              </FormField>
              <FormField label="Asset Decimals" error={errors.assetDecimals} required>
                <div className="flex gap-2">
                  <input
                    type="number"
                    className="input flex-1"
                    {...register('assetDecimals')}
                    disabled={true}
                    placeholder="Auto-filled from asset info"
                  />
                  {loadingAssetDecimals && (
                    <div className="flex items-center px-3 py-1 text-sm text-blue-600">Loading...</div>
                  )}
                </div>
                {assetDecimalsError && <div className="text-red-500 text-sm mt-1">{assetDecimalsError}</div>}
              </FormField>
              <FormField label="Amount" error={errors.amount} required>
                <input type="number" step="any" className="input" {...register('amount')} />
              </FormField>
              <FormField label="Fee" error={errors.fee} required>
                <div className="flex gap-2">
                  <input
                    type="number"
                    step="any"
                    className="input flex-1"
                    {...register('fee')}
                    disabled={true}
                    placeholder="Auto-calculated withdrawal fee"
                  />
                  <button
                    type="button"
                    onClick={handleCalculateFee}
                    disabled={loadingFee || !selectedChainId || !assetIdValue || !amountValue}
                    className="btn bg-orange-500 text-white hover:bg-orange-600 disabled:opacity-50 px-3 py-1 text-sm"
                  >
                    {loadingFee ? 'Calculating...' : 'Calculate'}
                  </button>
                </div>
              </FormField>
              <button className="btn" onClick={submit} disabled={loading || !isConnected}>
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </div>
          </WalletRequiredOverlay>
        }
        result={result}
        error={error}
        successMessage={
          result?.success && result?.txHash
            ? `Withdrawal initiated successfully! Transaction Hash: ${result.txHash}`
            : undefined
        }
      />
    </div>
  );
}
