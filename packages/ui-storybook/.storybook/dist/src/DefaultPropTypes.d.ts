import { InferProps } from 'prop-types';
export declare type Defaultize<T, D> = Omit<T, keyof D> & Partial<D>;
export declare type InferDefaultProps<T, D> = Defaultize<InferProps<T>, D>;
