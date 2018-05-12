import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import winesReducer from "./reducers/wines"
import uiReducer from "./reducers/ui"
import authReducer from './reducers/auth'

const rootReducer = combineReducers({
  wines: winesReducer,
  ui: uiReducer,
  auth: authReducer
})

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore
