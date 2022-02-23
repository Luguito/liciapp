import styled from 'styled-components';
import { StyledBaseButton } from './base-button.styled';
import { ButtonWidthSize, IconButtonSize } from '../enums';
export const StyledIconButton = styled(StyledBaseButton) `
    border-radius: 50%;
    width: ${({ size }) => size ? ButtonWidthSize[size] : ButtonWidthSize.Medium};
    min-width: unset;

    span {
        display: none;
    }

    svg {
        height: 100%;
        font-size: ${({ size }) => size ? IconButtonSize[size] : IconButtonSize.Medium};
    }
`;
//# sourceMappingURL=icon-button.styled.js.map