import styled, { css } from 'styled-components';
import { ColorLiciBackgroundWhite, ColorLiciPrimaryActive, ColorLiciGrayLighten3 } from '../../../../ui-foundation/dist/web/colors';
import { FontLiciWeightExtraBold } from '../../../../ui-foundation/dist/web/fonts';
const tabBordered = css `
    box-shadow: inset 0 0 0 3px ${ColorLiciPrimaryActive}

`;
const ContentShadow = `0 0 10px ${ColorLiciGrayLighten3}`;
const rightBorderShadow = `inset 4px -1px 5px -1px ${ColorLiciGrayLighten3}`;
const leftBorderShadow = `inset -3px -1px 5px -1px ${ColorLiciGrayLighten3}`;
export const TabsContainer = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
`;
export const MenuContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-bottom:8px
`;
export const TabHeader = styled.div `
    width: auto;
    position: initial;
    padding: 0 6px 6px 6px;
    margin: 6px;
    cursor: pointer;
    box-sizing: border-box;
    border-radius: 10px;
    -webkit-box-shadow: 0px -1px 6px 0px ${ColorLiciGrayLighten3};
    -moz-box-shadow: 0px -1px 6px 0px ${ColorLiciGrayLighten3};
    box-shadow: 0px -1px 6px 0px ${ColorLiciGrayLighten3};
    ${({ isSelected }) => isSelected && tabBordered}
`;
export const ContentContainer = styled.div `
    border-top: 2px solid ${ColorLiciPrimaryActive}

    padding: 15px 20px;
    margin-top: -1px;
    border-radius: 10px;
    font-weight: ${FontLiciWeightExtraBold} ;
    -webkit-box-shadow: ${ContentShadow};
    -moz-box-shadow: ${ContentShadow};
    box-shadow: ${ContentShadow};
`;
export const LineSelector = styled.div `
    height: 20px;
    position: absolute;
    bottom: -8px;
    left: ${({ index }) => index ? '-12px' : '0'};
    background-color: ${ColorLiciBackgroundWhite}

    width: ${({ index }) => index ? '128%' : '120%'};
    display: ${({ isSelected }) => isSelected ? 'block' : 'none'};
`;
export const TabsStory = styled.div `
    width: 320px;
    margin: 30px;
`;
export const RightBorderSeparator = styled.div `
    background-color: white;
    width: 20px;
    height: 20%;
    position: absolute;
    bottom: 1px;
    right: -20px;
    border-radius: 0 0 0 12px;
    overflow: hidden;
    display: ${({ isSelected }) => isSelected ? 'block' : 'none'};

    &:after {
        content: "";
        width: 25px;
        height: 25px;
        display: block;
        position: absolute;
        bottom: 0px;
        right: -2px;
        border-radius: 0 0 0 12px;
        -webkit-box-shadow: ${rightBorderShadow};
        -moz-box-shadow: ${rightBorderShadow};
        box-shadow: ${rightBorderShadow};
    }
`;
export const LeftBorderSeparator = styled.div `
    background-color: white;
    width: 20px;
    height: 20%;
    position: absolute;
    bottom: 1px;
    left: -20px;
    border-radius: 0 0 12px 0;
    overflow: hidden;
    display: ${({ isSelected, index }) => index && isSelected ? 'block' : 'none'};

    &:after {
        content: "";
        width: 25px;
        height: 25px;
        display: block;
        position: absolute;
        bottom: 0px;
        right: -2px;
        border-radius: 0 0 12px 0;
        -webkit-box-shadow: ${leftBorderShadow};
        -moz-box-shadow: ${leftBorderShadow};
        box-shadow: ${leftBorderShadow};
    }
`;
//# sourceMappingURL=tabs.styled.js.map