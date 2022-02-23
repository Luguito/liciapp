import styled from 'styled-components';
import { withIconDirection } from '../button-hoc';
import { StyledButton } from '../components/button.styled';
import { PrimaryButtonStyles } from './primary-button-styles';
const PrimaryStyledButton = styled(StyledButton) `
    ${PrimaryButtonStyles}
`;
export const PrimaryButton = withIconDirection(PrimaryStyledButton);
//# sourceMappingURL=primary-button.styled.js.map