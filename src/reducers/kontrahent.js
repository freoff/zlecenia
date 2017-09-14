// @flow

import { handleActions } from 'redux-actions';
import {
  UPDATE_FORM_FIELD_VALUE,
  VALIDATION_ERROR,
  REMOVE_ERROR_FOR,
  CLEAR_FORM,
  ADD_TELEPHONE,
  REMOVE_TELEPHONE,
} from '../actionsCreators';

export const initialState = {
  kontrahentForm: {
    telefony: {}, // {nazwa<string>: numer<strign>}
  },
  current: '',
  kontrahentFormErrors: {},
  /*
  kontrahentFormErrors: {
    [fielName]: msg: String
  }
  */
};
const kontrahentFormReducer = (state, { payload: { field, value } }) => ({
  ...state,
  [field]: value,
});


const kontrahent = handleActions(
  {
    UPDATE_FORM_FIELD_VALUE: (state, action) => ({
      ...state,
      kontrahentForm: kontrahentFormReducer(state.kontrahentForm, action),
    }),
    VALIDATION_ERROR: (state, { payload: { fieldName, msg } }) => ({
      ...state,
      kontrahentFormErrors: {
        ...state.kontrahentFormErrors,
        [fieldName]: msg,
      },
    }),
    REMOVE_ERROR_FOR: (state, action) => {
      const rest = { ...state.kontrahentFormErrors };
      delete rest[action.payload];
      return {
        ...state,
        kontrahentFormErrors: {
          ...rest,
        },
      };
    },
    CLEAR_FORM: state => ({
      ...initialState,
    }),
    ADD_TELEPHONE: (state, action) => ({
      ...state,
      kontrahentForm: { ...state.kontrahentForm,
        telefony: { ...state.kontrahentForm.telefony,
          [action.payload.nazwa]: action.payload.numer,
        },
      },
    }),
    REMOVE_TELEPHONE: (state, action) => {
      const rest = { ...state.kontrahentForm.telefony };
      delete rest[action.payload];
      return {
        ...state,
        kontrahentForm: {
          ...state.kontrahentForm,
          telefony: { ...rest,
          },
        },
      }
      ;
    }
    ,

  },
  initialState,
  /* eslint-disable-next-line */
);

export default kontrahent;
