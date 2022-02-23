import styled from 'styled-components';
import {
  ColorLiciPrimaryActive,
  ColorLiciWhite
} from '@common';
import { SizeLiciFontBase } from '@common';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  color: ${ColorLiciWhite};
  background-color: ${ColorLiciPrimaryActive};
`;

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
`
export const BrandText = styled.h1`
  && {
    font-size: ${SizeLiciFontBase}
  }
`

export const NavIcon = styled.div`
  padding: 4px 17px 0 0;
`;

