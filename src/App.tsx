import React, {useEffect} from 'react';
import {Navigation} from "./ui/layout/Navigation/Navigation";
import HeaderContainer from "./ui/layout/Header/HeaderContainer";
import {initializeApp} from "./bll/redax/app-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/redax/redux-store";
import {Preloader} from "./ui/common/Preloader/Preloader";
import {AppWrapper} from "./ui/styles/AppWrapper";
import {WrapperContainer} from "./ui/styles/WrapperContainer";
import {Wrapper} from "./ui/styles/Wrapper";
import {Pages} from "./ui/pages/Pages";


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
                    <Pages/>
                </Wrapper>
            </WrapperContainer>
        </AppWrapper>
    );
}

export default App;
