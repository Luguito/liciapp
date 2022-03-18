import { FC, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Ballot, Group } from '@material-ui/icons';
import BusinessIcon from '@mui/icons-material/Business';
import LogoutIcon from '@mui/icons-material/Logout';
import StickyNote2Icon from '@mui/icons-material/StickyNote2';
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
import { useRolePermission } from '../../utils/permissionRole';

interface Route {
  label: string,
  path: string,
  iconName: string
}

const SideBar: FC<SideBarProps> = () => {
  const router = useRouter();
  const currentUser = useRolePermission();

  const routess = currentUser?.routesAvailables;
  console.log(routess)
  const routes = {
    home: '/',
    users: '/usuario',
    projects: '/proyecto',
    logout: '/logout'
  };

  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
    }
    router.push('/login')
  }
  const iconsAllowed = { Ballot }

  const dinamicIcon = (route: Route) => {
    const Component = iconsAllowed[route.iconName];
    return (<Component style={{ 'color': router.pathname === route.path ? ColorLiciPrimaryActive : ColorLiciGrayDarken1 }} />)
  }
  const components = {
    ballot: Ballot,
    group: Group,
    company: BusinessIcon,
    cv: StickyNote2Icon
  }

  return (
    <SideBarContainer>
      <UserInfo>
        <IsoLogo>
          <img src="../public/assets/lici.jpeg" alt="Logo" />
        </IsoLogo>
        <UserName>{currentUser?.name}</UserName>
        {/* <CompanyName>Empresa</CompanyName> */}
      </UserInfo>
      {false && <NavList>
        <Link href={routes.projects}>
          <NavItemWrapper isActive={router.pathname === routes.projects}>
            <NavItemText >
              <Ballot style={{ 'color': router.pathname === routes.projects ? ColorLiciPrimaryActive : ColorLiciGrayDarken1 }}></Ballot>
              <span>Proyectos</span>
            </NavItemText>
          </NavItemWrapper>
        </Link>
        <Link href={routes.users}>
          <NavItemWrapper isActive={router.pathname === routes.users}>
            <NavItemText >
              <Group style={{ 'color': router.pathname === routes.users ? ColorLiciPrimaryActive : ColorLiciGrayDarken1 }}></Group>
              <span>Usuarios</span>
            </NavItemText>
          </NavItemWrapper>
        </Link>
        <Divider />
        <Link href={'/'}>
          <NavItemWrapper onClick={logout}>
            <NavItemText >
              <LogoutIcon style={{ 'color': ColorLiciGrayDarken1 }} />
              <span>Logout</span>
            </NavItemText>
          </NavItemWrapper>
        </Link>

      </NavList>}
      <NavList>
        {
          routess?.map((route, index) => {
            const Icon = components[route.iconName];

            return (
              <Link href={route.path} key={index}>
                <NavItemWrapper isActive={router.pathname === route.path}>
                  <NavItemText >
                    <Icon style={{ 'color': router.pathname === route.path ? ColorLiciPrimaryActive : ColorLiciGrayDarken1 }} />
                    <span>{route.label}</span>
                  </NavItemText>
                </NavItemWrapper>
              </Link>
            )
          })
        }
        <Divider />
        <Link href={'/'}>
          <NavItemWrapper onClick={logout}>
            <NavItemText >
              <LogoutIcon style={{ 'color': ColorLiciGrayDarken1 }} />
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
