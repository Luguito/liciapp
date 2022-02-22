import { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps } from '../types';
import { StyledBaseButton } from './base-button.styled';
import { ButtonWidthSize, IconButtonSize } from '../enums';

export const StyledIconButton: FC = styled(StyledBaseButton)<ButtonProps>`
    border-radius: 50%;
    width: ${({size}) => size ? ButtonWidthSize[size]: ButtonWidthSize.Medium};
    min-width: unset;

    span {
        display: none;
    }

    svg {
        height: 100%;
        font-size: ${({size}) => size ? IconButtonSize[size]: IconButtonSize.Medium};
    }
`;
