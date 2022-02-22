//import { User } from '@addi-domains/identity-management';

export interface AppState {
  showLoader: boolean;
  user: any
};


export type GlobalState = {
  app: AppState
};

export const initialState: GlobalState = {
  app: {
    showLoader: false,
    user: null
  },
};
