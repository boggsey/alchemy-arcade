import {
  ROSTER_DELETE_REQUEST,
  ROSTER_DELETE_SUCCESS,
  ROSTER_DELETE_FAILURE,
} from './RosterDelete.constants';
import getRosterList from '../RosterList/RosterList.actions';

export function requestRosterDelete() {
  return {
    type: ROSTER_DELETE_REQUEST,
  };
}

export function receiveRosterDelete() {
  return {
    type: ROSTER_DELETE_SUCCESS,
  };
}

export function errorRosterDelete() {
  return {
    type: ROSTER_DELETE_FAILURE,
  };
}

async function rosterDeleteRequest(id, token) {
  const response = await fetch(`https://players-api.developer.alchemy.codes/api/players/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'DELETE',
  });
  return response.json();
}

const deletePlayer = (player, token) => {
  return async (dispatch) => {
    dispatch(requestRosterDelete());
    try {
      const data = await rosterDeleteRequest(player, token);
      dispatch(receiveRosterDelete());
      dispatch(getRosterList(token));
      return data;
    } catch (error) {
      dispatch(errorRosterDelete());
    }
  };
};

export default deletePlayer;
