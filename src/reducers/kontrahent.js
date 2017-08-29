import { handleActions } from 'redux-actions';
import { UPDATE_FORM_FIELD_VALUE, VALIDATION_ERROR } from '../actionsCreators';
const initialState = {
  kontrahentForm: {},
  current: '',
  kontrahentFormErrors: {},
  /*
  kontrahentFormErrors: {
    [fielName]: [...msg]
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
        
         [fieldName]: [...state.kontrahentFormErrors[fieldName], msg],
      },
    }),
  },
  initialState,
);

export default kontrahent;
