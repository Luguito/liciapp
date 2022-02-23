import styled from 'styled-components';
import { withIcon } from '../button-hoc';
import { PrimaryButtonStyles } from './primary-button-styles';
import { StyledIconButton } from '../components/icon-button.styled';
const IconPrimaryStyledButton = styled(StyledIconButton) `
    ${PrimaryButtonStyles}
`;
export const IconPrimaryButton = withIcon(IconPrimaryStyledButton);
//# sourceMappingURL=icon-primary-button.styled.js.map