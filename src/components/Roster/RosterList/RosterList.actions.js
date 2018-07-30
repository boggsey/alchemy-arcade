import {
  ROSTER_LIST_REQUEST,
  ROSTER_LIST_SUCCESS,
  ROSTER_LIST_FAILURE,
} from './RosterList.constants';

function requestRosterList() {
  return {
    type: ROSTER_LIST_REQUEST,
  };
}

function receiveRosterList(players) {
  return {
    type: ROSTER_LIST_SUCCESS,
    payload: players,
  };
}

function errorRosterList() {
  return {
    type: ROSTER_LIST_FAILURE,
  };
}

async function rosterListRequest(token) {
  const response = await fetch('https://players-api.developer.alchemy.codes/api/players', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  });
  return response.json();
}

const getRosterList = (token) => {
  return async (dispatch) => {
    dispatch(requestRosterList());
    try {
      const data = await rosterListRequest(token);
      dispatch(receiveRosterList(data.players));
      return data;
    } catch (error) {
      dispatch(errorRosterList());
      console.log(error);
    }
  };
};

export default getRosterList;
