import { NextPageContext, NextComponentType } from 'next';
import { LiciAppStore } from './store';

// The params that page.getInitialProps will receive for all pages
export type PageContext = {
  store: LiciAppStore;
} & NextPageContext;

// The types of the pages in the in-Store app, all of them receiving extra fields in context
export type LiciPage<Props = {}, InitialProps = Props, handleRefresh, events = []> = 
NextComponentType<PageContext, InitialProps, Props>
