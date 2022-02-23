import styled from 'styled-components';
import { withIconDirection } from '../button-hoc';
import { StyledButton } from '../components/button.styled';
import { SecondaryButtonStyles } from './secondary-button-styles';
const SecondaryStyledButton = styled(StyledButton) `
    ${SecondaryButtonStyles}
`;
export const SecondaryButton = withIconDirection(SecondaryStyledButton);
//# sourceMappingURL=secondary-button.styled.js.map