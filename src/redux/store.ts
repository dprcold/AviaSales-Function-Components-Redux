import { configureStore, compose, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'

import rootReducer from './combineReducers';
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = applyMiddleware(thunk);
// @ts-ignore
export const store = configureStore({ reducer: rootReducer },composeEnhancers(middleware));
