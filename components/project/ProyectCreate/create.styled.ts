import { FontLiciFamilyDefaultName, ColorLiciPrimaryActive, ColorLiciGrayDarken1, ColorLiciGrayLighten3 } from '@common';
import { TextareaAutosize } from '@mui/material';
import { Button } from '@mui/material';
import styled from 'styled-components';

export const ContainerComponent = styled.div`
    font-family: ${FontLiciFamilyDefaultName};
`

export const HeaderCreate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const TitleContainer = styled.div`
    display:flex;
    align-items:center;
    gap: 1em;
`
export const TitleCreate = styled.h1`
    color: ${ColorLiciPrimaryActive};
    && {
        font-size: 2rem;
        font-weight: 400;
    }
`

export const SubTitleCreate = styled.h4`
    color: ${ColorLiciGrayDarken1};
    font-weight: 400;
`

export const CustomInput = styled.input.attrs({
    type: "text"
})``

export const TextArea = styled(TextareaAutosize)`
    font-family: ${FontLiciFamilyDefaultName};
    padding-left: 10px;
    padding-top: 5px;
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

export const DobleContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    gap: 1em;
    margin-top: 10px;
`

export const InputDate = styled.input.attrs({
    type: 'date'
})`
    margin-top: 10px;
    width: 50%;
    height: 3em;
    border-radius: 5px;
    outline: none;
    border: 1px solid grey;
`

export const DocumentInput = styled.input.attrs({
    type: 'file',
})`
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    height: 2em;
    border-radius: 7px;
    outline: none;
    border: 1px solid grey;
`
export const NextButton = styled(Button)`
    && {
        background-color: ${ColorLiciPrimaryActive};
        color: white;
    }
`

export const ContainerButton = styled.div`
    display:flex;
    align-items:center;
    justify-content: flex-end;
    margin-top: 20px;
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
export const HeaderItems = styled.div`
    font-family: ${FontLiciFamilyDefaultName};
    display: grid;
    grid-template-columns: 4fr 1fr 1fr 1fr 1fr;
    border-bottom: 1px solid ${ColorLiciGrayDarken1};
    margin-left:10px;
    font-weight: 500;
    color: ${ColorLiciGrayDarken1};
`;