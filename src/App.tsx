import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {StoreType} from "./redux/state";
import {Sidebar} from "./Components/Sidebar/Sidebar";
import {Route} from "react-router-dom";

type AppPropsType = {
    store: StoreType
}

const App: React.FC<AppPropsType> = (props) => {
    const state = props.store.getState();
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    <Profile
                        profilePageState={state.profilePage}
                        dispatch={props.store.dispatch.bind(props.store)}
                    />}
                />
                <Route path='/dialogs' render={() =>
                    <Dialogs store={props.store}/>
                }/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/sidebar' render={() => <Sidebar state={state.sidebar}/>}/>
            </div>
        </div>
    );
}
export default App;

