import React, { useState, FunctionComponent, useEffect, useCallback } from 'react';
import { TextInput } from './TextInput';
import debounce from 'lodash/debounce';

enum EmailInputStatus {
    Valid,
    Invalid,
    Loading,
    Disabled,
}

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

export const EmailInput: FunctionComponent<EmailInputProps> = ({
    label,
    width,
    onError,
    errorMsg,
    disabled,
    placeholder,
    asyncValidator,
    onValidValue,
    name = 'email',
    validateMsg = '',
    hasRequiredError,
    asyncErrorMsg = '',
    requiredErrorMsg = '',
    debounceTime = 1200,
    value,
    id = '',
}) => {
    const [inputStatus, setInputStatus] = useState<EmailInputStatus>(EmailInputStatus.Valid);
    const [errorMessage, setErrorMessage] = useState<string>(errorMsg);
    const [emailValue, setEmailValue] = useState<string>('');

    useEffect(() => {
        if (value && value !== '') {
            setEmailValue(value);
        }
    }, []);

    useEffect(() => {
        if (asyncErrorMsg && emailValue && inputStatus === 1) {
            setErrorMessage(`${emailValue}, ${asyncErrorMsg}`);
            setInputStatus(EmailInputStatus.Invalid);
        }
    }, [asyncErrorMsg, inputStatus]);

    useEffect(() => {
        if (!!emailValue) {
            handleEmail(emailValue);
        } else {
            onValidValue('');
        }
    }, [emailValue]);

    useEffect(() => {
        if (!emailValue && hasRequiredError) {
            setErrorMessage(requiredErrorMsg);
            setInputStatus(EmailInputStatus.Invalid);
        }
    }, [hasRequiredError, emailValue]);

    const handleEmail = useCallback(debounce((emailVal: string) => {
        const email = emailVal.trim();

        if (!validEmailRegex(email)) {
            onError && onError(email);
            setErrorMessage(errorMsg);
            setInputStatus(EmailInputStatus.Invalid);
        } else {
            asyncValidator
                ? asyncValidation(email)
                : onValidValue(email);
        }
    }, debounceTime), [errorMsg]);

    const asyncValidation = async (email: string) => {
        setInputStatus(EmailInputStatus.Loading);
        const isValid = asyncValidator && await asyncValidator(email);

        if (isValid) {
            setInputStatus(EmailInputStatus.Valid);
            onValidValue(email);
        } else {
            onError && onError(email);
            setInputStatus(EmailInputStatus.Invalid);
        }
    };

    const validEmailRegex = (email: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

    const loadingMsg = inputStatus === EmailInputStatus.Loading ? validateMsg : '';
    const isInputDisabled = disabled || inputStatus === EmailInputStatus.Loading;

    return (
        <TextInput
            defaultValue={value}
            label={label}
            type='text'
            name={name}
            hint={loadingMsg}
            width={width || '100%'}
            onChange={setEmailValue}
            placeholder={placeholder}
            disabled={isInputDisabled}
            errorMessage={errorMessage}
            error={inputStatus === EmailInputStatus.Invalid}
            id={id}
        />

    );
};
