import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import DevTools from '../containers/DevTools';
import RootReducer from './Root.reducer';

const configureStore = (preloadedState) => {

  const store = createStore(
    RootReducer,
    preloadedState,
    compose(
      applyMiddleware(thunk, createLogger()),
      DevTools.instrument(),
    ),
  );

  return store;
};

export default configureStore;
