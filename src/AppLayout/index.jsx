import React from "react";
import { Outlet } from "react-router-dom";

import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

const AppLayout = (props) => {

    return (
        <React.Fragment>
            <NavigationBar />
            <Outlet />
            <Footer />
        </React.Fragment>
    );
};

export default AppLayout;