import styled from 'styled-components';
import { FontLiciFamilyDefaultName, ColorLiciFontError, ColorLiciPrimaryActive, ColorLiciGrayDarken1, ColorLiciGrayLighten1, ColorLiciGrayLighten5, ColorLiciGrayLighten4, ColorLiciGrayLighten3 } from '@common';
import { Button } from '@mui/material'

export const HeaderContainer = styled.header`
    display:flex;
    justify-content:space-between;
    align-items: center;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 400;
    font-family: ${FontLiciFamilyDefaultName};
    color: ${ColorLiciPrimaryActive};
`;
export const DeleteButton = styled(Button)`
    && {
        color: white;
        background-color: ${ColorLiciFontError};
        border-radius: 10px;
    }
`

export const DatePickerContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
`

export const ContainerInputs = styled.div`
    display: flex;
    gap: 20px;
`

export const ListDocuments = styled.ul`
    list-style: none;
    margin: 30px 0 0 0;
    padding: 0;
    color: ${ColorLiciGrayDarken1};
`
export const ElementList = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${ColorLiciGrayDarken1};
    padding-bottom: 8px;
`;
export const DocumentName = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    font-family: ${FontLiciFamilyDefaultName};
`

export const IconsList = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

export const SubTitle = styled.h3`
    && {
        font-weight: 400;
    }
    font-family: ${FontLiciFamilyDefaultName};
    color: rgb(126, 123, 123);
`
export const HeaderItems = styled.div`
    font-family: ${FontLiciFamilyDefaultName};
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
    border-bottom: 1px solid ${ColorLiciGrayDarken1};
    margin-left:10px;
    font-weight: 500;
    color: ${ColorLiciGrayDarken1};
`;

export const NewActionButton = styled(Button)`
    && {
        font-family: ${FontLiciFamilyDefaultName};
        background-color: ${ColorLiciPrimaryActive};
        color:white;
        font-weight:600;
        border-radius: 20px;
        padding:0.8em;
        margin-right:20px;
        margin-top: 2em;
     }
`

export const ContainerItems = styled.ul`
    font-family: ${FontLiciFamilyDefaultName};
    list-style: none;
    padding: 0 0.7em 0 0.7em;
`
export const Items = styled.li`
    display: flex;
    align-items: center;
    padding: 0.8em;
    border-bottom: 0.9px solid ${ColorLiciGrayLighten3};
    gap: 1em;
    cursor: pointer;
    color: ${ColorLiciPrimaryActive};
    &:hover {
        background-color: ${ColorLiciGrayLighten4};
    }
`