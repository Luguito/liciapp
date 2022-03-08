import { APP_ACTIONS, AppAction } from '../actions/app.actions';
import { AppState, initialState } from '../state';

function reducer(state: AppState = initialState.app, action: AppAction): AppState {
  switch (action.type) {
    case APP_ACTIONS.SET_LOADING:
      return {
        ...state,
        showLoader: action.loading,
      };
    case APP_ACTIONS.SET_USER:
      return {
        ...state,
        user: { ...action.user },
      };
    case APP_ACTIONS.LOGOUT:
      return {
        ...state,
        user: null,
      };
    case APP_ACTIONS.INIT_PROJECTS:
      console.log("List =>", action.list)
      return {
        ...state,
        projects: action.list
      }
    default:
      return state;
  }
}

export default reducer;
