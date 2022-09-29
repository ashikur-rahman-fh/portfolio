import React from "react";

import displayPicture from "../resource/image/dp.png";

import { DETAILED_INFO, TITLE } from "./constants";

import "./style.css";

const About = (props) => {

    return (
        <div className="about-container outmost-container">
            <div className="dummy-circle">nothing</div>

            <div className="bio-container">
                <div className="key-text" >{TITLE}</div>
                <div className="detailed-text">{DETAILED_INFO}</div>
            </div>
            <div className="display-picture-container">
                <img className="display-picture" src={displayPicture} alt="dp" />
            </div>
        </div>
    );
};

export default About;