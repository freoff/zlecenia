import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { mapDispatchToProps } from './container/kontrahentKontainer';

const NowyKontrahent = props =>
  (<div>
    <form className="form" id="nowyKontrahentForm">
      <div className="form-group">
        <label htmlFor="nip">Nip:</label>
        <input type="text" name="nip" placeholder="Nip firmy" onChange={props.updateField} />
      </div>
    </form>
  </div>);

export default connect(null, mapDispatchToProps)(NowyKontrahent);

NowyKontrahent.propTypes = {
  updateField: PropTypes.func.isRequired,
};
