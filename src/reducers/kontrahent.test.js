import { createStore, combineReducers } from 'redux';
import { createAction, handleAction } from 'redux-actions';
import chai from 'chai';
import jest from 'jest';
import kontrahent, { initialState } from './kontrahent';
import {
  UPDATE_FORM_FIELD_VALUE,
  VALIDATION_ERROR,
  REMOVE_ERROR_FOR,
  ADD_TELEPHONE,
  REMOVE_TELEPHONE,
} from '../actionsCreators';

const e = chai.expect;
describe('Reducer kontrahent', () => {
  const EXPECTED_DEFAULT_STATE = initialState;
  it('should return default state ', () => {
    const EXPECTED_STATE = {
      ...EXPECTED_DEFAULT_STATE,
    };

    expect(kontrahent).toBeInstanceOf(Function);
    const store = createStore(kontrahent);
    store.dispatch(createAction('INIT')(null));
    expect(store.getState()).toEqual(EXPECTED_STATE);
  });
  it('should update/create form field', () => {
    const EXPECTED_STATE = {
      ...EXPECTED_DEFAULT_STATE,
      kontrahentForm: {
        ...EXPECTED_DEFAULT_STATE.kontrahentForm,
        field: 'change2',
        field3: 'change3',
      },
    };
    const store = createStore(kontrahent);
    store.dispatch(createAction(UPDATE_FORM_FIELD_VALUE)({ field: 'field', value: 'change1' }));
    store.dispatch(createAction(UPDATE_FORM_FIELD_VALUE)({ field: 'field', value: 'change2' }));
    store.dispatch(createAction(UPDATE_FORM_FIELD_VALUE)({ field: 'field3', value: 'change3' }));
    expect(store.getState()).toEqual(EXPECTED_STATE);
  });
  it('should add errormsg', () => {
    const FIELD = 'pole';
    const MSG = 'error msg';
    const ERROR = { fieldName: FIELD, msg: MSG };
    const store = createStore(kontrahent);
    const EXPECTED_STATE = {
      ...EXPECTED_DEFAULT_STATE,
      kontrahentFormErrors: {
        [FIELD]: MSG,
      },
    };
    store.dispatch({ type: VALIDATION_ERROR, payload: ERROR });
    store.dispatch({ type: VALIDATION_ERROR, payload: ERROR });
    expect(store.getState()).toEqual(EXPECTED_STATE);
  });
  it('should remove error for field', () => {
    const PRE_REMOVE_EXPECTED_STATE = {
      ...EXPECTED_DEFAULT_STATE,
      kontrahentFormErrors: {
        field1: 'error1',
        field2: 'error2',
      },
    };
    const POST_REMOVE_EXPECTED_STATE = {
      ...EXPECTED_DEFAULT_STATE,
      kontrahentFormErrors: {
        field2: 'error2',
      },
    };
    const store = createStore(kontrahent);
    store.dispatch(createAction(VALIDATION_ERROR)({ fieldName: 'field1', msg: 'error1' }));
    store.dispatch(createAction(VALIDATION_ERROR)({ fieldName: 'field2', msg: 'error2' }));
    expect(store.getState()).toEqual(PRE_REMOVE_EXPECTED_STATE);
    store.dispatch(createAction(REMOVE_ERROR_FOR)('field1'));
    expect(store.getState()).toEqual(POST_REMOVE_EXPECTED_STATE);
  });
  it('should add 2 phone number and then remove it', () => {
    const STATE_AFTER = {
      ...EXPECTED_DEFAULT_STATE,
      kontrahentForm: {
        ...EXPECTED_DEFAULT_STATE.kontrahentForm,
        telefony: {
          ...EXPECTED_DEFAULT_STATE.kontrahentForm.telefony,
          numer1: 'numerONE',
          numer2: 'numerTWO',
        },
      },
    };
    const store = createStore(kontrahent);
    store.dispatch(createAction(ADD_TELEPHONE)({ nazwa: 'numer1', numer: 'numerONE' }));
    store.dispatch(createAction(ADD_TELEPHONE)({ nazwa: 'numer2', numer: 'numerTWO' }));
    expect(store.getState()).toEqual(STATE_AFTER);
    store.dispatch(createAction(REMOVE_TELEPHONE)('numer2'));
    store.dispatch(createAction(REMOVE_TELEPHONE)('numer1'));
    expect(store.getState()).toEqual(EXPECTED_DEFAULT_STATE);
  });
});
