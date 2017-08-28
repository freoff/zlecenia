/* eslint-env es_modules */
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { handleAction, createAction } from 'redux-actions';
import { appReducer as app } from './reducers';

import kontrahent from './reducers/kontrahent';

const isTest = process.env.NODE_ENV === 'test';
console.log(`isTest ${isTest}`);
const middlewares = isTest ? applyMiddleware(thunk) : applyMiddleware(thunk, logger);
const reducers = combineReducers({ app, kontrahent });
const store = createStore(reducers, middlewares);

store.dispatch(createAction('APP_TITLE')('APLIKACJA DO AUKCJI'));

export default store;
