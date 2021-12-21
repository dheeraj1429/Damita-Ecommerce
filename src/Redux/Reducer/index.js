import { combineReducers } from 'redux';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  userStoreData: userReducer,
});

export default rootReducer;
