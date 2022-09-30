import React from "react";

import "./style.css";

const Footer = (props) => {
    return (
        <div className="footer outmost-container">
            <div className="separator">
                <div className="left"></div>
                <div className="middle"></div>
                <div className="right"></div>
            </div>
            <div className="content">
                <div>&copy; Copyright 2022 Ashikur Rahman</div>
                <div>Desktop version</div>
            </div>
        </div>
    );
};

export default Footer;
