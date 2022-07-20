import React from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Navbar} from "./Components/Navbar/Navbar";
import {Profile} from "./Components/Profile/Profile";
import {Dialogs} from "./Components/Dialogs/Dialogs";
import {News} from "./Components/News/News";
import {Music} from "./Components/Music/Music";
import {Settings} from "./Components/Settings/Settings";
import {RootStateType} from "./redux/state";
import {Sidebar} from "./Components/Sidebar/Sidebar";
import {Route} from "react-router-dom";

type AppPropsType = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const App = (props: AppPropsType) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() =>
                    <Profile
                        addPostCallback={props.addPost}
                        profilePageState={props.state.profilePage}
                        updateNewPostText={props.updateNewPostText}
                    />}
                />
                <Route path='/dialogs' render={() =>
                    <Dialogs state={props.state.dialogPage}/>
                }/>
                <Route path='/news' render={News}/>
                <Route path='/music' render={Music}/>
                <Route path='/settings' render={Settings}/>
                <Route path='/sidebar' render={() => <Sidebar state={props.state.sidebar}/>}/>
            </div>
        </div>
    );
}
export default App;

