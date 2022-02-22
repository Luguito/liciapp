import { InferProps } from 'prop-types';

export type Defaultize<T, D> =
  // The properties that don't have default values     
   & Omit<T, keyof D>
  // plus the properties that have default values, but being optional
   & Partial<D>;

export type InferDefaultProps<T, D> = Defaultize<InferProps<T>, D>;

