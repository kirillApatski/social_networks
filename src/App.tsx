import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {InitializationStateType} from "./components/redax/state"

type AppPropsType = {
    addPost: (postText: string) => void
    initializationState: InitializationStateType
    changeNewPostText: (newText: string) => void
}

function App(props:AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="appWrapperContent">
                    <Route path={"/dialogs"}
                           render={() => <Dialogs dialogsPages={props.initializationState.dialogsPages}/>}/>
                    <Route path={"/profile"}
                           render={() => <Profile profilePages={props.initializationState.profilePages}
                                                  changeNewPostText={props.changeNewPostText}
                                                  addPost={props.addPost}/>}
                    />
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
