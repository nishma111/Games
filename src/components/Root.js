import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

export default class Root extends Component {
  render() {
    const { history } = this.props;
    return (
      <Router history={history}>
        <App />
      </Router>
    );
  }
}
