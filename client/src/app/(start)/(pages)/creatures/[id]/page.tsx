'use client';

import { PageHeader } from "@/components/atoms";
import { InputFormField } from "@/components/organisms";
import { FormBuilder } from "@/components/templates";
import { FieldProps } from '@/components/templates/types';
import { ReactNode } from "react";

export default function CreaturePage() {

  const handleSubmit= async () => {};

  const fields: FieldProps[] = [
    {
      component: InputFormField,
      name: 'name',
      label: 'Creature Name',
    }
  ];

  return (
    <div>
      <PageHeader styles="mb-10">
        Creature
      </PageHeader>
      <FormBuilder fields={fields} onSubmit={handleSubmit} />
    </div>
  );
};
