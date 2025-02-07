import { ReactNode } from "react";

export type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  styles?: string;
};

export type InputProps = {
  name: string;
  onChange?: () => void;
  styles?: string;
  type?: string;
  value: string;
};

export type TypographyProps = {
  children: ReactNode;
  styles?: string;
};
