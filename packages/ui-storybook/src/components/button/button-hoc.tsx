import React from 'react';

import { Icon } from '../styled-icon';
import { ButtonProps } from './types';
import { IconPositionEnum } from './enums';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export const withIconDirection = (Button: React.FC<ButtonProps>) =>
    (props: ButtonProps) => (
        <Button {...props} >
            {(props.icon && props.iconPosition === IconPositionEnum.Left) && <Icon icon={(props.icon as IconDefinition)} />}
            {props.children}
            {(props.icon && props.iconPosition === IconPositionEnum.Right) && <Icon icon={(props.icon as IconDefinition)} />}
        </Button>
    );

export const withIcon = (Button: React.FC<ButtonProps>) =>
    (props: ButtonProps) => (
        <Button {...props} >
            {props.icon && <Icon icon={(props.icon as IconDefinition)} />}
        </Button>
    );
