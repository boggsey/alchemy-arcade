import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from './Root.reducer';

export const history = createBrowserHistory();

const configureStore = (preloadedState) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    connectRouter(history)(RootReducer),
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger(), routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
  /* eslint-enable */

  return store;
};

export default configureStore;
