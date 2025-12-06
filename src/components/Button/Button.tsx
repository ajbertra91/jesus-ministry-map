import type { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode | string;
}

const Button = ({ children }: ButtonProps) => {
  return <button className="btn orbitron-regular uppercase text-red">{children}</button>;
};

export default Button;