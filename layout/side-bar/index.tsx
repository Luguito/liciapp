import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Ballot, Group } from '@material-ui/icons';
import LogoutIcon from '@mui/icons-material/Logout';
import {
  ColorLiciPrimaryActive,
  ColorLiciGrayDarken1
} from '@common';

import { SideBarProps } from './side-bar';
import {
  SideBarContainer,
  NavItemWrapper,
  NavItemText,
  NavList,
  NavActions,
  UserInfo,
  IsoLogo,
  UserName,
  CompanyName,
  Divider
} from './side-bar.styled';

const SideBar: FC<SideBarProps> = () => {
  const router = useRouter();
  const routes = {
    home: '/',
    users: '/usuario',
    projects: '/proyecto',
    logout:'/logout'
  };

  const logout = () => {
      if (typeof window !== 'undefined') {
          localStorage.removeItem('TOKEN')
      }
      router.push('/login')
  }

  return (
    <SideBarContainer>
      <UserInfo>
        <IsoLogo></IsoLogo>
        <UserName> Usuarios SAS</UserName>
        <CompanyName>Empresa</CompanyName>
      </UserInfo>
      <NavList>
        <Link href={routes.projects}>
          <NavItemWrapper isActive={ router.pathname === routes.projects}>
            <NavItemText >
              <Ballot style={{'color': router.pathname === routes.projects ? ColorLiciPrimaryActive: ColorLiciGrayDarken1}}></Ballot>
              <span>Proyectos</span>
            </NavItemText>
          </NavItemWrapper>
        </Link>
        <Link href={routes.users}>
          <NavItemWrapper isActive={router.pathname === routes.users}>
            <NavItemText >
              <Group style={{'color': router.pathname === routes.users ? ColorLiciPrimaryActive : ColorLiciGrayDarken1}}></Group>
              <span>Usuarios</span>
            </NavItemText>
          </NavItemWrapper>
        </Link>
        <Divider/>
        <Link href={'/'}>
          <NavItemWrapper onClick={logout}>
            <NavItemText >
              <LogoutIcon style={{'color': ColorLiciGrayDarken1}}/>
              <span>Logout</span>
            </NavItemText>
          </NavItemWrapper>
        </Link>
      </NavList>
      <NavActions>
      </NavActions>
    </SideBarContainer>
  );
};

export default SideBar;
