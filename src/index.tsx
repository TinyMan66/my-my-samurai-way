import React from 'react';
import './index.css';
import {addPost, RootStateType, state, subscribe, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree();

subscribe(rerenderEntireTree);