import { createStore, combineReducers } from 'redux';
import { createAction, handleAction } from 'redux-actions';
import chai from 'chai';
import jest from 'jest';
import kontrahent from './kontrahent';
import { UPDATE_FORM_FIELD_VALUE, VALIDATION_ERROR } from '../actionsCreators';

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
    const ERROR = { fieldName: FIELD,msg: MSG };
    const store = createStore(kontrahent);
    const EXPECTED_STATE = {
      ...EXPECTED_DEFAULT_STATE,
      kontrahentFormErrors: {
        [FIELD]: [MSG,MSG],
      },
    };
    store.dispatch({ type: VALIDATION_ERROR, payload: ERROR });
    store.dispatch({ type: VALIDATION_ERROR, payload: ERROR });
    expect(store.getState()).toEqual(EXPECTED_STATE);
  });
});
