import { combineReducers } from 'redux';

import LoginReducer from '../components/Account/Login/Login.reducer';
import RegisterReducer from '../components/Account/Register/Register.reducer';
import AuthReducer from '../components/Account/Auth/Auth.reducer';
import RosterAddReducer from '../components/Roster/RosterAdd/RosterAdd.reducer';
import RosterDeleteReducer from '../components/Roster/RosterDelete/RosterDelete.reducer';
import RosterListReducer from '../components/Roster/RosterList/RosterList.reducer';

const RootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  AuthReducer,
  RosterAddReducer,
  RosterListReducer,
  RosterDeleteReducer,
});

export default RootReducer;
