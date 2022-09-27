import React from "react";

import Home from "./Home";
import Option from "./Option";
import Social from "./Social";

import "./style.css";

const NavigationBar = (props) => {
    return (
        <div className="nav-bar-container outmost-container">
            <Home />
            <Option />
            <Social />
        </div>
    );
};

export default NavigationBar;