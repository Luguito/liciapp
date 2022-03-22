import { FC, Fragment, useEffect, useReducer, useState } from 'react';
import { LayoutProps } from './layout';
import { useRouter } from 'next/router';
import Header from './header';
import { MainPageContainer, PageContainer, CleanContent } from './layout.styled';
import SideBar from './side-bar';

const reducerLayout = (state, action) => {
  switch (action?.type) {
    case 'update':
      return state - 1;
    case 'reset':
      return state = 30;
    default:
      return state;
  }
}

const Layout: FC<LayoutProps> = (props) => {
  const [state, dispatch] = useReducer(reducerLayout, 30);
  const router = useRouter();

  useEffect(() => {
    dispatch({ type: 'reset' }) // Everytime user navigate we reset the counter
    setInterval(() => { dispatch({ type: 'update' }); }, 60000); // 1 minute
  }, []);

  useEffect(() => {
    if (state <= 0) {
      logout()
    }
  }, [state])


  const logout = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
    }
    router.push('/login')
  }

  const { userName } = props;
  return (
    <>
      <Fragment>
        <Header userName={userName} />
        <MainPageContainer>
          <SideBar />
          <PageContainer>
            <CleanContent>
              {props.children}
            </CleanContent>
          </PageContainer>
        </MainPageContainer>
      </Fragment>
    </>
  );
};

export default Layout;
