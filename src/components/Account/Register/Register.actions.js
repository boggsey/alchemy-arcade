import { push } from 'connected-react-router';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './Register.constants';
import receiveAuth from '../Auth/Auth.actions';

function requestRegister() {
  return {
    type: REGISTER_REQUEST,
  };
}

function receiveRegister(user) {
  return {
    type: REGISTER_SUCCESS,
    payload: user,
  };
}

function errorRegister() {
  return {
    type: REGISTER_FAILURE,
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
    dispatch(requestRegister());
    try {
      const data = await registerRequest(user);
      window.localStorage.setItem('token', data.token);
      dispatch(receiveRegister(data));
      dispatch(receiveAuth());
      dispatch(push('/roster'));
    } catch (error) {
      dispatch(errorRegister());
    }
  };
};

export default register;
