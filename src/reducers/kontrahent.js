import { handleActions } from 'redux-actions';
import { UPDATE_FORM_FIELD_VALUE, SUBMIT_NEW_KONTRAHENT_ } from '../actionsCreators';
const initialState = {
  kontrahentForm: {},
  current: '',


};
const kontrahentFormReducer = (state, {payload: {field, value}}) => ({
  ...state,
  [field]: value
})

const kontrahent = handleActions(
  {
    UPDATE_FORM_FIELD_VALUE: (state, action) => ({
      ...state,
      kontrahentForm: kontrahentFormReducer(state.kontrahentForm, action),
    }),

  },
  initialState,
);

export default kontrahent;
