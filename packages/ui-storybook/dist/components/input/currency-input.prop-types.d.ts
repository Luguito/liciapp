import PropTypes from 'prop-types';
export declare const CurrencyInputPropTypes: {
    allowDecimals: PropTypes.Requireable<boolean>;
    allowNegativeValue: PropTypes.Requireable<boolean>;
    decimalScale: PropTypes.Requireable<number>;
    decimalSeparator: PropTypes.Requireable<string>;
    decimalsLimit: PropTypes.Requireable<number>;
    disableAbbreviations: PropTypes.Requireable<boolean>;
    disableGroupSeparators: PropTypes.Requireable<boolean>;
    groupSeparator: PropTypes.Requireable<string>;
    prefix: PropTypes.Requireable<string>;
    suffix: PropTypes.Requireable<string>;
};
export declare const CurrencyInputDefaultValues: {
    allowDecimals: boolean;
    allowNegativeValue: boolean;
    decimalSeparator: string;
    decimalsLimit: number;
    disableAbbreviations: boolean;
    disableGroupSeparators: boolean;
    groupSeparator: string;
    suffix: string;
};
