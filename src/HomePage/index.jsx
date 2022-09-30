import React from "react";

import Skills from "../Skills";
import About from "../About";

import { Link } from "react-router-dom";

const HomePage = (props) => {

    return (
        <React.Fragment>
            <About />
            <Skills />
            <Link to="rain" >see rain</Link>
        </React.Fragment>
    );
};

export default HomePage;