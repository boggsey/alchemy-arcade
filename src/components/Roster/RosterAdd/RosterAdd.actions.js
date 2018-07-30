import {
  ROSTER_ADD_REQUEST,
  ROSTER_ADD_SUCCESS,
  ROSTER_ADD_FAILURE,
} from './RosterAdd.constants';

export function requestRosterAdd() {
  return {
    type: ROSTER_ADD_REQUEST,
  };
}

export function receiveRosterAdd(user, token) {
  return {
    type: ROSTER_ADD_SUCCESS,
  };
}

export function errorRosterAdd() {
  return {
    type: ROSTER_ADD_FAILURE,
  };
}

async function rosterAddRequest(player, token) {
  const response = await fetch('https://players-api.developer.alchemy.codes/api/players/', {
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    method: 'POST',
    body: JSON.stringify(player),
  });
  return response.json();
}

const rosterAdd = (player, token) => {
  return async (dispatch) => {
    dispatch(requestRosterAdd());
    try {
      const data = await rosterAddRequest(player, token);
      dispatch(receiveRosterAdd());
      return data;
    } catch (error) {
      dispatch(errorRosterAdd());
    }
  };
};

export default rosterAdd;
