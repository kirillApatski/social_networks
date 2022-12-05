import React, {useEffect} from 'react';
import './App.css';
import {Navigation} from "./components/Navigation/Navigation";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";
import {initializeApp} from "./redax/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redax/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


function App() {

    const initialized = useSelector<AppStateType>(state => state.app.initialized)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initializeApp())
    }, [])


    if (!initialized) {
        return <Preloader/>
    }


    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navigation/>
            <div className="appWrapperContent">
                <Route path={"/profile/:userId?"}
                       render={() => <ProfileContainer/>}
                />
                <Route path={"/dialogs"}
                       render={() => <DialogsContainer/>}
                />
                <Route path={"/users"}
                       render={() => <UsersContainer/>}
                />
                <Route path={"/news"} render={() => <News/>}/>
                <Route path={"/music"} render={() => <Music/>}/>
                <Route path={"/settings"} render={() => <Settings/>}/>
                <Route path={"/login"} render={() => <Login/>}/>
            </div>
        </div>
    );
}

export default App;
