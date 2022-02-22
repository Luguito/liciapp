import { FC } from 'react';
import styled from 'styled-components';

import { withIcon } from '../button-hoc';
import { ButtonProps } from '../types';
import { PrimaryButtonStyles } from './primary-button-styles';
import { StyledIconButton } from '../components/icon-button.styled';

const IconPrimaryStyledButton = styled(StyledIconButton)<ButtonProps>`
    ${PrimaryButtonStyles}
`;

export const IconPrimaryButton: FC<ButtonProps> = withIcon(IconPrimaryStyledButton);
