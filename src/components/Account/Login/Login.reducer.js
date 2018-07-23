import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from './Login.constants';

const initialState = {
  isFetching: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  userData: {},
};

function LoginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
        user: action.creds,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: true,
        message: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        isAuthenticated: false,
        message: action.message,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isFetching: true,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}

export default LoginReducer;
