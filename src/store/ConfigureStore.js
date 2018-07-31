import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import { createBrowserHistory } from 'history';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import RootReducer from './Root.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const history = createBrowserHistory();

const configureStore = (preloadedState) => {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    connectRouter(history)(persistedReducer),
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger(), routerMiddleware(history)),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
  /* eslint-enable */

  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
