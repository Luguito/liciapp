import styled from 'styled-components';
import { ColorLiciGrayLighten3 } from '@common';
import { ColorLiciBackgroundWhite, } from '@common'

export const MainPageContainer = styled.div`
  display: flex;
  height: calc(100vh - 70px);
`;

export const PageContainer = styled.section`
    flex-grow: 1;
    background-color: ${ColorLiciGrayLighten3};
    padding:50px;    
    overflow-y:scroll;
    width:100%;
`;

export const CleanContent = styled.div`
  margin-left: 100px;
  width: 70%;
  min-width: 700px;
  background-color: ${ColorLiciBackgroundWhite};
  padding: 35px 50px;
  border-radius: 2px;
`
