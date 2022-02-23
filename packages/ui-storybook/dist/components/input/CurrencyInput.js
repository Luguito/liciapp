import React, { useState, useEffect } from 'react';
import { CurrencyInputPropTypes, CurrencyInputDefaultValues } from './currency-input.prop-types';
import { Container, InputContainer, CurrencyInputField, InputLabel, Hint, Error, Helpers, LabelTxt, TxtPrefix, IconPrefix, } from './TextInput.styled';
const CurrencyInput = ({ defaultValue, error, errorMessage, inputRef, hint, label, iconPrefix, placeholder, onChange, onBlur, width, disabled, allowDecimals, allowNegativeValue, decimalSeparator, decimalsLimit, disableAbbreviations, disableGroupSeparators, groupSeparator, decimalScale, prefix, suffix, }) => {
    const [value, setValue] = useState(defaultValue);
    useEffect(() => {
        setValue(defaultValue);
    }, [defaultValue]);
    const cleanNumber = (value) => {
        let formattedValue;
        if (value && decimalSeparator) {
            const pattern = `[^0-9-${decimalSeparator}]`; // all numbers, decimal separator, negative sign
            formattedValue = value
                .replace(new RegExp(pattern, 'g'), '') // remove everything, except minus sign, numbers and decimalSeparator
                .replace(decimalSeparator, '.'); // repleace decimalSeparator for '.'
        }
        return formattedValue || value;
    };
    const handleChange = (currentValue, name) => {
        const formattedValue = currentValue && cleanNumber(currentValue);
        onChange && onChange(formattedValue, name);
        setValue(currentValue);
    };
    const handleBlur = (event) => {
        var _a;
        const currentValue = (_a = event === null || event === void 0 ? void 0 : event.target) === null || _a === void 0 ? void 0 : _a.value;
        const formattedValue = currentValue && cleanNumber(currentValue);
        onBlur && onBlur(formattedValue || '');
    };
    return (React.createElement(Container, { width: width },
        React.createElement(InputContainer, { error: error },
            prefix && (React.createElement(TxtPrefix, null, prefix)),
            iconPrefix && (React.createElement(IconPrefix, null, "''")),
            React.createElement(CurrencyInputField, { autoComplete: "off", ref: inputRef || undefined, withPrefix: !!prefix, withIconPrefix: !!iconPrefix, placeholder: placeholder, onValueChange: handleChange, onBlur: handleBlur, value: value, disabled: disabled, allowDecimals: allowDecimals, allowNegativeValue: allowNegativeValue, decimalSeparator: decimalSeparator, decimalsLimit: decimalsLimit, decimalScale: decimalScale, disableAbbreviations: disableAbbreviations, disableGroupSeparators: disableGroupSeparators, groupSeparator: groupSeparator, suffix: suffix }),
            React.createElement(InputLabel, { showed: value ? true : false },
                React.createElement(LabelTxt, null, label))),
        React.createElement(Helpers, null,
            error && errorMessage && React.createElement(Error, null, errorMessage),
            !error && hint && React.createElement(Hint, null, hint))));
};
CurrencyInput.propTypes = CurrencyInputPropTypes;
CurrencyInput.defaultProps = CurrencyInputDefaultValues;
export default CurrencyInput;
//# sourceMappingURL=CurrencyInput.js.map