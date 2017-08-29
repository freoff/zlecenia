import { handleActions } from 'redux-actions';
import {
  UPDATE_FORM_FIELD_VALUE,
  VALIDATION_ERROR,
  REMOVE_ERROR_FOR,
  CLEAR_FORM,
} from '../actionsCreators';
const initialState = {
  kontrahentForm: {},
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
  },
  initialState,
);

export default kontrahent;
