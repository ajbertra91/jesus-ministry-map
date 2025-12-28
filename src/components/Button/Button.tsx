import type { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode | string;
  className?: string;
  onClick?: (thing: any) => void;
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button = ({ children, className, onClick, props }: ButtonProps) => {
  const classes = `btn orbitron-regular uppercase ${className}`.trim();

  return (
    <button
      {...props}
      className={classes}
      onClick={onClick}
    >
      <div className="btn-content">{children}</div>
    </button>
  );
};

export default Button;