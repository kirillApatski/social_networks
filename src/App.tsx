import React, {useEffect} from 'react';
import {Navigation} from "./ui/components/Navigation/Navigation";
import {News} from "./ui/components/News/News";
import {Music} from "./ui/components/Music/Music";
import {Settings} from "./ui/components/Settings/Settings";
import {Route} from "react-router-dom";
import DialogsContainer from "./ui/components/Dialogs/DialogsContainer";
import UsersContainer from "./ui/components/Users/UsersContainer";
import ProfileContainer from "./ui/components/Profile/ProfileContainer";
import HeaderContainer from "./ui/components/Header/HeaderContainer";
import {Login} from "./ui/components/Login/Login";
import {initializeApp} from "./redax/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redax/redux-store";
import {Preloader} from "./ui/components/common/Preloader/Preloader";
import {AppWrapper} from "./ui/stylesComponent/AppWrapper";
import {WrapperContainer} from "./ui/stylesComponent/WrapperContainer";


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
        <AppWrapper>
            <WrapperContainer>
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
            </WrapperContainer>

        </AppWrapper>
    );
}

export default App;
