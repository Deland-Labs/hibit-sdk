import { HibitClient } from '../../src/hibit-client';
import Section from './Section';
import { useState } from 'react';

export default function SectionGetTimestamp({ client }: { client: HibitClient }) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState<string>('');

  const submit = async () => {
    setLoading(true);
    setResult(null);
    setError('');
    try {
      setResult(await client.getTimestamp());
    } catch (e: any) {
      setError(e.message ?? JSON.stringify(e));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section
      title="GetTimestamp"
      form={
        <div>
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
