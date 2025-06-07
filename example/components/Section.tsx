interface SectionProps {
  title: string;
  titleExtra?: React.ReactNode;
  form?: React.ReactNode;
  result?: any;
  error?: string;
  loading?: boolean;
  successMessage?: string;
  'data-section'?: string;
}

export default function Section({
  title,
  titleExtra,
  form,
  result,
  error,
  loading,
  successMessage,
  'data-section': dataSection
}: SectionProps) {
  // Custom serializer to handle BigInt values
  const serializeResult = (obj: any): string => {
    return JSON.stringify(
      obj,
      (_key, value) => {
        if (typeof value === 'bigint') {
          return value.toString();
        }
        return value;
      },
      2
    );
  };

  return (
    <div className="border rounded p-4" data-section={dataSection}>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {titleExtra && <div className="mb-4 pb-2 border-b border-gray-200">{titleExtra}</div>}
      {form && <div className="mb-4">{form}</div>}
      {loading && <div className="text-blue-500">Loading...</div>}
      {error && <div className="text-red-500 bg-red-50 p-2 rounded">{error}</div>}
      {successMessage && (
        <div className="text-green-700 bg-green-50 p-2 rounded border border-green-200 mb-2">{successMessage}</div>
      )}
      {result && (
        <div className="mt-4">
          <h3 className="font-semibold mb-2">Result:</h3>
          <pre className="bg-gray-100 p-2 rounded overflow-auto text-sm">{serializeResult(result)}</pre>
        </div>
      )}
    </div>
  );
}
