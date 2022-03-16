import styled from 'styled-components';
import { ColorLiciGrayDarken1, ColorLiciPrimaryActive, FontLiciFamilyDefaultName, ColorLiciGrayLighten3, ColorLiciCompFiveBase} from 'components/common';
import { TextareaAutosize } from '@mui/material';
import { Button } from '@material-ui/core';

export const Logo = styled.div`
  width: 40px;
  height: 40px;
  background: ${ColorLiciCompFiveBase};
  border-radius:50%;
`

export const TitleCreate = styled.h1`
    color: ${ColorLiciPrimaryActive};
    font-family: ${FontLiciFamilyDefaultName};
    && {
        font-size: 2rem;
        font-weight: 400;
    }
`

export const SubTitle = styled.h4`
    font-family: ${FontLiciFamilyDefaultName};
    && {
        font-weight: 400;
    }
`

export const ContainerFlex = styled.article`
    display: flex;
    justify-content: space-between;
    gap: 2em;
    margin-top: 1.5em;
`

export const TextArea = styled(TextareaAutosize)`
    && {
        height: 10em!important;
    };
    font-family: ${FontLiciFamilyDefaultName};
    padding-left: 10px;
    padding-top: 5px;
    width: 100%;
    margin-top: 1.5em;
`

export const PurpleButton = styled(Button)`
    && {
        background-color: ${ColorLiciPrimaryActive};
        color: white;
        margin-top: 10px;
    }
`

// Lista de documentos

export const TitleDocuments = styled.h3`
    color: rgb(102,102,102);
    border-bottom: 1px solid ${ColorLiciGrayLighten3};
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ListDocuments = styled.ul`
    list-style: none;
    margin: 30px 0 0 0;
    padding: 0;
    color: ${ColorLiciGrayDarken1};
    font-family: ${FontLiciFamilyDefaultName};
`

export const ElementList = styled.li`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${ColorLiciGrayDarken1};
    align-items: center;
    padding: 9px 0;
`;

export const ItemList = styled.div`
    display: flex; 
    flex-direction: column; 
    gap: 1em;
`

export const IconsList = styled.div`
    display: flex;
    gap: 2em;
`

export const DocumentName = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    font-family: ${FontLiciFamilyDefaultName};
`