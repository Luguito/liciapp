import styled from 'styled-components';
import { Autocomplete, TextareaAutosize, TextField } from '@mui/material'
import { ColorLiciPrimaryActive } from '@common';


export const CustomAutoComplete = styled(Autocomplete)`
    width: 100%;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items:center;
    & p {
        margin: 20px 15px 0 0;
        color: ${ColorLiciPrimaryActive};
        font-weight: bold;
    }
`;

export const CustomTextField = styled(TextField)`
    && {
        width: 100%;
    }
`
export const ContainerCustomField = styled.div`
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-left: 2em;
`;

export const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    width:40%;
`
export const Label = styled('label')`
    padding: 0 0 4px;
    line-height: 1.5;
    display: block;
`;
