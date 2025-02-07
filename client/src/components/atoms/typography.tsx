import { TypographyProps } from './types';

export const PageHeader = ({ children, styles }: TypographyProps) => (
  <p className={`text-foreground text-4xl font-semibold ${styles}`}>
    {children}
  </p>
);

export const InputLabel = ({ children, styles }: TypographyProps) => (
  <p className={`text-foreground text-xl font-medium ${styles}`}>
    {children}
  </p>
);