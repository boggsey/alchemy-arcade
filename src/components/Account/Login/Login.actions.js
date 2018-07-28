import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from './Login.constants';
import receiveAuth from '../Auth/Auth.actions';

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

export function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false,
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
      window.localStorage.setItem('token', data.token);
      dispatch(receiveLogin(data));
      dispatch(receiveAuth());
      return data;
    } catch (error) {
      dispatch(errorLogin(error));
    }
  };
};

export default login;
