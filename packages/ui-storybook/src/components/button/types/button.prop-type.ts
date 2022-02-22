import PropTypes from 'prop-types';
import { IconPositionEnum, ButtonSizeEnum } from '../enums';

export const ButtonPropTypes = {
    /** Icon node */
    icon: PropTypes.node,
    /** Callback */
    onClick: PropTypes.func,
    /** Boolean */
    disabled: PropTypes.bool,
    /** Icon position 'Left', 'Right' */
    iconPosition: PropTypes.oneOf([IconPositionEnum]),
    /** Button variant 'Large', 'Medium', 'Small' */
    size: PropTypes.oneOf([ButtonSizeEnum]),
    /** Boolean shows loading animation*/
    isLoading: PropTypes.bool,
    /** Loading Icon path */
    loadingIcon: PropTypes.string,
    children: PropTypes.node
};

export const ButtonDefaultPropValues = {
    size: ButtonSizeEnum.Medium,
    disabled: false,
    iconPosition: IconPositionEnum.Left,
    loading: false
};
