import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mapDispatchToProps } from './kontrahentContainer';
import { length, minmax, notEmpty } from '../../validator';

const KontrahentForm = props => (
  <div>
    <form className="form" id="nowyKontrahentForm">
      <div className="form-group">
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
      </div>
      <div className="form-group">
        <label htmlFor="nazwa">Nazwa firmy:</label>
        <textarea
          id="nazwa"
          name="nazwa"
          className="form-control"
          onBlur={e => props.validate(e, 'Minimalna dlugosc 10', length(10), notEmpty)}
          onChange={props.updateField}

        />
      </div>
    </form>
  </div>
);
KontrahentForm.propTypes = {
  validate: PropTypes.func,
  updateField: PropTypes.func.isRequired,
};
KontrahentForm.defaultProps = {
  validate: () => {},
};
export default connect(null, mapDispatchToProps)(KontrahentForm);
