import { FC, Fragment } from 'react';
import { EmptyLayoutProps } from './layout';
import { MainPageContainer, PageContainer, CleanContent } from './layout.styled';

const EmptyLayout: FC<EmptyLayoutProps> = (props) => {
  const  { userName } = props
  return (
    <>
        <Fragment>
          <MainPageContainer>
                  {props.children}
          </MainPageContainer>
        </Fragment>
    </>
  );
};

export default EmptyLayout;
