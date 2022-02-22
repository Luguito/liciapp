import { InferDefaultProps } from "../../DefaultPropTypes";
import { InputPropTypes, InputDefaultPropValues} from "./text-input.prop-types";
import { AutocompleteInputPropTypes, AutocompleteInputDefaultPropValues} from "./autocomplete-input.prop-types";
import { TextAreaPropTypes, TextAreaDefaultPropValues } from "./text-area.prop-types";
import { CurrencyInputPropTypes, CurrencyInputDefaultValues } from './currency-input.prop-types';
import { DateInputPropTypes, DateInputDefaultValues } from './date-input.prop-types';

export type InputProps = InferDefaultProps<typeof InputPropTypes, typeof InputDefaultPropValues>;
export type AutocompleteInputProps = InferDefaultProps<typeof AutocompleteInputPropTypes, typeof AutocompleteInputDefaultPropValues>;
export type TextAreaProps = InferDefaultProps<typeof TextAreaPropTypes, typeof TextAreaDefaultPropValues>;
export type CurrencyInputProps = InferDefaultProps<typeof InputPropTypes, typeof InputDefaultPropValues> & InferDefaultProps<typeof CurrencyInputPropTypes, typeof CurrencyInputDefaultValues>;
export type DateInputProps = InferDefaultProps<typeof DateInputPropTypes, typeof DateInputDefaultValues> & InferDefaultProps<typeof InputPropTypes, typeof InputDefaultPropValues>;