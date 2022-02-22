import React, { useState } from 'react';
import { TextAreaProps } from './input.d';

import {
    Container,
    InputLabel,
    Hint,
    Error,
    Helpers,
    LabelTxt,
    TextArea,
    TEXT_ALIGN
} from './TextInput.styled';
import { InputContainer } from './TextAreaInput.Styled';
import { TextAreaPropTypes, TextAreaDefaultPropValues } from './text-area-input.prop-types';

export const TextAreaInput: React.FunctionComponent<TextAreaProps> = ({
    onChange,
    defaultValue,
    disabled,
    error,
    label,
    placeholder,
    errorMessage,
    hint,
    maxLength,
    textAlign,
    width,
    rows,
    cols,
    name
}) => {
    const [value, setValue] = useState<string | undefined>(defaultValue);
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange && onChange(e.target.value);
        setValue(e.target.value);
    };

    return (
        <Container width={width}>
            <InputContainer error={error}>
                <TextArea
                    textAlign={textAlign ? TEXT_ALIGN[textAlign] : TEXT_ALIGN.LEFT}
                    placeholder={placeholder ? placeholder : undefined}
                    value={value}
                    onChange={handleChange}
                    autoComplete='off'
                    disabled={(disabled)}
                    maxLength={maxLength ? maxLength : undefined}
                    rows={rows || 10}
                    cols={cols || 10}
                    name={name || undefined} />
                <InputLabel showed={value ? true : false}>
                    <LabelTxt>{label}</LabelTxt>
                </InputLabel>
            </InputContainer>
            <Helpers>
                {error && errorMessage && <Error>{errorMessage}</Error>}
                {!error && hint && <Hint>{hint}</Hint>}
            </Helpers>
        </Container>
    );
};

TextAreaInput.propTypes = TextAreaPropTypes;
TextAreaInput.defaultProps = TextAreaDefaultPropValues;
