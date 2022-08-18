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

// type AppPropsType = {
//     store: StoreType
// }

// const App: React.FC<AppPropsType> = (props) => {
const App = () => {
    // const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    // <Profile store={props.store}/>}
                    <Profile />}
                />
                <Route path='/dialogs' render={() =>
                    // <DialogsContainer store={props.store}/>
                    <DialogsContainer/>
                }/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/sidebar' render={() =>
                    // <Sidebar state={state.sidebar}/>
                    <Sidebar />
                }/>
            </div>
        </div>
    );
}
export default App;

