import { FC, PropsWithChildren } from 'react';
import { FieldError, Merge } from 'react-hook-form';

export type FormFieldProps = {
  label: string;
  labelDesc?: string;
  error?: FieldError | Merge<FieldError, (FieldError | undefined)[]>;
  required?: boolean;
};

const FormField: FC<PropsWithChildren<FormFieldProps>> = ({ label, labelDesc, children, error, required }) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm text-gray-500">
        {required && <span className="text-red-500">*</span>}
        {label}
        {labelDesc && <span>({labelDesc})</span>}
      </span>
      {children}
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </label>
  );
};

export default FormField;
