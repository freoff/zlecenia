import { createStore, combineReducers } from 'redux';
import { createAction, handleAction } from 'redux-actions';
import chai from 'chai';
import jest from 'jest';
import kontrahent from './kontrahent';
import { UPDATE_FORM_FIELD_VALUE } from '../actionsCreators';

const e = chai.expect;

describe('Reducer kontrahent', () => {
  it('should return default state ', () => {
    const EXPECTED_DEFAULT_STATE = {
      kontrahentForm: {},
      current: '',
    };
    expect(kontrahent).toBeInstanceOf(Function);

    const store = createStore(kontrahent);
    store.dispatch(createAction('INIT')(null));
    expect(store.getState()).toEqual(EXPECTED_DEFAULT_STATE);
  });
  it('should update/ crete form field', () => {
    const EXPECTED_STATE = {
      kontrahentForm: { field: 'change2', field3: 'change3' },
      current: '',
    };
    const store = createStore(kontrahent);
    store.dispatch(createAction(UPDATE_FORM_FIELD_VALUE)({ field: 'field', value: 'change1' }));
    store.dispatch(createAction(UPDATE_FORM_FIELD_VALUE)({ field: 'field', value: 'change2' }));
    store.dispatch(createAction(UPDATE_FORM_FIELD_VALUE)({ field: 'field3', value: 'change3' }));
    expect(store.getState()).toEqual(EXPECTED_STATE);
  });
});
