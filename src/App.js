import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import './../node_modules/bootstrap/dist/css/bootstrap.css';
import AppMainView from './components/AppMainView';
import './App.css';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppMainView />
        </Router>
      </Provider>
    );
  }
}

export default App;
