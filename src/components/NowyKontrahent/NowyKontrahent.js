import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import KontrahentForm from './KontrahentForm';
import { mapDispatchToProps } from './kontrahentContainer';

const NowyKontrahent = props =>
  (<div className="container">
    <KontrahentForm />
  </div>);

export default connect(null, null)(NowyKontrahent);
