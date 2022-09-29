import React from "react";

import displayPicture from "../resource/image/dp.png";

import { DETAILED_INFO, TITLE, DUMMY_CIRCLE_COUNT } from "./constants";

import "./style.css";

const About = (props) => {

    const renderDummyChildCircles = () => {
        let dummyElements = [];
        for (let elementCount = 0; elementCount < DUMMY_CIRCLE_COUNT; elementCount++) {
            dummyElements.push(<div key={elementCount.toString()} className="dummy-circle-child"></div>);
        }

        return dummyElements;
    };

    return (
        <div className="about-container outmost-container">
            <div className="dummy-circle"></div>
            <div className="dummy-circle-container">
                {renderDummyChildCircles()}
            </div>

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