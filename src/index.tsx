import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {StylesProvider, ThemeProvider as MuiThemeProvider} from '@material-ui/core/styles';
import theme from "./theme";
import {Provider as StoreProvider} from 'react-redux'
import {store} from "./store/store";
import {ThemeProvider} from 'styled-components';

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <MuiThemeProvider theme={theme}>
                <ThemeProvider theme={theme}>
                    <StylesProvider injectFirst>
                        <App/>
                    </StylesProvider>
                </ThemeProvider>
            </MuiThemeProvider>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
