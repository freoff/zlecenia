import { createAction } from 'redux-actions';
import {
  UPDATE_FORM_FIELD_VALUE,
  SUBMIT_NEW_KONTRAHENT_START,
  SUBMIT_NEW_KONTRAHENT_END,
  SUBMIT_NEW_KONTRAHENT_ERROR,
  VALIDATION_ERROR,
} from '../../actionsCreators';

export const mapDispatchToProps = {
  updateField: e =>
    createAction(UPDATE_FORM_FIELD_VALUE)({ field: e.target.name, value: e.target.value }),
  submitForm: e => (dispatch, getState) => {
    dispatch(createAction(SUBMIT_NEW_KONTRAHENT_START)());

    fetch('', { body: getState().kontrahent.kontrahentForm, method: 'PUT' });
  },
  validate: (e, msg, ...validateFunction) => (dispatch, getState) => {
    if (validateFunction[0].constructor === Event) return;
    const { target: { name: fieldName, value } } = e;
    validateFunction.forEach(validator => {
      if (!validator(value)) {
        dispatch(
          createAction(VALIDATION_ERROR)({fieldName, msg}),
        );
      }
    });
  },
};
