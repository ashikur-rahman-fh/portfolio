import React from "react";

import Home from "./Home";
import Option from "./Option";
import Social from "./Social";
import MoveToTop from "./MoveToTop";

import "./style.css";

const NavigationBar = (props) => {
    return (
        <div id="nav-bar" className="nav-bar-container outmost-container">
            <Home />
            <Option />
            <Social />
            <MoveToTop />
        </div>
    );
};

export default NavigationBar;