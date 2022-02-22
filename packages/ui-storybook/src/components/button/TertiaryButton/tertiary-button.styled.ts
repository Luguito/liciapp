import styled from 'styled-components';
import { StyledButton } from '../components/button.styled';

import { withIconDirection } from '../button-hoc';
import { ButtonProps } from '../types';
import { TertiaryButtonStyles } from './tertiary-button-styles';

const TertiaryStyledButton = styled(StyledButton)<ButtonProps>`
    ${TertiaryButtonStyles}
`;

export const TertiaryButton = withIconDirection(TertiaryStyledButton);
