import styled from 'styled-components';
import { Autocomplete, TextareaAutosize, TextField } from '@mui/material'


export const CustomAutoComplete = styled(Autocomplete)`
    width: 60%;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CustomTextField = styled(TextField)`
    && {
        width: 15%;
    }
`
export const ContainerCustomField = styled.div`
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-left: 2em;
`;