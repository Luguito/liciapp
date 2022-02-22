import { FC } from 'react';
import styled from 'styled-components';

import { ButtonProps } from '../types';
import { withIconDirection } from '../button-hoc';
import { StyledButton } from '../components/button.styled';
import { PrimaryButtonStyles } from './primary-button-styles';

const PrimaryStyledButton = styled(StyledButton)<ButtonProps>`
    ${PrimaryButtonStyles}
`;

export const PrimaryButton: FC<ButtonProps> = withIconDirection(PrimaryStyledButton);
