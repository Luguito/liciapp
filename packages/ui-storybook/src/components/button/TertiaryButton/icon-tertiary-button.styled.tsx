import styled from 'styled-components';
import { StyledIconButton } from '../components/icon-button.styled';

import { withIcon } from '../button-hoc';
import { ButtonProps } from '../types';
import { TertiaryButtonStyles } from './tertiary-button-styles';

const IconTertiaryStyledButton = styled(StyledIconButton)<ButtonProps>`
    ${TertiaryButtonStyles}
`;

export const IconTertiaryButton = withIcon(IconTertiaryStyledButton);
