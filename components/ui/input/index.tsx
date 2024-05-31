import React, { ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  name?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

const Input = ({
  type = 'text',
  name,
  value,
  onChange,
  placeholder = '',
  disabled = false,
  className = 'flex h-10 w-full rounded-md border border-indigo-300 bg-transparent py-2 px-3 text-sm placeholder:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-indigo-700 dark:text-indigo-50 dark:focus:ring-indigo-400 dark:focus:ring-offset-indigo-900',
  ...rest
}: InputProps): JSX.Element => (
  <input
    type={type}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    className={className}
    {...rest}
  />
);

export default Input;
