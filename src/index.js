import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import 'whatwg-fetch';
import './index.css';
import App from './components/App';
import configureStore, { history } from './store/ConfigureStore';

const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<div />} persistor={persistor}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
