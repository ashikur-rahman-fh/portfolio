import React from "react";

import Skills from "../Skills";
import About from "../About";
import Experience from "../Experience";

const HomePage = (props) => {

    return (
        <React.Fragment>
            <About />
            <Experience />
            <Skills />
        </React.Fragment>
    );
};

export default HomePage;