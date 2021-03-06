import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { store } from './_helpers';
import { HomePage } from './HomePage';
import './index.css'
import 'typeface-roboto'
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        main: "#000000"
      },
      secondary: {
        main: "#485362",
      }
    }
  });

render(
    <MuiThemeProvider theme={theme}>
        <Provider store={store}>
            <HomePage />
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

serviceWorker.register();