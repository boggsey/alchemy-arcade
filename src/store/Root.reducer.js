import { combineReducers } from 'redux';

import LoginReducer from '../components/Account/Login/Login.reducer';
import RegisterReducer from '../components/Account/Register/Register.reducer';
import AuthReducer from '../components/Account/Auth/Auth.reducer';

const RootReducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  AuthReducer,
});

export default RootReducer;
