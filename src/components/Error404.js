import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
/**
 *
 * @param {RouteComponentProps} props
 */
const Error404 = props =>
  (<div className="panel panel-danger">
    <div className="panel-heading">
      <h1 className="text-center">Błąd 404</h1>
    </div>
    <div className="panel-body text-center">
      <h1>
        <small className="text-center">
          Lokalizacji <span className="text-danger">{props.location.pathname}</span> niedostępna
        </small>
      </h1>
    </div>
  </div>);
export default Error404;
