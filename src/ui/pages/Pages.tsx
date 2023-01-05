import React from 'react';
import {Route} from "react-router-dom";
import ProfileContainer from "./Profile/ProfileContainer";
import {Dialogs} from "./Dialogs/Dialogs";
import {News} from "./News/News";
import {Music} from "./Music/Music";
import {Settings} from "./Settings/Settings";
import {Login} from "./Login/Login";
import {Users} from "./Users/Users";

export const Pages = () => {
    return (
        <>
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
                   render={() => <Users/>}
            />
            <Route path={"/news"} render={() => <News/>}/>
            <Route path={"/music"} render={() => <Music/>}/>
            <Route path={"/settings"} render={() => <Settings/>}/>
            <Route path={"/login"} render={() => <Login/>}/>
        </>
    );
};

