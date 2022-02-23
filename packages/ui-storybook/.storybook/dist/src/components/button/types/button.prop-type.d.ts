import PropTypes from 'prop-types';
import { IconPositionEnum, ButtonSizeEnum } from '../enums';
export declare const ButtonPropTypes: {
    /** Icon node */
    icon: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    /** Callback */
    onClick: PropTypes.Requireable<(...args: any[]) => any>;
    /** Boolean */
    disabled: PropTypes.Requireable<boolean>;
    /** Icon position 'Left', 'Right' */
    iconPosition: PropTypes.Requireable<typeof IconPositionEnum>;
    /** Button variant 'Large', 'Medium', 'Small' */
    size: PropTypes.Requireable<typeof ButtonSizeEnum>;
    /** Boolean shows loading animation*/
    isLoading: PropTypes.Requireable<boolean>;
    /** Loading Icon path */
    loadingIcon: PropTypes.Requireable<string>;
    children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
};
export declare const ButtonDefaultPropValues: {
    size: ButtonSizeEnum;
    disabled: boolean;
    iconPosition: IconPositionEnum;
    loading: boolean;
};
