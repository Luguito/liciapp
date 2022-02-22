import React, { useState, FC } from 'react';
import { reverseDate } from '../../utils/dates';
import { DateInputProps } from './input.d';
import { TextInput } from './TextInput';

export const DateInput: FC<DateInputProps> = ({
        label,
        width,
        disabled,
        placeholder = 'DD/MM/AAAA',
        name = 'date-input',
        defaultValue,
        id ='',
        mask = '99/99/9999',
        onChange,
        onBlur,
        error,
        errorMessage,
        ...props
}) => {
    const [dateValue, setDateValue] = useState<string | undefined>(defaultValue);

    const handleChange = (value: string) => {
        setDateValue(value);
        onChange && onChange(reverseDate(value));
    }

    const handleBlur = (value: string) => {
        onBlur && onBlur(reverseDate(value));
    }

    return (
        <TextInput
            defaultValue={dateValue}
            label={label}
            type="text"
            name={name}
            width={width || '100%'}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder={placeholder}
            disabled={disabled}
            id={id}
            withMask={mask}
            inputMode="numeric"
            error={error}
            errorMessage={errorMessage}
            {...props}
        />

    );
};
