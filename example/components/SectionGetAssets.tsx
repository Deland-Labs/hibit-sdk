import { AssetInfo, PageResponse } from '../../src';
import { HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { useState } from 'react';

export default function SectionGetAssets({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<PageResponse<AssetInfo> | null>(null);
  const [error, setError] = useState<string>('');

  const getAssets = async () => {
    setLoading(true);
    setResult(null);
    setError('');
    try {
      setResult(await client.getAssets({}));
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      title="GetAssets"
      form={
        <div>
          <button className="btn" onClick={getAssets} disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </button>
        </div>
      }
      result={result}
      error={error}
    />
  );
}
