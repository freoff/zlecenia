import { createAction } from 'redux-actions';
import {
  UPDATE_FORM_FIELD_VALUE,
  SUBMIT_NEW_KONTRAHENT_START,
  SUBMIT_NEW_KONTRAHENT_END,
  SUBMIT_NEW_KONTRAHENT_ERROR,
  VALIDATION_ERROR,
  REMOVE_ERROR_FOR,
} from '../../actionsCreators';

export const mapDispatchToProps = {
  updateField: e =>
    createAction(UPDATE_FORM_FIELD_VALUE)({ field: e.target.name, value: e.target.value }),
  submitForm: e => (dispatch, getState) => {
    dispatch(createAction(SUBMIT_NEW_KONTRAHENT_START)());

    fetch('', { body: getState().kontrahent.kontrahentForm, method: 'PUT' });
  },
  validate: ({ target: { name: fieldName, value } }, msg, ...validateFunction) => (
    dispatch,
    getState,
  ) => {
    if (validateFunction[0].constructor === Event) return;
    let isError = false;
    validateFunction.forEach((validator) => {
      if (!validator(value)) {
        isError = true;
      }
      if (isError) {
        dispatch(createAction(VALIDATION_ERROR)({ fieldName, msg }));
      } else dispatch(createAction(REMOVE_ERROR_FOR)(fieldName));
    });
  },
};
export const mapStateToProps = state => ({
  kontrahentFormErrors: state.kontrahent.kontrahentFormErrors,
});
