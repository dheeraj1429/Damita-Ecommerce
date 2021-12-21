import { createStore, compose, applyMiddleware } from 'redux';

import Thunk from 'redux-thunk';
import rootReducer from '../Reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(Thunk)));

export default store;
