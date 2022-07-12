import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {RootStateType} from "./redux/state";
import {Sidebar} from "./Components/Sidebar/Sidebar";

type AppPropsType = {
    state: RootStateType
}

const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile state={props.state.profilePage}/>}/>
                <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogPage}/>}/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/sidebar' render={() => <Sidebar state={props.state.sidebar}/>}/>
            </div>
        </div>
    );
}
export default App;

