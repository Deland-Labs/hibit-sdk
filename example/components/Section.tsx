import { FC, PropsWithChildren, ReactNode } from 'react';

const Section: FC<PropsWithChildren<{ title: string; form: ReactNode; result: any; error: string }>> = ({
  title,
  form,
  result,
  error
}) => {
  return (
    <section>
      <h2 className="text-lg font-bold">{title}</h2>
      <div className="flex mt-2 border rounded-lg overflow-hidden">
        <div className="p-4 border-r">{form}</div>
        <div className="p-4 flex flex-col gap-2 overflow-hidden">
          <p className="text-sm text-gray-600">Result</p>
          <pre className="max-w-full max-h-[500px] overflow-auto">{JSON.stringify(result, null, 2)}</pre>
          <pre className="text-red-500">{error}</pre>
        </div>
      </div>
    </section>
  );
};

export default Section;
