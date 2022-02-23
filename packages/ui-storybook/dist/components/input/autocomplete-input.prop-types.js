import PropTypes from 'prop-types';
export const AutocompleteInputPropTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.string,
    iconPrefix: PropTypes.object,
    withMask: PropTypes.string,
    textAlign: PropTypes.oneOf(['right', 'left', 'center']),
    width: PropTypes.string,
    name: PropTypes.string,
    inputRef: PropTypes.any,
    options: PropTypes.array,
    invalidOption: PropTypes.string,
    arrowIcon: PropTypes.bool,
    suggestionsBoxHeight: PropTypes.string,
    getAutocompleteValue: PropTypes.bool,
};
export const AutocompleteInputDefaultPropValues = {
    defaultValue: '',
    label: '',
    placeholder: '',
    disabled: false,
    invalidOption: 'Opciòn Invàlida',
    suggestionsBoxHeight: '350px',
    maxLength: 100,
    name: 'input',
    textAlign: 'left'
};
//# sourceMappingURL=autocomplete-input.prop-types.js.map