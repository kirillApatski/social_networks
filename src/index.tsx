import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from "./redax/redux-store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "styled-components";
import {theme} from "./ui/styles/constants";


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);



