import React, { useState } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import createStore, { LiciAppStore } from '../store';
import getConfig from 'next/config';
import Head from 'next/head';
import { getRedirectUrl } from '../config';
import { PageContext } from '../lici';
import Router from 'next/router';
import { APP_ACTIONS } from '../store/actions/app.actions';
import Layout from '../layout';
import '../styles/global.css';



function MyApp({ Component, pageProps, store }: AppProps & { store: LiciAppStore; user: any }) {
  
  return (
    // @ts-ignore This is a conflict with withRedux lib
    <Provider store={store}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
        <link rel='icon' type='image/png' href='favicon.png' />
      </Head>

      <Layout userName={''}>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const { Component, ctx } = appContext;
  // @ts-ignore  -- ctx has no field store in typings
  const store: AlliesAppStore = ctx.store;

 
  if (ctx.req && ctx.res) {
    const { res } = ctx;
    

  }

  const appProps = await App.getInitialProps(appContext);

  return { ...appProps, namespacesRequired: ['common'] };
};

export default withRedux(createStore)(MyApp);
