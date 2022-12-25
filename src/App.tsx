import React, {useEffect} from 'react';
import {Navigation} from "./ui/layout/Navigation/Navigation";
import {News} from "./ui/pages/News/News";
import {Music} from "./ui/pages/Music/Music";
import {Settings} from "./ui/pages/Settings/Settings";
import {Route} from "react-router-dom";
import UsersContainer from "./ui/pages/Users/UsersContainer";
import ProfileContainer from "./ui/pages/Profile/ProfileContainer";
import HeaderContainer from "./ui/layout/Header/HeaderContainer";
import {Login} from "./ui/pages/Login/Login";
import {initializeApp} from "./bll/redax/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/redax/redux-store";
import {Preloader} from "./ui/common/Preloader/Preloader";
import {AppWrapper} from "./ui/styles/AppWrapper";
import {WrapperContainer} from "./ui/styles/WrapperContainer";
import {Wrapper} from "./ui/styles/Wrapper";
import {Dialogs} from "./ui/pages/Dialogs/Dialogs";


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
                <Wrapper width={"70%"}>
                    <Route exact path={"/"}
                           render={() => <ProfileContainer/>}
                    />
                    <Route path={"/profile/:userId?"}
                           render={() => <ProfileContainer/>}
                    />
                    <Route path={"/dialogs"}
                           render={() => <Dialogs/>}
                    />
                    <Route path={"/users"}
                           render={() => <UsersContainer/>}
                    />
                    <Route path={"/news"} render={() => <News/>}/>
                    <Route path={"/music"} render={() => <Music/>}/>
                    <Route path={"/settings"} render={() => <Settings/>}/>
                    <Route path={"/login"} render={() => <Login/>}/>
                </Wrapper>
            </WrapperContainer>
        </AppWrapper>
    );
}

export default App;
