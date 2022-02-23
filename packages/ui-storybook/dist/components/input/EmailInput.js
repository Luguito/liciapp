var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState, useEffect, useCallback } from 'react';
import { TextInput } from './TextInput';
import debounce from 'lodash/debounce';
var EmailInputStatus;
(function (EmailInputStatus) {
    EmailInputStatus[EmailInputStatus["Valid"] = 0] = "Valid";
    EmailInputStatus[EmailInputStatus["Invalid"] = 1] = "Invalid";
    EmailInputStatus[EmailInputStatus["Loading"] = 2] = "Loading";
    EmailInputStatus[EmailInputStatus["Disabled"] = 3] = "Disabled";
})(EmailInputStatus || (EmailInputStatus = {}));
export const EmailInput = ({ label, width, onError, errorMsg, disabled, placeholder, asyncValidator, onValidValue, name = 'email', validateMsg = '', hasRequiredError, asyncErrorMsg = '', requiredErrorMsg = '', debounceTime = 1200, value, id = '', }) => {
    const [inputStatus, setInputStatus] = useState(EmailInputStatus.Valid);
    const [errorMessage, setErrorMessage] = useState(errorMsg);
    const [emailValue, setEmailValue] = useState('');
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
        }
        else {
            onValidValue('');
        }
    }, [emailValue]);
    useEffect(() => {
        if (!emailValue && hasRequiredError) {
            setErrorMessage(requiredErrorMsg);
            setInputStatus(EmailInputStatus.Invalid);
        }
    }, [hasRequiredError, emailValue]);
    const handleEmail = useCallback(debounce((emailVal) => {
        const email = emailVal.trim();
        if (!validEmailRegex(email)) {
            onError && onError(email);
            setErrorMessage(errorMsg);
            setInputStatus(EmailInputStatus.Invalid);
        }
        else {
            asyncValidator
                ? asyncValidation(email)
                : onValidValue(email);
        }
    }, debounceTime), [errorMsg]);
    const asyncValidation = (email) => __awaiter(void 0, void 0, void 0, function* () {
        setInputStatus(EmailInputStatus.Loading);
        const isValid = asyncValidator && (yield asyncValidator(email));
        if (isValid) {
            setInputStatus(EmailInputStatus.Valid);
            onValidValue(email);
        }
        else {
            onError && onError(email);
            setInputStatus(EmailInputStatus.Invalid);
        }
    });
    const validEmailRegex = (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
    const loadingMsg = inputStatus === EmailInputStatus.Loading ? validateMsg : '';
    const isInputDisabled = disabled || inputStatus === EmailInputStatus.Loading;
    return (React.createElement(TextInput, { defaultValue: value, label: label, type: 'text', name: name, hint: loadingMsg, width: width || '100%', onChange: setEmailValue, placeholder: placeholder, disabled: isInputDisabled, errorMessage: errorMessage, error: inputStatus === EmailInputStatus.Invalid, id: id }));
};
//# sourceMappingURL=EmailInput.js.map