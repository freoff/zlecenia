import { createStore, combineReducers } from 'redux';
import { createAction, handleAction } from 'redux-actions';
import chai from 'chai';
import jest from 'jest';
import kontrahent from './kontrahent';
import { UPDATE_FORM_FIELD_VALUE, VALIDATION_ERROR, REMOVE_ERROR_FOR } from '../actionsCreators';

const e = chai.expect;
describe('Reducer kontrahent', () => {
  const EXPECTED_DEFAULT_STATE = {
    kontrahentForm: {},
    current: '',
    kontrahentFormErrors: {},
  };
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
      kontrahentForm: { field: 'change2', field3: 'change3' },
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
});
