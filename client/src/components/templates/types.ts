import React, { JSX, ReactNode } from "react";

export type FieldProps = {
  component: React.ElementType;
  name: string;
  label?: string;
  styles?: string;
};

export type FormBuilderProps = {
  fields: FieldProps[];
  onSubmit: () => Promise<void>;
};
