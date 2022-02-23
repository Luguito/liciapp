import React, { useState } from 'react';
import { Container, InputLabel, Hint, Error, Helpers, LabelTxt, TextArea, TEXT_ALIGN } from './TextInput.styled';
import { InputContainer } from './TextAreaInput.Styled';
import { TextAreaPropTypes, TextAreaDefaultPropValues } from './text-area-input.prop-types';
export const TextAreaInput = ({ onChange, defaultValue, disabled, error, label, placeholder, errorMessage, hint, maxLength, textAlign, width, rows, cols, name }) => {
    const [value, setValue] = useState(defaultValue);
    const handleChange = (e) => {
        onChange && onChange(e.target.value);
        setValue(e.target.value);
    };
    return (React.createElement(Container, { width: width },
        React.createElement(InputContainer, { error: error },
            React.createElement(TextArea, { textAlign: textAlign ? TEXT_ALIGN[textAlign] : TEXT_ALIGN.LEFT, placeholder: placeholder ? placeholder : undefined, value: value, onChange: handleChange, autoComplete: 'off', disabled: (disabled), maxLength: maxLength ? maxLength : undefined, rows: rows || 10, cols: cols || 10, name: name || undefined }),
            React.createElement(InputLabel, { showed: value ? true : false },
                React.createElement(LabelTxt, null, label))),
        React.createElement(Helpers, null,
            error && errorMessage && React.createElement(Error, null, errorMessage),
            !error && hint && React.createElement(Hint, null, hint))));
};
TextAreaInput.propTypes = TextAreaPropTypes;
TextAreaInput.defaultProps = TextAreaDefaultPropValues;
//# sourceMappingURL=TextAreaInput.js.map