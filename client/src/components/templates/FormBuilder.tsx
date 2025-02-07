'use client';

import { FormBuilderProps } from "./types";

export const FormBuilder = ({ fields, onSubmit }: FormBuilderProps) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='grid grid-cols-3 md:grid-cols-6'>
        {fields.map(({ component: Component, ...rest}, i) => 
          <Component key={`${rest.name}-field-${i}`} {...rest} />
        )}
      </div>
    </form>
  );
};
