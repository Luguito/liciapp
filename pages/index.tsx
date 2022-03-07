import React from 'react';
import Layout from '../layout'
import withAuth from '../utils/withAuth'


const indexPage = (props) => {
  return (
    <Layout userName=''>
      <h1>Dashboard</h1>;
    </Layout>
  )
};

indexPage.getInitialProps = async (context) => {
    const { user } = context.store.getState().app;
    return {
        user,
    }
};


export default withAuth(indexPage);
