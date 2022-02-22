import { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps } from '../types';
import { withIconDirection } from '../button-hoc';
import { StyledButton } from '../components/button.styled';
import { SecondaryButtonStyles } from './secondary-button-styles';

const SecondaryStyledButton = styled(StyledButton)<ButtonProps>`
    ${SecondaryButtonStyles}
`;

export const SecondaryButton: FC<ButtonProps> = withIconDirection(SecondaryStyledButton);
