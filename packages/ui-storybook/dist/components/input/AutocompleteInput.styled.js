import { ColorLiciBackgroundWhite } from '../../../../ui-foundation/dist/web/colors';
//import { SizeLiciFontXxSmall } from '../../../../ui-foundation/dist/web/sizes'
import styled from 'styled-components';
//import { Icon } from 'styled-icon';
export const SuggestionsContainer = styled.div `
    position: absolute;
    top: 35px;
    width: 100%;
    max-height: ${props => props.suggestionsBoxHeight};
    overflow-y: auto;
    z-index: 99;
    box-shadow: 0 2px 5px rgb(0 0 0 / 28%);
`;
export const SuggestionsList = styled.ul `
    margin: 0;
    padding: 8px 0;
    list-style: none;
    background-color: ${ColorLiciBackgroundWhite};
`;
export const SuggestionItem = styled.li `
    cursor: ${props => (props.disableHighLighted ? 'auto' : 'pointer')};
    display: flex;
    outline: 0;
    box-sizing: border-box;
    align-items: center;
    padding: 6px 16px 6px 16px;
    justify-content: flex-start;
    -webkit-tap-highlight-color: transparent;

    &:hover {
        background-color: ${props => props.disableHighLighted ? ColorLiciBackgroundWhite : 'rgba(0, 0, 0, 0.04)'};
    }
`;
/*export const ArrowIcon = styled(Icon)`
    position: absolute;
    top: 12px;
    right: 0;
    color: ${ColorLiciFontPrimary};
    font-size: ${SizeLiciFontXxSmall};
    z-index: 1;
    cursor: pointer;
`;*/
//# sourceMappingURL=AutocompleteInput.styled.js.map