import React from 'react';
import { Icon } from '../styled-icon';
import { IconPositionEnum } from './enums';
export const withIconDirection = (Button) => (props) => (React.createElement(Button, Object.assign({}, props),
    (props.icon && props.iconPosition === IconPositionEnum.Left) && React.createElement(Icon, { icon: props.icon }),
    props.children,
    (props.icon && props.iconPosition === IconPositionEnum.Right) && React.createElement(Icon, { icon: props.icon })));
export const withIcon = (Button) => (props) => (React.createElement(Button, Object.assign({}, props), props.icon && React.createElement(Icon, { icon: props.icon })));
//# sourceMappingURL=button-hoc.js.map