import { error } from 'react-notification-system-redux';
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
  const response = await fetch('https://players-api.developer.alchemy.codes/api/players/', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: 'GET',
  }).catch((err) => {
    throw new Error(err.message);
  });
  return response.json();
}

const getRosterList = (token) => { 
  return async (dispatch) => {
    dispatch(requestRosterList());
    try {
      const data = await rosterListRequest(token);
      if (data.success) {
        dispatch(receiveRosterList(data.players));
      } else {
        dispatch(errorRosterList());
        dispatch(error({ position: 'tr', message: data.error.message, autoDismiss: 10 }));
      }
    } catch (err) {
      dispatch(errorRosterList());
      dispatch(error(err));
    }
  };
};

export default getRosterList;
