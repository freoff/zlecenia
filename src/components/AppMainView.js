import React from 'react';
import { Route, Switch, RouteComponentProps } from 'react-router-dom';
import Navbar from './Navbar';
import NowyKontrahent from './NowyKontrahent';
import Error404 from './Error404';

export default props =>
  (<div>
    <Navbar />
    <main>
      <Switch>
        <Route
          path="/"
          exact
          render={routerProps =>
            (<div className="container">
              <div className="row">
                <div className="panel panel-info">
                  <div className="panel-heading text-center">MAIN</div>
                </div>
              </div>
            </div>)}
        />
        <Route path="/nowyKontrahent" render={routerProps => <NowyKontrahent />} />
        <Route render={routerProps => <Error404 {...routerProps} />} /> {/* 404 */}
      </Switch>
    </main>
  </div>);
