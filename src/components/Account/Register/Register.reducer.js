import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './Register.constants';

function RegisterReducer(state = {}, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
      };
    case REGISTER_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default RegisterReducer;
