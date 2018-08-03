import { push } from 'connected-react-router';
import { error } from 'react-notification-system-redux';
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

export function receiveRosterAdd() {
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
  }).catch((err) => {
    throw new Error(err.message);
  });
  return response.json();
}

const rosterAdd = (player, token) => {
  return async (dispatch) => {
    dispatch(requestRosterAdd());
    try {
      const data = await rosterAddRequest(player, token);
      if (data.success) {
        dispatch(receiveRosterAdd());
        dispatch(push('/roster'));
      } else {
        dispatch(errorRosterAdd());
        dispatch(error({ position: 'tr', message: data.error.message, autoDismiss: 30 }));
      }
    } catch (err) {
      dispatch(errorRosterAdd());
      dispatch(error({ position: 'tr', message: err.message, autoDismiss: 10 }));
    }
  };
};

export default rosterAdd;
