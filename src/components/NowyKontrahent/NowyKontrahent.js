import React from 'react';
import PropTypes from 'prop-types';
import { createAction } from 'redux-actions';

import { connect } from 'react-redux';
import KontrahentForm from './KontrahentForm';
import { mapDispatchToProps } from './kontrahentContainer';
import { CLEAR_FORM } from '../../actionsCreators';

class NowyKontrahent extends React.Component {
  componentWillUnmount() {
    this.props.clearFormData(); // eslint-disable-line
  }
  render() {
    return (
      <div className="container">
        <KontrahentForm />
      </div>
    );
  }
}
export default connect(null, { clearFormData: createAction(CLEAR_FORM) })(NowyKontrahent);

