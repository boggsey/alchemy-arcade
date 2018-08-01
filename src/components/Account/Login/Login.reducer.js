import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from './Login.constants';

function LoginReducer(state = {}, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default LoginReducer;
