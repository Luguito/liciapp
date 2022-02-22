import styled, { css } from 'styled-components';

import { ButtonProps } from '../types';
import { ButtonWidthSize, ButtonFontFoundation } from '../enums';

export const StyledBaseButton = styled.button<ButtonProps>`
    outline: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: ${({ size }) => size ? ButtonWidthSize[size] : ButtonWidthSize.Medium};
    position: relative;
    min-width: 150px;
    ${({size}) => ButtonFontFoundation[size ?? ''] ?? ''}

    &:hover {
        box-shadow: none;
    }

    &:active {
        box-shadow: none;
    }

    ${({ isLoading, loadingIcon, size }) => isLoading && css`
        & svg{
            display: none
        }
        text-indent: ${isLoading ? '-1000vw' : ''}; 
        transition-delay: ${isLoading ? '0ms' : '0.3s'};
        pointer-events: none;

        &::after {
            content: '';
            position: absolute;
            display: block;
            height: 50px;
            width: 100%;
            background-image: url('${loadingIcon ? loadingIcon : '/assets/loading.svg'}');
            background-position: center center;
            background-repeat: no-repeat;
            background-size: cover;
            background-size: ${size ? ButtonWidthSize[size] : ButtonWidthSize.Medium};
        }
    `}
`;
