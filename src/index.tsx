import React from 'react';
import './index.css';
import {store} from "./redux/store";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {Provider} from "./StoreContext";


export const rerenderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                {/*<App store={store}/>*/}
                <App/>
            </Provider>
        </BrowserRouter>, document.getElementById('root')
    );
}
rerenderEntireTree();
store.subscribe(rerenderEntireTree);

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state)
// });