import React, { useState } from 'react';
import { InputPropTypes, InputDefaultPropValues } from './text-input.prop-types';
import { Container, InputContainer, Input, InputWithMask, InputLabel, Hint, Error, Helpers, LabelTxt, TxtPrefix, IconPrefix, TEXT_ALIGN, IconSubfix } from './TextInput.styled';
export const TextInput = ({ onChange, onBlur, defaultValue, disabled, error, label, placeholder, errorMessage, hint, maxLength, prefix, iconPrefix, iconSubfix, withMask, textAlign, type, width, name, inputRef, id, inputMode = 'text', }) => {
    const [value, setValue] = useState(defaultValue);
    const formatNumberToCurrency = (value) => {
        return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const handleChange = (e) => {
        onChange && onChange(e.target.value);
        setValue(e.target.value);
    };
    const handleBlur = (e) => {
        onBlur && onBlur(e.target.value);
    };
    const handleKeyUp = (e) => {
        e.target.value = formatNumberToCurrency(e.target.value);
    };
    const unhandleKeyUp = () => { };
    const reference = inputRef ? { ref: inputRef } : {};
    return (React.createElement(Container, { width: width },
        React.createElement(InputContainer, { error: error },
            prefix && React.createElement(TxtPrefix, null, prefix),
            iconPrefix && React.createElement(IconPrefix, null, "''"),
            withMask && React.createElement(InputWithMask, { type: type ? type : 'text', placeholder: placeholder ? placeholder : undefined, "$textAlign": textAlign ? TEXT_ALIGN[textAlign] : TEXT_ALIGN.LEFT, "$withPrefix": prefix || iconPrefix ? true : false, mask: withMask, maskPlaceholder: null, onChange: handleChange, onBlur: handleBlur, name: name || undefined, id: id, value: value, disabled: disabled, inputMode: inputMode }),
            !withMask && React.createElement(Input, Object.assign({}, reference, { type: type ? type : 'text', "$withPrefix": !!prefix, "$withIconPrefix": !!iconPrefix, onChange: handleChange, onBlur: handleBlur, placeholder: placeholder ? placeholder : undefined, value: value, onKeyUp: type === 'currency' ? handleKeyUp : unhandleKeyUp, autoComplete: 'off', disabled: (disabled), "$textAlign": textAlign ? TEXT_ALIGN[textAlign] : TEXT_ALIGN.LEFT, maxLength: maxLength ? maxLength : undefined, name: name || undefined, id: id, inputMode: inputMode })),
            React.createElement(InputLabel, { showed: value ? true : false },
                React.createElement(LabelTxt, null, label)),
            iconSubfix && React.createElement(IconSubfix, null, "''")),
        React.createElement(Helpers, null,
            error && errorMessage && React.createElement(Error, null, errorMessage),
            !error && hint && React.createElement(Hint, null, hint))));
};
TextInput.propTypes = InputPropTypes;
TextInput.defaultProps = InputDefaultPropValues;
//# sourceMappingURL=TextInput.js.map