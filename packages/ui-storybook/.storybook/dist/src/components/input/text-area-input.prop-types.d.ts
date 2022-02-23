import PropTypes from 'prop-types';
export declare const TextAreaPropTypes: {
    onChange: PropTypes.Requireable<(...args: any[]) => any>;
    disabled: PropTypes.Requireable<boolean>;
    defaultValue: PropTypes.Requireable<string>;
    maxLength: PropTypes.Requireable<number>;
    minLength: PropTypes.Requireable<number>;
    error: PropTypes.Requireable<boolean>;
    errorMessage: PropTypes.Requireable<string>;
    hint: PropTypes.Requireable<string>;
    placeholder: PropTypes.Requireable<string>;
    label: PropTypes.Requireable<string>;
    textAlign: PropTypes.Requireable<string>;
    type: PropTypes.Requireable<string>;
    width: PropTypes.Requireable<string>;
    multiline: PropTypes.Requireable<boolean>;
    rows: PropTypes.Requireable<number>;
    cols: PropTypes.Requireable<number>;
    name: PropTypes.Requireable<string>;
};
export declare const TextAreaDefaultPropValues: {
    defaultValue: string;
    label: string;
    placeholder: string;
    disabled: boolean;
    hint: string;
};
