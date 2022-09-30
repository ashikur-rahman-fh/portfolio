import React from "react";
import { get } from "lodash";

import Work from "./Work";

import { TITLE, EXPERIENCES } from "./constants";

import "./style.css";

const Experience = (props) => {

    const renderWorkDetails = () => {
        return Object.entries(EXPERIENCES).map(([workKey, work]) => {
            const status = get(work, 'status');
            const details = get(work, 'details');
            
            return (
                <Work
                    key={workKey.toString()}
                    status={status}
                    details={details}
                />
            );
        });
    };

    return (
        <div id="experience" className="experience-container outmost-container">
            <div className="section-title-container">
                <span className="section-title">{TITLE}</span>
            </div>
            {renderWorkDetails()}
        </div>
    );
};

export default Experience;