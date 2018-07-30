import {
  ROSTER_ADD_REQUEST,
  ROSTER_ADD_SUCCESS,
  ROSTER_ADD_FAILURE,
} from './RosterAdd.constants';

function RosterAddReducer(state = {}, action) {
  switch (action.type) {
    case ROSTER_ADD_REQUEST:
      return {
        ...state,
      };
    case ROSTER_ADD_SUCCESS:
      return {
        ...state,
      };
    case ROSTER_ADD_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default RosterAddReducer;
