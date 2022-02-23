import styled from 'styled-components';
import { StyledIconButton } from '../components/icon-button.styled';
import { withIcon } from '../button-hoc';
import { TertiaryButtonStyles } from './tertiary-button-styles';
const IconTertiaryStyledButton = styled(StyledIconButton) `
    ${TertiaryButtonStyles}
`;
export const IconTertiaryButton = withIcon(IconTertiaryStyledButton);
//# sourceMappingURL=icon-tertiary-button.styled.js.map