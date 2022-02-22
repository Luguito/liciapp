import styled, { css } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProps } from '../types';

export const Icon = styled(FontAwesomeIcon) <IconProps>`
    ${({ size, iconSize }) => !size && css`
        width: ${iconSize ? iconSize : 14}px;
        height: ${iconSize ? iconSize : 14}px;
        font-size: ${iconSize ? iconSize : 14}px;
        line-height: ${iconSize ? iconSize : 14}px;
    `}
`;
