import styled from 'styled-components';

import { ButtonProps } from '../types';
import { StyledBaseButton } from './base-button.styled';
import { ButtonBorderRadius, FontButtonSize } from '../enums';

export const StyledButton = styled(StyledBaseButton)<ButtonProps>`
    width: auto;
    padding: ${({children}) => children && '0 30px'};
    border-radius: ${({size}) => ButtonBorderRadius[size ?? ''] ?? '4px'};

    svg {
        height: 100%;
        font-size: ${({size}) => size ? FontButtonSize[size]: FontButtonSize.Medium};
        margin: ${({iconPosition}) => iconPosition ? iconPosition === 'Right' ? '0 0 0 18px' : '0 15px 0 0' : '0 18px 0 0' }
    }
`;
