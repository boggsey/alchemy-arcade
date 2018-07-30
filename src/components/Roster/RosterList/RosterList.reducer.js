import {
  ROSTER_LIST_REQUEST,
  ROSTER_LIST_SUCCESS,
  ROSTER_LIST_FAILURE,
} from './RosterList.constants';

const initialState = {
  players: [],
};

function RosterListReducer(state = initialState, action) {
  switch (action.type) {
    case ROSTER_LIST_REQUEST:
      return {
        ...state,
      };
    case ROSTER_LIST_SUCCESS:
      return {
        ...state,
        players: [...action.payload],
      };
    case ROSTER_LIST_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export default RosterListReducer;
