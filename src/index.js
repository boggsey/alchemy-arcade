import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import 'whatwg-fetch';
import './index.css';
import App from './components/App';
import configureStore, { history } from './store/ConfigureStore';

const store = configureStore();
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}
