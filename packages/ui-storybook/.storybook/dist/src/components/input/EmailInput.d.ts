import { FunctionComponent } from 'react';
interface EmailInputProps {
    label: string;
    name?: string;
    width?: string;
    errorMsg: string;
    disabled?: boolean;
    placeholder: string;
    validateMsg?: string;
    debounceTime?: number;
    asyncErrorMsg?: string;
    hasRequiredError?: boolean;
    requiredErrorMsg?: string;
    onError?: (value: string) => void;
    onValidValue: (value: string) => void;
    asyncValidator?: (value: string) => Promise<boolean>;
    value?: string;
    id?: string;
}
export declare const EmailInput: FunctionComponent<EmailInputProps>;
export {};
