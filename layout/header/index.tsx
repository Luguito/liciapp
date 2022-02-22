import { FC, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import Image from 'next/image';
import { HeaderProps } from './header';
import { APP_ACTIONS, LogoutAction } from '../../store/actions/app.actions';
import { Nav, NavIcon, BrandContainer, BrandText} from './header.styled';
import getConfig from 'next/config';

const Header: FC<HeaderProps> = (props) => {
  const { userName } = props
  const dispatch = useDispatch();
  const { publicRuntimeConfig } = getConfig();
  const handleUserActions = (value: string) => {
    dispatch<LogoutAction>({ type: APP_ACTIONS.LOGOUT });
    //window.location.href = logoutUrl({});
  }

  useEffect(()=>{
    console.log(publicRuntimeConfig)
    dispatch({type: APP_ACTIONS.SET_LOADING})
  },[])
  return (
    <Nav>
      <BrandContainer>
        <NavIcon>
          <img  src="/assets/logo_claro.svg" alt='LICI' width="70px"  />
        </NavIcon>
        <BrandText>{/*LICI*/}</BrandText>
      </BrandContainer>
      
    </Nav>
  );
};

export default Header;
