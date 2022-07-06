import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {initializationState} from "./components/redax/state";



ReactDOM.render(
    <App initializationState={initializationState}/>,
  document.getElementById('root')
);