import { FC, PropsWithChildren } from 'react';
import { FieldError } from 'react-hook-form';

export type FormFieldProps = {
  label: string;
  labelDesc?: string;
  error?: FieldError;
};

const FormField: FC<PropsWithChildren<FormFieldProps>> = ({ label, labelDesc, children, error }) => {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-sm">
        {label}
        {labelDesc && <span className="text-gray-500">({labelDesc})</span>}
      </span>
      {children}
      {error && <span className="text-sm text-red-500">{error.message}</span>}
    </label>
  );
};

export default FormField;
