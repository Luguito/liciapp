import styled from 'styled-components';
import {
  ColorLiciBackgroundWhite,
  ColorLiciCompFiveLighten4,
  ColorLiciPrimaryActive,
  ColorLiciGrayDarken1,
  ColorLiciGrayLighten2,
  ColorLiciCompFiveBase,
  ColorLiciFontPrimary
} from '@common';

import { FontLiciFamilyDefaultName, FontLiciWeightRegular, FontLiciWeightSemiBold } from '@common';

export const SideBarContainer = styled.div`
  background-color: ${ColorLiciBackgroundWhite};
  width: 300px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 23px 0 ${ColorLiciGrayLighten2};
`;

export const NavList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const NavItemWrapper = styled.li<{isActive?: boolean}>`
  font-family: '${FontLiciFamilyDefaultName}';
  font-size: 0.85rem;
  font-weight: ${FontLiciWeightSemiBold};
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 20px 10px 20px 30px;
  cursor: pointer;
  text-decoration: none;
  color: ${({isActive}) => isActive ? ColorLiciPrimaryActive : ColorLiciGrayDarken1};
  background-color: ${({isActive}) => isActive ? ColorLiciCompFiveLighten4 : ColorLiciBackgroundWhite};
`;

export const NavItemText = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
  & span {
    margin-left: 20px
  }
`;

export const NavActions =  styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 10px 20px 30px;
`;

export const UserInfo = styled.div`
  width:100%;
  padding: 20px 10px 45px 30px;
  display:flex;
  flex-direction: column;
`
export const IsoLogo = styled.div`
  width: 40px;
  height: 40px;
  background: ${ColorLiciCompFiveBase};
  border-radius:50%;
  overflow:hidden;
`
export const UserName = styled.p`
  margin: 1.5em 0 0 0;
  padding:0;
  font-family: '${FontLiciFamilyDefaultName}';
  font-weight: ${FontLiciWeightSemiBold};
  color: ${ColorLiciFontPrimary};
  font-size:1.25rem
`
export const CompanyName = styled.span`
  margin: 0;
  padding:0;
  font-family: '${FontLiciFamilyDefaultName}';
  font-size: 0.75rem;
  color: ${ColorLiciGrayDarken1};
`
export const Divider = styled.hr`
  width: 80%;
  border-bottom: 1px solid ${ColorLiciGrayLighten2}
`
