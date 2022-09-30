import React from "react";
import { get } from "lodash";

import { LOGO_STORE } from "./constants";

import "./style.css";

const SVGLogo = (props) => {
    const { componentKey, className, styleConfiguration, containerStyleConfiguration, withText } = props;

    const getLogoObject = () => {
        const logoObject = get(LOGO_STORE, componentKey);

        return logoObject;
    };
    
    const getComponent = () => {
        const logoObject = getLogoObject();
        const Component = get(logoObject, 'component');

        return Component;
    };

    const getLogoText = () => {
        const logoObject = getLogoObject();
        const logoText = get(logoObject, 'text');

        return logoText;
    };

    const LogoComponent = getComponent();
    const logoText = getLogoText();

    return (
        <div
            className="logo-text-container text-hover-style"
            style={{ ...containerStyleConfiguration }}
        >
            <LogoComponent
                className={`${className} svg-logo`}
                style={{ ...styleConfiguration }} 
            />
            {withText && <span className="text">{logoText}</span>}
        </div>
    );
};

export default SVGLogo;
