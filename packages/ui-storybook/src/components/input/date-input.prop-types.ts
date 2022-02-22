import PropTypes from 'prop-types';

export const DateInputPropTypes = {
    mask: PropTypes.oneOf(['99/99/9999']),
}

export const DateInputDefaultValues = {
    name: 'date-input',
    width: '100%',
    placeholder: 'DD/MM/AAAA',
    id: 'date-input',
}
