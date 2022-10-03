import React from "react";
import SVGLogo from "../../SGVLogo";

import { LOGO_KEY } from "../../SGVLogo/constants";
import { NAV_BAR_HASH_LINK } from "./constants";

import "./style.css";

const MoveToTop = (props) => {
    return (
        <div className="move-to-top-container">
            <a className="move-to-top-button" href={NAV_BAR_HASH_LINK}>
                <SVGLogo className="up-arrow-logo" componentKey={LOGO_KEY.UP_ARROW} />
            </a>
        </div>
    );
};

export default MoveToTop;