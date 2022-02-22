import React, { useMemo, useRef, useState } from 'react';
import { AutocompleteInputProps } from './input.d';
import {
    AutocompleteInputPropTypes,
    AutocompleteInputDefaultPropValues
} from './autocomplete-input.prop-types';


import {
    SuggestionsContainer,
    SuggestionsList,
    SuggestionItem,
    //ArrowIcon
} from './AutocompleteInput.styled';
import {
    Container,
    InputContainer,
    Input,
    InputLabel,
    Error,
    Helpers,
    LabelTxt,
    TxtPrefix,
    IconPrefix,
    TEXT_ALIGN
} from './TextInput.styled';

export const AutocompleteInput: React.FunctionComponent<
    AutocompleteInputProps
> = ({
    onChange,
    onBlur,
    defaultValue,
    disabled,
    error,
    label,
    placeholder,
    errorMessage,
    maxLength,
    prefix,
    iconPrefix,
    textAlign = 'left',
    width,
    name,
    inputRef,
    options,
    invalidOption,
    arrowIcon,
    suggestionsBoxHeight,
    getAutocompleteValue
}) => {
        const [value, setValue] = useState<string | undefined>(defaultValue);

        const [outputValue, setOutputValue] = useState<string | undefined>();

        const reference = inputRef ? { ref: inputRef } : {};

        const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);

        const inputContainerRef = useRef<HTMLDivElement>(null);

        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            let value
            if (onChange && getAutocompleteValue) {
                value = getSuggestionValue(e.target.value)
            } else if (onChange) {
                value = e.target.value
            }
            onChange && onChange(value)
            setOutputValue(value);
            setValue(e.target.value);
        };
        const handleBlur = () => {
            onBlur && onBlur(outputValue);
        };

        const handleSuggestionsVisibility = () => {
            setIsSuggestionsVisible(true);
        };

        const handleSuggestionSelected = (suggestion: string) => {
            if (suggestion !== invalidOption) {
                setIsSuggestionsVisible(false);
                let value
                if (onChange && getAutocompleteValue) {
                    value = getSuggestionValue(suggestion)
                } else if (onChange) {
                    value = suggestion
                }
                onChange && onChange(value)
                setOutputValue(value);
                onBlur && onBlur(value);
                setValue(suggestion);
            }
        };

        const handleKeyBoardNavegation = (event: any) => {
            if (event.key === 'Escape') {
                setIsSuggestionsVisible(false);
            }
        };

        const suggestions = useMemo(() => {
            if (!value) return options;

            const invalidOptionMessage = [{ name: invalidOption }];

            const filteredSuggestions =
                options?.filter(
                    suggestion =>
                        suggestion?.name?.toLowerCase().includes(value.toLowerCase())
                );

            if (filteredSuggestions?.length === 0) {
                onChange && onChange('');
                setOutputValue(value);
            }

            return filteredSuggestions && filteredSuggestions.length > 0
                ? filteredSuggestions
                : invalidOptionMessage;
        }, [options, invalidOption, value]);

        const getSuggestionValue = (suggestionSelected: string) => {
            const suggestionValue = options?.find((suggestion: { name: string, value: string }) => suggestion && suggestion.name === suggestionSelected)
            return suggestionValue && suggestionValue.value ? suggestionValue.value : ''
        }

        return (
            <Container width={width}>
                <InputContainer error={error} ref={inputContainerRef}>
                    {prefix && <TxtPrefix>{prefix}</TxtPrefix>}
                    {iconPrefix && (
                        <IconPrefix>
                            $
                        </IconPrefix>
                    )}

                    <Input
                        {...reference}
                        type={'text'}
                        $withPrefix={!!prefix}
                        $withIconPrefix={!!iconPrefix}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        onClick={handleSuggestionsVisibility}
                        placeholder={placeholder}
                        value={value}
                        onKeyUp={handleKeyBoardNavegation}
                        autoComplete='off'
                        disabled={disabled}
                        $textAlign={
                            TEXT_ALIGN[textAlign] || TEXT_ALIGN.LEFT
                        }
                        maxLength={maxLength}
                        name={name}
                    />

                    

                    <InputLabel showed={!!value}>
                        <LabelTxt>{label}</LabelTxt>
                    </InputLabel>
                    {isSuggestionsVisible && (
                        <SuggestionsContainer
                            suggestionsBoxHeight={suggestionsBoxHeight}
                        >
                            <SuggestionsList>
                                {suggestions &&
                                    suggestions.map(
                                        (suggestion: { name: string, value: string }, index: number) => (
                                            <SuggestionItem
                                                key={index}
                                                disableHighLighted={
                                                    suggestion.name ===
                                                    invalidOption
                                                }
                                                onClick={() =>
                                                    handleSuggestionSelected(
                                                        suggestion.name
                                                    )
                                                }
                                            >
                                                {suggestion.name}
                                            </SuggestionItem>
                                        )
                                    )}
                            </SuggestionsList>
                        </SuggestionsContainer>
                    )}
                </InputContainer>
                <Helpers>
                    {error && errorMessage && <Error>{errorMessage}</Error>}
                </Helpers>
            </Container>
        );
    };

AutocompleteInput.propTypes = AutocompleteInputPropTypes;
AutocompleteInput.defaultProps = AutocompleteInputDefaultPropValues;
