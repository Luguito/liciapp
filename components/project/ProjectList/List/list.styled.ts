import styled from 'styled-components';
import { Title as title, Subtitle as subtitle, Caption as caption, Paragraph as paragraph} from '@common';
import { 
    ColorLiciPrimaryActive, 
    ColorLiciWhite, 
    ColorLiciGrayLighten2,
    ColorLiciGrayDarken1,
    ColorLiciGrayBase,
    ColorLiciCompFourAccentLighten2
} from '@common'
import BadgeUnstyled from '@mui/base/BadgeUnstyled';

import { 
    FontLiciWeightLight,
    FontLiciWeightMedium,
    FontLiciWeightRegular
} from '@common'

import { 
    SizeLiciFontSmall
} from '@common'

export const ListContainer = styled.div`
    display: flex;
    margin: 0;
    padding: 0;
    width:100%;
    flex-wrap: wrap
`
export const ProyectCard = styled.div`
    background: ${ColorLiciWhite};
    width: 400px;
    height:270px;
    padding:20px;
    box-shadow: 0 1.5px 3px 0 ${ColorLiciGrayLighten2};
    position:relative;
    display: flex;
    flex-direction: column;
    margin: 10px;
`

export const HeaderCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const BodyCard = styled.div`
    margin: 20px 0;
`
export const Description = styled(subtitle)`
    && {
        color: ${ColorLiciPrimaryActive};
        font-weight:${FontLiciWeightMedium};
        font-size: ${SizeLiciFontSmall};
        margin:0;
        padding:0;
    }
` 

export const Schedule = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
    
    & span {
        margin-bottom:10px
    }
` 

export const ActionsCard = styled.div`
    width:100%;
    display: flex;
    justify-content: space-between;
    /* push footer to bottom */
    margin-top: auto;
`

export const RightActions = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    right:20px;
`
export const LeftActions = styled.div`
    display: flex;
    align-items: flex-end;
`



export const Subtitle = styled(subtitle)`
    && {
        color: ${ColorLiciGrayDarken1};
        font-weight:${FontLiciWeightLight};
        font-size: ${SizeLiciFontSmall};
        margin:0;
        padding:0;
    }
    
`

export const Paragraph = styled(paragraph)`
    && {
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        font-weight: ${FontLiciWeightRegular};
        color:  ${ColorLiciGrayDarken1};
    }
`

export const Title = styled(title)`
    
`
export const Caption = styled(caption)`
    && {
        color: ${ColorLiciPrimaryActive};
    }
`

export const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.85);
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol';
  position: relative;
  display: inline-block;
  line-height: 1;

  & .MuiBadge-badge {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: ${ColorLiciCompFourAccentLighten2};
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
  }

  & .MuiBadge-dot {
    padding: 0;
    z-index: auto;
    min-width: 6px;
    width: 6px;
    height: 6px;
    background: ${ColorLiciCompFourAccentLighten2};
    border-radius: 100%;
    box-shadow: 0 0 0 1px #fff;
  }

  & .MuiBadge-anchorOriginTopRight {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`;