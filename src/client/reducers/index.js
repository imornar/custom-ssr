import userReducer from './user-reducer';
import adminsReducer from './admin-reducer';
import authReducer from './auth-reducer';
import { combineReducers } from 'redux';

export default combineReducers({
  users: userReducer,
  admins: adminsReducer,
  auth: authReducer
});
