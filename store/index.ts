import createSagaMiddleware from 'redux-saga';
import {
    Store,
    Reducer,
    Middleware,
    createStore,
    StoreEnhancer,
    applyMiddleware,
    combineReducers
} from 'redux';

import { Actions } from './actions';
import { GlobalState } from './state';
import { getNodeEnv } from '../config';

import rootReducer from './reducers/app.reducers';
import rootSaga from '../sagas'

export type LiciAppStore = Store<GlobalState, Actions>;

function bindMiddleware(middleware: Middleware[]): StoreEnhancer {
    if (getNodeEnv() !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}

const reducers: Reducer<GlobalState> = combineReducers<GlobalState>({
    app: rootReducer
});

function configureStore(initialState: GlobalState) {
    const sagaMiddleware = createSagaMiddleware();
    const middleware = [sagaMiddleware];

    const store = createStore(
        reducers,
        initialState,
        bindMiddleware(middleware)
    )
    
    // @ts-ignore
    store.sagaTask = sagaMiddleware.run(rootSaga)

    return store;
}

export default configureStore
