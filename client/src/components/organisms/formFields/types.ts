import { ReactNode } from 'react';

export type FormFieldProps = {
  component: ReactNode;
  label: string;
  name: string;
  styles?: string;
  value: string;
};

export type InputFormFieldProps = Omit<FormFieldProps, 'component'> & {
  inputStyles?: string;
};
