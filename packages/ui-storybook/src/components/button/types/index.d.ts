import { InferDefaultProps } from '../../../DefaultPropTypes';
import { ButtonPropTypes, ButtonDefaultPropValues } from "./button.prop-type";

export type ButtonProps = InferDefaultProps<typeof ButtonPropTypes, typeof ButtonDefaultPropValues>;
