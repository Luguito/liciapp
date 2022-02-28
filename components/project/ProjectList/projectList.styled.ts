import { Header2 } from '@common';
import { ColorLiciPrimaryActive, FontLiciFamilyDefaultName } from '@common'
import { FontLiciWeightRegular, FontLiciWeightMedium } from '@common'
import { SizeLiciFontXxSmall } from '@common'
import { Caption as caption } from '@common'
import { Button } from '@mui/material';
import styled from 'styled-components';
import Tab, { tabClasses } from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export const ProjectContainer = styled.div`
    font-family: ${FontLiciFamilyDefaultName};
`
export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const CustomButton = styled(Button)`
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
export const Title = styled(Header2)`
    margin:0;
    && {
        color: ${ColorLiciPrimaryActive};
        font-weight: ${FontLiciWeightRegular};
    }
`

export const NewTab = styled(Tab)`
    font-family: Roboto;
    color: white;
    cursor: pointer;
    font-size: 0.875rem;
    font-weight: bold;
    background-color: transparent;
    width: 110px;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: flex-start;
    
    && {
        align-items: flex-start;
        margin: 0;
        padding: 0;
    }
  
    &.${tabClasses.selected} {
        && {
            color: ${ColorLiciPrimaryActive};
            border-bottom:none;
        }
    }
`;

export const NewTabs = styled(Tabs)`
    && {
        & .MuiTabs-indicator {
                display: none ;
        }
    }
`

export const TabsRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin:30px 0;
`

export const Caption = styled(caption)`
    && {
        color: ${ColorLiciPrimaryActive};

    }
`


