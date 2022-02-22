import { Action as ReduxAction } from 'redux';

export enum APP_ACTIONS {
  SET_LOADING = 'APP.SET_LOADING',
  SET_USER = 'APP.SET_USER',
  LOGOUT = 'APP.LOGOUT',
}

export interface SetLoadingAction extends ReduxAction {
  type: APP_ACTIONS.SET_LOADING;
  loading: boolean;
}

export interface SetUserAction extends ReduxAction {
  type: APP_ACTIONS.SET_USER;
  user: any;
}

export interface LogoutAction extends ReduxAction {
  type: APP_ACTIONS.LOGOUT;
}



export type AppAction = 
  | SetLoadingAction
  | SetUserAction
  | LogoutAction;

