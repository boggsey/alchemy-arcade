import { AUTH_SUCCESS, LOGOUT_SUCCESS } from './Auth.constants';

export function receiveAuth() {
  return ({ type: AUTH_SUCCESS });
}

export const receiveLogout = () => async (dispatch) => {
  window.localStorage.removeItem('token');
  dispatch({ type: LOGOUT_SUCCESS });
};
