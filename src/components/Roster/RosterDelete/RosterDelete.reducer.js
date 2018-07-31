import {
  ROSTER_DELETE_REQUEST,
  ROSTER_DELETE_SUCCESS,
  ROSTER_DELETE_FAILURE,
} from './RosterDelete.constants';

function RosterDeleteReducer(state = {}, action) {
  switch (action.type) {
    case ROSTER_DELETE_REQUEST:
      return {
        ...state,
      };
    case ROSTER_DELETE_SUCCESS:
      return {
        ...state,
      };
    case ROSTER_DELETE_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default RosterDeleteReducer;
