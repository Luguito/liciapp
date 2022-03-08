//import { User } from '@addi-domains/identity-management';

export interface AppState {
  showLoader: boolean;
  user: any,
  projects: IProyect[]
};


export type GlobalState = {
  app: AppState,
};

export const initialState: GlobalState = {
  app: {
    showLoader: false,
    user: null,
    projects: []
  },
};

// State of Proyects

export interface IProyect {
  "project-id": {
    "id": string
  },
  "full": {
    "name": string
  },
  "details": {
    "description": string
  },
  "project-start": {
    "date": string
  },
  "project-end": {
    "end": string
  },
  "technical-sheet": {
    "collections": Array<Object>
  },
  "project-documents": {
    "collections": Array<any>
  },
  "organizations": {
    "collections": Array<string>
  },
  "status": {
    "name": string
  }
}