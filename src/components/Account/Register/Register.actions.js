import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './Register.constants';
import receiveAuth from '../Auth/Auth.actions';

function requestRegister(creds) {
  return {
    type: REGISTER_REQUEST,
    creds,
  };
}

function receiveRegister(user) {
  return {
    type: REGISTER_SUCCESS,
    id_token: user.id_token,
  };
}

function errorRegister(message) {
  return {
    type: REGISTER_FAILURE,
    message,
  };
}

async function registerRequest(user) {
  const response = await fetch('https://players-api.developer.alchemy.codes/api/user', {
    headers: {
      'Content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(user),
  });
  return response.json();
}

const register = (user) => {
  return async (dispatch) => {
    dispatch(requestRegister(user));
    try {
      const data = await registerRequest(user);
      window.localStorage.setItem('token', data.token);
      dispatch(receiveRegister(data));
      dispatch(receiveAuth());
      return data;
    } catch (error) {
      dispatch(errorRegister(error));
    }
  };
};

export default register;
