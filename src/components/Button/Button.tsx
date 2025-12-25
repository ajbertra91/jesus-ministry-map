import type { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode | string;
  className?: string;
  onClick?: () => void;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = ({ children, className, onClick, props }: ButtonProps) => {
  const classes = `btn orbitron-regular uppercase ${className}`.trim();

  return <button className={classes} {...props} onClick={onClick}>{children}</button>;
};

export default Button;