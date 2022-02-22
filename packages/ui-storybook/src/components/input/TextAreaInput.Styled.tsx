import styled, { css } from 'styled-components';
import { ColorLiciFontError } from '../../../../ui-foundation/dist/web/colors';
import { TextArea, InputLabel } from './TextInput.styled';

export const InputContainer = styled.div<{ error: boolean | undefined | null }>`
    width: 100%;
    height: auto;
    position: relative;

    ${props => props.error && css`
        ${InputLabel} > span {
            color: ${ColorLiciFontError};
        }
        ${TextArea} {
            border-color: ${ColorLiciFontError};
        }

    `}
`;
