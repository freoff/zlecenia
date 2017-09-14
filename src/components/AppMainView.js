// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import NowyKontrahent from './NowyKontrahent';
import Error404 from './Error404';


export default (props: any) => (
  <div>
    <Navbar />
    <main>
      <Switch >
        <Route
          path="/"
          exact
          render={(routerProps: ContextRouter) => (
            <div className="container">
              <div className="row">
                <div className="panel panel-info">
                  <div className="panel-heading text-center">{routerProps.location.pathname}</div>
                </div>
              </div>
            </div>
          )}
        />
        <Route path="/nowyKontrahent" render={routerProps => <NowyKontrahent />} />
        <Route render={routerProps => <Error404 {...routerProps} />} /> {/* 404 */}
      </Switch>
    </main>
  </div>
);
