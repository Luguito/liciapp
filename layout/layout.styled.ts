import styled from 'styled-components';
import { ColorLiciGrayLighten3 } from '@addi-ui/foundation/dist/web/colors';
import { ColorLiciBackgroundWhite, } from '@addi-ui/foundation/dist/web/colors'

export const MainPageContainer = styled.div`
  display: flex;
  height: calc(100vh - 0px);
  width: calc(100vw - 0px);
`;

export const PageContainer = styled.section`
    flex-grow: 1;
    background-color: ${ColorLiciGrayLighten3};
    padding:50px;    
`;

export const CleanContent = styled.div`
  margin-left: 100px;
  width: 70%;
  min-width: 700px;
  background-color: ${ColorLiciBackgroundWhite};
  padding: 35px 50px;
  border-radius: 2px;
`
