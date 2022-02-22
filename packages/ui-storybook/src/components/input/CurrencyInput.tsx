import React, { useState, useEffect } from 'react';
import { CurrencyInputProps } from './input.d';
import { CurrencyInputPropTypes, CurrencyInputDefaultValues } from './currency-input.prop-types';
import {
  Container,
  InputContainer,
  CurrencyInputField,
  InputLabel,
  Hint,
  Error,
  Helpers,
  LabelTxt,
  TxtPrefix,
  IconPrefix,
} from './TextInput.styled';

const CurrencyInput: React.FunctionComponent<CurrencyInputProps> = ({
  defaultValue,
  error,
  errorMessage,
  inputRef,
  hint,
  label,
  iconPrefix,
  placeholder,
  onChange,
  onBlur,
  width,
  disabled,
  allowDecimals,
  allowNegativeValue,
  decimalSeparator,
  decimalsLimit,
  disableAbbreviations,
  disableGroupSeparators,
  groupSeparator,
  decimalScale,
  prefix,
  suffix,
}) => {
  const [value, setValue] = useState<string | undefined>(defaultValue);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  const cleanNumber = (value: string) =>{ 
    let formattedValue;

    if (value && decimalSeparator) {
      const pattern = `[^0-9-${decimalSeparator}]`; // all numbers, decimal separator, negative sign
      formattedValue = value
        .replace(new RegExp(pattern, 'g'), '') // remove everything, except minus sign, numbers and decimalSeparator
        .replace(decimalSeparator, '.'); // repleace decimalSeparator for '.'
    }
    return formattedValue || value
  }

  const handleChange = (currentValue: string | undefined, name?: string) => {
    const formattedValue = currentValue && cleanNumber(currentValue);

    onChange && onChange(formattedValue, name);
    setValue(currentValue);
  };

  const handleBlur = (event: { target: { value: string } }) => {
    const currentValue = event?.target?.value
    const formattedValue = currentValue && cleanNumber(currentValue);
    onBlur && onBlur(formattedValue || '')
  }

  return (
    <Container width={width}>
      <InputContainer error={error}>
        {prefix && (
          <TxtPrefix>{prefix}</TxtPrefix>
        )}
        {iconPrefix && (
          <IconPrefix>
            ''
          </IconPrefix>
        )}
        <CurrencyInputField
          autoComplete="off"
          ref={inputRef || undefined}
          withPrefix={!!prefix}
          withIconPrefix={!!iconPrefix}
          placeholder={placeholder}
          onValueChange={handleChange}
          onBlur={handleBlur}
          value={value}
          disabled={disabled}
          allowDecimals={allowDecimals}
          allowNegativeValue={allowNegativeValue}
          decimalSeparator={decimalSeparator}
          decimalsLimit={decimalsLimit}
          decimalScale={decimalScale}
          disableAbbreviations={disableAbbreviations}
          disableGroupSeparators={disableGroupSeparators}
          groupSeparator={groupSeparator}
          suffix={suffix}
        />
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

CurrencyInput.propTypes = CurrencyInputPropTypes;
CurrencyInput.defaultProps = CurrencyInputDefaultValues;

export default CurrencyInput;
