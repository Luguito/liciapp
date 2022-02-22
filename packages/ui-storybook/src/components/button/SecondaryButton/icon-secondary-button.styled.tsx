import { FC } from 'react';
import styled from 'styled-components';

import { withIcon } from '../button-hoc';
import { ButtonProps } from '../types';
import { SecondaryButtonStyles } from './secondary-button-styles';
import { StyledIconButton } from '../components/icon-button.styled';

const IconSecondaryStyledButton = styled(StyledIconButton)<ButtonProps>`
    ${SecondaryButtonStyles}
`;

export const IconSecondaryButton: FC<ButtonProps> = withIcon(IconSecondaryStyledButton);
