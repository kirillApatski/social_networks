import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./components/redax/redux-store"
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="appWrapperContent">
                    <Route path={"/dialogs"}
                           render={() => <DialogsContainer
                               store={props.store}
                           />}
                    />
                    <Route path={"/profile"}
                           render={() => <Profile
                               store={props.store}
                           />}
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
