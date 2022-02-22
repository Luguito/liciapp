import styled from 'styled-components';
import { 
    Grid, 
    Card as card, 
    Typography,
    TextField as textField,
    Button as button
} from '@material-ui/core';

export const LoginContainer = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    height: 100vh;
    background: #2e3192;
    font-family:'Roboto'
`
export const BackgroundComplement = styled.img`
    position: absolute;
    bottom: 0;
    right:0;
    z-index:0;
`
export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
export const Logo = styled.img`
    position: relative;
    width: 130px;
`

export const Card = styled.div`
    width: 350px;
    min-height:298px;
    padding: 30px;
    border-radius: 2px;
    background-color: #fff;
    z-index:1;
    display: flex;
    align-items:center;
    flex-direction: column;
`
export const Title = styled(Typography)`
    && {
        color: #2e3192;
        font-size: 1.025rem;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.2;
        letter-spacing: 0.08px;
        text-align: center;
    }
`

export const SubTitle = styled(Typography)`
    &&{
        color: rgba(102, 102, 102, 0.87);
        font-size: 0.9rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.5;
        letter-spacing: 0.07px;
        text-align: center;
    }
`

export const Caption = styled(Typography)`
    &&{
        color: rgba(136, 135, 135, 0.87);
        font-size: 0.838rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.57;
        letter-spacing: 0.14px;
        text-align: left;
    }
`

export const ContainerField= styled.div`
   margin-top:12px;
`
export const ContainerButton = styled.div`
   margin:30px 0; 
   width:100%;
   text-align:right
`


export const Button = styled(button)`
    text-align: right
`