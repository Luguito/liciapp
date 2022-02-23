import styled from 'styled-components';
import { withIcon } from '../button-hoc';
import { SecondaryButtonStyles } from './secondary-button-styles';
import { StyledIconButton } from '../components/icon-button.styled';
const IconSecondaryStyledButton = styled(StyledIconButton) `
    ${SecondaryButtonStyles}
`;
export const IconSecondaryButton = withIcon(IconSecondaryStyledButton);
//# sourceMappingURL=icon-secondary-button.styled.js.map