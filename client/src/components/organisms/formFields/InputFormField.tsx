'use client';

import { InputLabel, TextInput } from '@/components/atoms';

import { InputFormFieldProps } from './types';

export const InputFormField = ({ 
  inputStyles,
  label,
  name,
  styles,
  value,
}: InputFormFieldProps) => {
  return (
    <div className={`col-span-1 md:col-span-3 ${styles}`}>
      <InputLabel>{label}</InputLabel>
      <TextInput name={name} styles={inputStyles} value={value} />
    </div>
  );
}