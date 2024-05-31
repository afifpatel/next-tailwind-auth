import React, { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

const Button = ({
  children,
  type = 'button',
  className = 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
  ...rest
}: ButtonProps): JSX.Element => (
  <button
    type={type}
    className={className}
    {...rest}
  >
    {children}
  </button>
);

export default Button;
