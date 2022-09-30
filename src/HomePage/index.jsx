import React from "react";

import Skills from "../Skills";
import About from "../About";

const HomePage = (props) => {

    return (
        <React.Fragment>
            <About />
            <Skills />
        </React.Fragment>
    );
};

export default HomePage;