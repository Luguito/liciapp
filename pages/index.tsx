import React from 'react';

import { LiciPage } from '../lici';
import withAuth from "../utils/withAuth";

const indexPage: LiciPage<{}, {}, {}> = (props) => {
  return <h1>Dashboard</h1>;
};

indexPage.getInitialProps = async (context) => {
    const { user } = context.store.getState().app;
    return {
        user,
    }
};

export default indexPage;
