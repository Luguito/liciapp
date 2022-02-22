import { Header2, Tabs as tabs } from '@lici-ui/components';
import { ColorLiciPrimaryActive } from '@addi-ui/foundation/dist/web/colors'
import { FontLiciWeightRegular, FontLiciWeightMedium } from '@addi-ui/foundation/dist/web/fonts'
import { SizeLiciFontXxSmall } from '@addi-ui/foundation/dist/web/sizes'
import { PrimaryButton, Caption as caption } from '@lici-ui/components'
import styled from 'styled-components';
import Tab, {tabClasses} from '@mui/material/Tab';  
import Tabs from '@mui/material/Tabs';  

export const ProjectContainer = styled.div`
    
`
export const HeaderContainer= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
` 
export const Button = styled(PrimaryButton)`
    && {
        font-weight: ${FontLiciWeightMedium};
        font-size: ${SizeLiciFontXxSmall};
        padding: 0 16px;
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

  
