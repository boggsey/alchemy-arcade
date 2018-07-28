import AUTH_SUCCESS from './Auth.constants';

function receiveAuth() {
  return ({ type: AUTH_SUCCESS });
}

export default receiveAuth;
