import React from "react";

import Skills from "../Skills";
import About from "../About";
import Experience from "../Experience";
import Projects from "../Projects";

const HomePage = (props) => {

    return (
        <React.Fragment>
            <About />
            <Experience />
            <Skills />
            <Projects />
        </React.Fragment>
    );
};

export default HomePage;