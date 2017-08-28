import { createAction } from 'redux-actions';
import {
  UPDATE_FORM_FIELD_VALUE,
  SUBMIT_NEW_KONTRAHENT_START,
  SUBMIT_NEW_KONTRAHENT_END,
  SUBMIT_NEW_KONTRAHENT_ERROR,
} from '../../actionsCreators';

export const mapDispatchToProps = {
  updateField: e =>
    createAction(UPDATE_FORM_FIELD_VALUE)({ field: e.target.name, value: e.target.value }),
  submitForm: e => (dispatch, getState) => {
    dispatch(createAction(SUBMIT_NEW_KONTRAHENT_START)());

    fetch('', { body: getState().kontrahent.kontrahentForm, method: 'PUT' });
  },
  validate: ({ target: { name: fieldName, value } }, ...validateFunction) => (dispatch, getState) => {
    console.log(`im validating ${fieldName} value is ${value}`);
    for (let fn of validateFunction) {
      if validateFunction.length
    }
  },
};
