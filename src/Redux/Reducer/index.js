import { combineReducers } from 'redux';
import userReducer from './userReducer';

import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  userStoreData: userReducer,
});

export default persistReducer(config, rootReducer);
