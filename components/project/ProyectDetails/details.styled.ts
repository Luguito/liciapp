import styled from 'styled-components'
import { FontLiciFamilyDefaultName, ColorLiciFontError, ColorLiciPrimaryActive, ColorLiciGrayDarken1, ColorLiciGrayLighten3 } from '@common';
import { Button } from '@material-ui/core';

export const ContainerComponent = styled.div`
    font-family: ${FontLiciFamilyDefaultName};
`

export const HeaderContainer = styled.header`
    display: flex; 
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h3`
    font-family: ${FontLiciFamilyDefaultName};
    color: ${ColorLiciPrimaryActive};
    font-size: 2rem;
    font-weight: 400;
`
export const ComparateButton = styled(Button)`
    && {
        color: white;
        background-color: ${ColorLiciFontError};
        border-radius: 10px;
    }
`
export const DescriptionTitle = styled.h4`
    font-weight:500;
    color: ${ColorLiciPrimaryActive};
    font-family: ${FontLiciFamilyDefaultName};
`

export const StatusApp = styled.div`
    display: flex; 
    align-items: center;
    justify-content: flex-end;
    & > span {
        background-color: ${ColorLiciPrimaryActive};
        padding: 5px 3em;
        color: #FFF;
        border-radius: 7px;
    }   
`

export const ProyectRedirect = styled.span`
    color: ${ColorLiciGrayDarken1};
`

export const ContainerDates = styled.div`
    display: flex;
    gap: 2em;
`

export const Dates = styled.div`
    display: flex;
    flex-direction: column;
`

export const TitleDates = styled.span`
    font-family: ${FontLiciFamilyDefaultName};
    color: ${ColorLiciPrimaryActive};
    font-weight: 500;
    font-size:0.9rem;
`
export const ContentDates = styled.p`
    color: ${ColorLiciGrayDarken1};
`

export const SubTitle = styled.p`
    color: ${ColorLiciPrimaryActive};
    font-size: 1.3rem;
`
export const Content = styled.p`
    font-family: ${FontLiciFamilyDefaultName};
    color: ${ColorLiciGrayDarken1};
`

export const ShowDetailsDocument = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2em;
    color: ${ColorLiciPrimaryActive};
`
export const Table = styled.table`
    border-collapse: collapse;
    th {
        color: ${ColorLiciGrayDarken1};
        font-weight: 300;
    }
    th, td {
        border-bottom: 1px solid ${ColorLiciGrayLighten3};
        text-align: left;
        padding: 1em;
    }
    tr > td:first-child {
        color: ${ColorLiciPrimaryActive};
        font-weight: 600;
    }
`

export const ContainerMessages = styled.section`
    width:100%;
`

export const QuestionMessages = styled.section`
    max-width: 25em;
    background: #E5E6FF;
    position: relative;
    right: 0px;
    -moz-border-radius: 10px; 
    -webkit-border-radius: 10px; 
    border-radius: 10px;
    &:after{
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        left: auto;
        right: -20px;
        top: 0;
        bottom: auto;
        border-top: 4px solid transparent;
        border-left: 27px solid #E5E6FE;
        border-bottom: 13px solid transparent;
    }
`
export const AnswerMessages = styled.section`
    max-width: 25em;
    background: #F5F5F5;
    position: relative;
    left:100px;
    -moz-border-radius: 10px; 
    -webkit-border-radius: 10px; 
    border-radius: 10px;
    &:before {
        content:"";
        position: absolute;
        width: 0;
        height: 0;
        border-top: 4px solid transparent;
        border-right: 27px solid #F5F5F5;
        border-bottom: 13px solid transparent;
        margin: 2px 0 0 -25px;
    }
`

export const HoursMessage = styled.p`
    color: #B1AFAF;
    padding: 0.4em 0 0 1em;
`

export const TextMessage = styled.p`
    margin: 1em;
    padding:1em 0;
    word-wrap: break-word;
`

export const DocumentList = styled.div`
    width:100%;
`

export const DocumentItem = styled.div`
    border-top: 1px ${ColorLiciGrayLighten3} solid;
    border-bottom: 1px ${ColorLiciGrayLighten3} solid;
    padding: 0;
    a {
        display: flex;
        gap: 10px;
        align-items:center;
    }
`

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
