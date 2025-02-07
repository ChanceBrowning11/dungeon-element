import { ButtonProps } from './types';

export const PrimaryButton = ({ children, onClick, styles }: ButtonProps ) =>(
  <button
    onClick={onClick}
    className={`${styles} bg-primary text-white rounded hover:bg-secondary px-10 py-4`}
  >
    {children}
  </button>
);

export const TextButton = ({ children, onClick, styles }: ButtonProps) => (
  <button
    onClick={onClick}
    className={`bg-transparent text-primary hover:text-secondary hover:underline hover:underline-offset-2 p-2 ${styles}`}
  >
    {children}
  </button>
);
