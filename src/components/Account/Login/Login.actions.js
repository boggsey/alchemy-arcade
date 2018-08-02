import { push } from 'connected-react-router';
import { show, success, error, warning, info, hide, removeAll } from 'react-notification-system-redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './Login.constants';
import { receiveAuth } from '../Auth/Auth.actions';

export function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds,
  };
}

export function receiveLogin(user, token) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    id_token: token,
    user,
  };
}

export function errorLogin(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message,
  };
}

async function loginRequest(user) {
  const response = await fetch('https://players-api.developer.alchemy.codes/api/login', {
    headers: { 'Content-type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(user),
  });
  return response.json();
}

const login = (user) => { 
  return async (dispatch) => {
    dispatch(requestLogin(user));
    try {
      const data = await loginRequest(user);
      if (data.success) {
        window.localStorage.setItem('token', data.token);
        dispatch(receiveLogin(data));
        dispatch(receiveAuth());
        dispatch(push('/roster'));
      } else {
        dispatch(error({ position: 'tr', message: data.error.message, autoDismiss: 30 }));
      }
    } catch (err) {
      dispatch(error(err));
      console.log(err);
    }
  };
};

export default login;
