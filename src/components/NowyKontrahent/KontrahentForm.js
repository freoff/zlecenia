import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapDispatchToProps, mapStateToProps } from './kontrahentContainer';
import { length, minmax, notEmpty } from '../../validator';
import Error from './Error';

const fieldHasError = (fieldName, kontrahentFormErrors) =>
  kontrahentFormErrors[fieldName] !== undefined;

const KontrahentForm = props =>
  (<div onFocus={e => console.log(props)}>
    <form className="form" id="nowyKontrahentForm">
      <fieldset className="field">
        <legend>Nowy Kontrahent</legend>
        <div
          className={`form-group ${fieldHasError('nip', props.kontrahentFormErrors)
            ? 'has-error'
            : ''}`}
        >
          <label htmlFor="nip">NIP:</label>
          <input
            id="nip"
            type="text"
            name="nip"
            className="form-control"
            placeholder="Nip firmy"
            onBlur={e => props.validate(e, 'Nip nie poprawny format to xxx-xxx-xx-xx', length(10))}
            onChange={props.updateField}
          />
          <Error forField="nip" formErrors={props.kontrahentFormErrors} />
        </div>
        <div className={`form-group ${fieldHasError('nazwa', props.kontrahentFormErrors)
          ? 'has-error'
          : ''}`}
        >
          <label htmlFor="nazwa">Nazwa firmy:</label>
          <textarea
            id="nazwa"
            name="nazwa"
            className="form-control"
            onBlur={e => props.validate(e, 'Minimalna dlugosc 10', length(10), notEmpty)}
            onChange={props.updateField}
          />
          <Error forField="nazwa" formErrors={props.kontrahentFormErrors} />
        </div>
      </fieldset>
    </form>
  </div>);

KontrahentForm.defaultProps = {
  validate: () => {},
};

KontrahentForm.propTypes = {
  validate: PropTypes.func,
  updateField: PropTypes.func.isRequired,
  kontrahentFormErrors: PropTypes.object.isRequired,// eslint-disable-line
};

export default connect(mapStateToProps, mapDispatchToProps)(KontrahentForm);
