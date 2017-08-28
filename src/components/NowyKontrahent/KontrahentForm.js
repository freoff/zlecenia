import React from 'react';
import { connect } from 'react-redux';
import { mapDispatchToProps } from './kontrahentContainer';

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
          onBlur={props.validate}
          onChange={props.updateField}
        />
      </div>
      <div className="form-group">
        <label htmlFor="nazwa">Nazwa firmy:</label>
        <textarea
          id="nazwa"
          name="nazwa"
          className="form-control"
          onBlur={props.validate}
          onChange={props.onUpdateField}

        />
      </div>
    </form>
  </div>
);

export default connect(null,mapDispatchToProps)(KontrahentForm);
