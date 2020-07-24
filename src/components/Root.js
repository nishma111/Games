import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { AppProvider } from '../store';
import { ThemeProvider } from '@material-ui/core';

export default class Root extends Component {
  render() {
    const { history, theme } = this.props;
    return (
      <AppProvider>
        <Router history={history}>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </Router>
      </AppProvider>
    );
  }
}
