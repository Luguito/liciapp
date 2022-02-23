import styled from 'styled-components';
import { StyledButton } from '../components/button.styled';
import { withIconDirection } from '../button-hoc';
import { TertiaryButtonStyles } from './tertiary-button-styles';
const TertiaryStyledButton = styled(StyledButton) `
    ${TertiaryButtonStyles}
`;
export const TertiaryButton = withIconDirection(TertiaryStyledButton);
//# sourceMappingURL=tertiary-button.styled.js.map