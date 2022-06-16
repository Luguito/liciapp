import { FontLiciFamilyDefaultName } from '@common';
import { TextareaAutosize } from '@mui/material';
import styled from 'styled-components';

export const ContainerFields = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2em;
    margin-top: 1em;
`
export const TextArea = styled(TextareaAutosize)`
    font-family: ${FontLiciFamilyDefaultName};
    padding-left: 10px;
    padding-top: 5px;
`