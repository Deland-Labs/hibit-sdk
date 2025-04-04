import { FC, PropsWithChildren, ReactNode } from 'react';

const Section: FC<
  PropsWithChildren<{ title: string; form: ReactNode; loading?: boolean; result?: any; error: string }>
> = ({ title, form, loading, result, error }) => {
  return (
    <section>
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="flex mt-2 border rounded-lg overflow-hidden">
        <div className={`${typeof result !== 'undefined' ? 'max-w-1/2 border-r' : 'flex-1'} p-4`}>{form}</div>
        {typeof result !== 'undefined' && (
          <div className="p-4 flex flex-col gap-2 overflow-hidden">
            <p className="text-sm text-gray-600">Result</p>
            <pre className="max-w-full max-h-[500px] overflow-auto">
              {loading
                ? 'loading...'
                : JSON.stringify(
                    result,
                    (_, value) => {
                      if (typeof value === 'bigint') return String(value);
                      if (value instanceof Map) {
                        const obj: Record<string, any> = {};
                        value.forEach((v: any, k: string) => {
                          obj[k] = String(v);
                        });
                        return obj;
                      }
                      return value;
                    },
                    2
                  )}
            </pre>
            <pre className="text-red-500 whitespace-pre-wrap">{error}</pre>
          </div>
        )}
      </div>
    </section>
  );
};

export default Section;
