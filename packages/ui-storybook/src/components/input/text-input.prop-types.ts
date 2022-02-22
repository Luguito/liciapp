import PropTypes from 'prop-types';

export const InputPropTypes = {
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    maxLength: PropTypes.number,
    minLength: PropTypes.number,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    hint: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.string,
    iconPrefix: PropTypes.object,
    iconSubfix: PropTypes.object,
    withMask: PropTypes.string,
    textAlign: PropTypes.oneOf(['right', 'left', 'center']),
    type: PropTypes.oneOf(['number', 'text']),
    width: PropTypes.string,
    name: PropTypes.string,
    inputRef: PropTypes.any,
    id: PropTypes.string,
    inputMode: PropTypes.oneOf(['text', 'none', 'numeric', 'decimal', 'url', 'tel', 'search', 'email']),
};

export const InputDefaultPropValues = {
    defaultValue: '',
    label: '',
    placeholder: '',
    disabled: false,
    hint: '',
    id: '',
    inputMode: 'text',
};

export type InputMode = 'text' | 'none' | 'numeric' | 'decimal' | 'url' | 'tel' | 'search' | 'email';