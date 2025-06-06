import { ChainInfo } from '../../../src';
import Section from '../Section';
import { useState } from 'react';
import { useClientContext } from '../../context/ClientContext';

export default function SectionGetChains() {
  const { client } = useClientContext();
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Array<ChainInfo> | null>(null);
  const [error, setError] = useState<string>('');

  const submit = async () => {
    setLoading(true);
    setResult(null);
    setError('');
    try {
      setResult(await client.getChains());
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      title="GetChains"
      form={
        <div>
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
