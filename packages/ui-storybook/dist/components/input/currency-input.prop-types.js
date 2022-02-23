import PropTypes from 'prop-types';
export const CurrencyInputPropTypes = {
    allowDecimals: PropTypes.bool,
    allowNegativeValue: PropTypes.bool,
    decimalScale: PropTypes.number,
    decimalSeparator: PropTypes.string,
    decimalsLimit: PropTypes.number,
    disableAbbreviations: PropTypes.bool,
    disableGroupSeparators: PropTypes.bool,
    groupSeparator: PropTypes.string,
    prefix: PropTypes.string,
    suffix: PropTypes.string,
};
export const CurrencyInputDefaultValues = {
    allowDecimals: true,
    allowNegativeValue: false,
    decimalSeparator: '.',
    decimalsLimit: 2,
    disableAbbreviations: true,
    disableGroupSeparators: false,
    groupSeparator: ',',
    suffix: '',
};
//# sourceMappingURL=currency-input.prop-types.js.map