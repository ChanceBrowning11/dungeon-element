'use client';

import { InputProps } from './types'; 

export const TextInput = ({
  name,
  onChange,
  styles,
  type = 'text',
  value
}: InputProps) => (
  <input
    className={`p-2 rounded-md w-full focus:shadow-md focus:shadow-primary ${styles}`}
    name={name}
    onChange={onChange}
    type={type}
    value={value}
  />
);
