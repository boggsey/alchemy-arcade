import Notifications, { success, error } from 'react-notification-system-redux';
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
  }).catch((err) => {
    throw new Error(err.message);
  });
  return response.json();
}

const deletePlayer = (player, token) => {
  return async (dispatch) => {
    dispatch(requestRosterDelete());
    try {
      const data = await rosterDeleteRequest(player, token);
      if (data.success) {
        dispatch(receiveRosterDelete());
        dispatch(getRosterList(token));
        dispatch(Notifications.removeAll());
        dispatch(success({ position: 'tr', message: 'Player was deleted.', autoDismiss: 5 }));
      } else {
        dispatch(Notifications.removeAll());
        dispatch(errorRosterDelete());
        dispatch(error({ position: 'tr', message: data.error.message, autoDismiss: 5 }));
      }
    } catch (err) {
      dispatch(errorRosterDelete());
      dispatch(Notifications.removeAll());
      dispatch(error({ position: 'tr', message: err.message, autoDismiss: 5 }));
    }
  };
};

export default deletePlayer;
