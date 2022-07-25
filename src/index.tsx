import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    addPost,
    changeNewPostText,
    initializationState,
    InitializationStateType,
    subscribe
} from "./components/redax/state";


const rerenderEntireTree = (initializationState: InitializationStateType) => {
    ReactDOM.render(
        <App
            addPost={addPost}
            changeNewPostText={changeNewPostText}
            initializationState={initializationState}/>,
        document.getElementById('root')
    );
}
rerenderEntireTree(initializationState)
subscribe(()=>rerenderEntireTree(initializationState))
