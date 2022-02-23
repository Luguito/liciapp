import PropTypes from 'prop-types';
export const TextAreaPropTypes = {
    onChange: PropTypes.func,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    hint: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    textAlign: PropTypes.oneOf(['right', 'left', 'center']),
    type: PropTypes.oneOf(['number', 'text']),
    width: PropTypes.string,
    multiline: PropTypes.bool,
    rows: PropTypes.number,
    cols: PropTypes.number,
    name: PropTypes.string
};
export const TextAreaDefaultPropValues = {
    defaultValue: '',
    label: '',
    placeholder: '',
    disabled: false,
    hint: ''
};
//# sourceMappingURL=text-area-input.prop-types.js.map