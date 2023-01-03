import ReactDOM from "react-dom";
import SocialNetworkApp from "./App";
import React from "react";

it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SocialNetworkApp />, div);
    ReactDOM.unmountComponentAtNode(div);
})