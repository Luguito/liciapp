import { FC, Fragment } from 'react';
import { LayoutProps } from './layout';
import { useRouter} from 'next/router';
import Header from './header';
import { MainPageContainer, PageContainer, CleanContent } from './layout.styled';
import SideBar from './side-bar';

const Layout: FC<LayoutProps> = (props) => {
  const  { userName } = props
  return (
    <>
        <Fragment>
          <Header userName={ userName } /> 
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
