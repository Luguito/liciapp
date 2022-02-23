import styled from 'styled-components';
import { StyledBaseButton } from './base-button.styled';
import { ButtonBorderRadius, FontButtonSize } from '../enums';
export const StyledButton = styled(StyledBaseButton) `
    width: auto;
    padding: ${({ children }) => children && '0 30px'};
    border-radius: ${({ size }) => { var _a; return (_a = ButtonBorderRadius[size !== null && size !== void 0 ? size : '']) !== null && _a !== void 0 ? _a : '4px'; }};

    svg {
        height: 100%;
        font-size: ${({ size }) => size ? FontButtonSize[size] : FontButtonSize.Medium};
        margin: ${({ iconPosition }) => iconPosition ? iconPosition === 'Right' ? '0 0 0 18px' : '0 15px 0 0' : '0 18px 0 0'}
    }
`;
//# sourceMappingURL=button.styled.js.map