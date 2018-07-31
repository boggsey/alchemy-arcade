import AUTH_SUCCESS from './Auth.constants';

const initialState = {
  isAuthenticated: false,
};

function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      };
    default:
      return state;
  }
}

export default AuthReducer;
