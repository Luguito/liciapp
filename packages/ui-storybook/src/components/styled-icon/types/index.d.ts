import { InferDefaultProps } from '../../DefaultPropTypes';
import { IconPropTypes, IconDefaultValues } from './Icon.prop-types';

export type IconProps =  InferDefaultProps<typeof IconPropTypes, typeof IconDefaultValues>;
