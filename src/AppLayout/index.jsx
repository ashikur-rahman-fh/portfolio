import React from "react";
import { Outlet } from "react-router-dom";

import NavigationBar from "../NavigationBar";

const AppLayout = (props) => {

    return (
        <React.Fragment>
            <NavigationBar />
            <Outlet />
        </React.Fragment>
    );
};

export default AppLayout;