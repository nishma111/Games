import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AppProvider } from '../store';

export default class Root extends Component {
  render() {
    const { history } = this.props;
    return (
      <AppProvider>
        <Router history={history}>
          <App />
        </Router>
      </AppProvider>
    );
  }
}
