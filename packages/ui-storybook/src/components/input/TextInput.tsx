import React, { useState } from 'react';
import { InputProps } from './input.d';
import { InputPropTypes, InputDefaultPropValues, InputMode } from './text-input.prop-types';

import {
    Container,
    InputContainer,
    Input,
    InputWithMask,
    InputLabel,
    Hint,
    Error,
    Helpers,
    LabelTxt,
    TxtPrefix,
    IconPrefix,
    TEXT_ALIGN,
    IconSubfix
} from './TextInput.styled';

export const TextInput: React.FunctionComponent<InputProps> = ({
    onChange,
    onBlur,
    defaultValue,
    disabled,
    error,
    label,
    placeholder,
    errorMessage,
    hint,
    maxLength,
    prefix,
    iconPrefix,
    iconSubfix,
    withMask,
    textAlign,
    type,
    width,
    name,
    inputRef,
    id,
    inputMode = 'text',
}) => {
    const [value, setValue] = useState<string | undefined>(defaultValue);
    const formatNumberToCurrency = (value: string) => {
        return value.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e.target.value);
        setValue(e.target.value);
    };
    const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
        onBlur && onBlur(e.target.value);
    };
    const handleKeyUp = (e: any) => {
        e.target.value = formatNumberToCurrency(e.target.value);
    };
    const unhandleKeyUp = () => { };

    const reference = inputRef ? { ref: inputRef } : {};

    return (
        <Container width={width}>
            <InputContainer error={error}>
                {prefix && <TxtPrefix>{prefix}</TxtPrefix>}
                {iconPrefix && <IconPrefix>
                    ''
                </IconPrefix>}
                {withMask && <InputWithMask
                    type={type ? type : 'text'}
                    placeholder={placeholder ? placeholder : undefined}
                    $textAlign={textAlign ? TEXT_ALIGN[textAlign] : TEXT_ALIGN.LEFT}
                    $withPrefix={prefix || iconPrefix ? true : false}
                    mask={withMask}
                    maskPlaceholder={null}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name={name || undefined}
                    id={id}
                    value={value}
                    disabled={disabled}
                    inputMode={inputMode as InputMode}
                />}
                {!withMask && <Input
                    {...reference}
                    type={type ? type : 'text'}
                    $withPrefix={!!prefix}
                    $withIconPrefix={!!iconPrefix}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholder ? placeholder : undefined}
                    value={value}
                    onKeyUp={type === 'currency' ? handleKeyUp : unhandleKeyUp}
                    autoComplete='off'
                    disabled={(disabled)}
                    $textAlign={textAlign ? TEXT_ALIGN[textAlign] : TEXT_ALIGN.LEFT}
                    maxLength={maxLength ? maxLength : undefined}
                    name={name || undefined}
                    id={id}
                    inputMode={inputMode as InputMode}
                />}
                <InputLabel showed={value ? true : false}>
                    <LabelTxt>{label}</LabelTxt>
                </InputLabel>
                {iconSubfix && <IconSubfix>
                    ''
                </IconSubfix>}
            </InputContainer>
            <Helpers>
                {error && errorMessage && <Error>{errorMessage}</Error>}
                {!error && hint && <Hint>{hint}</Hint>}
            </Helpers>
        </Container>
    );
};

TextInput.propTypes = InputPropTypes;
TextInput.defaultProps = InputDefaultPropValues;
