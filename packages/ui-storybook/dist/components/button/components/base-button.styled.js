import styled, { css } from 'styled-components';
import { ButtonWidthSize, ButtonFontFoundation } from '../enums';
export const StyledBaseButton = styled.button `
    outline: none;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    height: ${({ size }) => size ? ButtonWidthSize[size] : ButtonWidthSize.Medium};
    position: relative;
    min-width: 150px;
    ${({ size }) => { var _a; return (_a = ButtonFontFoundation[size !== null && size !== void 0 ? size : '']) !== null && _a !== void 0 ? _a : ''; }}

    &:hover {
        box-shadow: none;
    }

    &:active {
        box-shadow: none;
    }

    ${({ isLoading, loadingIcon, size }) => isLoading && css `
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
//# sourceMappingURL=base-button.styled.js.map