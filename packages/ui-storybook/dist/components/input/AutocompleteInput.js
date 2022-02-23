import React, { useMemo, useRef, useState } from 'react';
import { AutocompleteInputPropTypes, AutocompleteInputDefaultPropValues } from './autocomplete-input.prop-types';
import { SuggestionsContainer, SuggestionsList, SuggestionItem, } from './AutocompleteInput.styled';
import { Container, InputContainer, Input, InputLabel, Error, Helpers, LabelTxt, TxtPrefix, IconPrefix, TEXT_ALIGN } from './TextInput.styled';
export const AutocompleteInput = ({ onChange, onBlur, defaultValue, disabled, error, label, placeholder, errorMessage, maxLength, prefix, iconPrefix, textAlign = 'left', width, name, inputRef, options, invalidOption, arrowIcon, suggestionsBoxHeight, getAutocompleteValue }) => {
    const [value, setValue] = useState(defaultValue);
    const [outputValue, setOutputValue] = useState();
    const reference = inputRef ? { ref: inputRef } : {};
    const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
    const inputContainerRef = useRef(null);
    const handleChange = (e) => {
        let value;
        if (onChange && getAutocompleteValue) {
            value = getSuggestionValue(e.target.value);
        }
        else if (onChange) {
            value = e.target.value;
        }
        onChange && onChange(value);
        setOutputValue(value);
        setValue(e.target.value);
    };
    const handleBlur = () => {
        onBlur && onBlur(outputValue);
    };
    const handleSuggestionsVisibility = () => {
        setIsSuggestionsVisible(true);
    };
    const handleSuggestionSelected = (suggestion) => {
        if (suggestion !== invalidOption) {
            setIsSuggestionsVisible(false);
            let value;
            if (onChange && getAutocompleteValue) {
                value = getSuggestionValue(suggestion);
            }
            else if (onChange) {
                value = suggestion;
            }
            onChange && onChange(value);
            setOutputValue(value);
            onBlur && onBlur(value);
            setValue(suggestion);
        }
    };
    const handleKeyBoardNavegation = (event) => {
        if (event.key === 'Escape') {
            setIsSuggestionsVisible(false);
        }
    };
    const suggestions = useMemo(() => {
        if (!value)
            return options;
        const invalidOptionMessage = [{ name: invalidOption }];
        const filteredSuggestions = options === null || options === void 0 ? void 0 : options.filter(suggestion => { var _a; return (_a = suggestion === null || suggestion === void 0 ? void 0 : suggestion.name) === null || _a === void 0 ? void 0 : _a.toLowerCase().includes(value.toLowerCase()); });
        if ((filteredSuggestions === null || filteredSuggestions === void 0 ? void 0 : filteredSuggestions.length) === 0) {
            onChange && onChange('');
            setOutputValue(value);
        }
        return filteredSuggestions && filteredSuggestions.length > 0
            ? filteredSuggestions
            : invalidOptionMessage;
    }, [options, invalidOption, value]);
    const getSuggestionValue = (suggestionSelected) => {
        const suggestionValue = options === null || options === void 0 ? void 0 : options.find((suggestion) => suggestion && suggestion.name === suggestionSelected);
        return suggestionValue && suggestionValue.value ? suggestionValue.value : '';
    };
    return (React.createElement(Container, { width: width },
        React.createElement(InputContainer, { error: error, ref: inputContainerRef },
            prefix && React.createElement(TxtPrefix, null, prefix),
            iconPrefix && (React.createElement(IconPrefix, null, "$")),
            React.createElement(Input, Object.assign({}, reference, { type: 'text', "$withPrefix": !!prefix, "$withIconPrefix": !!iconPrefix, onChange: handleChange, onBlur: handleBlur, onClick: handleSuggestionsVisibility, placeholder: placeholder, value: value, onKeyUp: handleKeyBoardNavegation, autoComplete: 'off', disabled: disabled, "$textAlign": TEXT_ALIGN[textAlign] || TEXT_ALIGN.LEFT, maxLength: maxLength, name: name })),
            React.createElement(InputLabel, { showed: !!value },
                React.createElement(LabelTxt, null, label)),
            isSuggestionsVisible && (React.createElement(SuggestionsContainer, { suggestionsBoxHeight: suggestionsBoxHeight },
                React.createElement(SuggestionsList, null, suggestions &&
                    suggestions.map((suggestion, index) => (React.createElement(SuggestionItem, { key: index, disableHighLighted: suggestion.name ===
                            invalidOption, onClick: () => handleSuggestionSelected(suggestion.name) }, suggestion.name))))))),
        React.createElement(Helpers, null, error && errorMessage && React.createElement(Error, null, errorMessage))));
};
AutocompleteInput.propTypes = AutocompleteInputPropTypes;
AutocompleteInput.defaultProps = AutocompleteInputDefaultPropValues;
//# sourceMappingURL=AutocompleteInput.js.map