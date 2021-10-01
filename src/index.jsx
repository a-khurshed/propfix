import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@material-ui/core';

import App from './App';
import { theme } from './constants';

ReactDOM.render(
  <ThemeProvider theme={createTheme(theme)}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
