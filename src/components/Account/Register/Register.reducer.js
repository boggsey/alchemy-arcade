import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from './Register.constants';

const initialState = {
  user: {},
};

function RegisterReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        user: action.payload,
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
