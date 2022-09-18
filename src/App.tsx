import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {Sidebar} from "./Components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import {DialogsContainer} from "./Components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";



const App = () => {
    // const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    <Profile/>}
                />
                <Route path='/dialogs' render={() =>
                    <DialogsContainer/>
                }/>
                <Route path='/users' render={() =>
                    <UsersContainer/>
                }/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/sidebar' render={() =>
                    <Sidebar />
                }/>
            </div>
        </div>
    );
}
export default App;

