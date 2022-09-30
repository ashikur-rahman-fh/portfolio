import React from "react";
import { get } from "lodash";

import SVGLogo from "../../SGVLogo";

import "./style.css";

const Work = (props) => {
    const { status, details } = props;

    const designation = get(status, 'designation');
    const logoKey = get(status, 'logoKey');
    const organization = get(status, 'organization');
    const duration = get(status, 'duration');
    const domain = get(status, 'domain');
    const link = get(status, 'link');

    const renderDetails = () => {
        return details.map((point, index) => {
            return <li key={index.toString()} className="detail-point">{point}</li>
        });
    };

    return (
        <div className="work-container">
            <div className="work-status">
                <div className="logo-designation-container">
                    <SVGLogo className="experience-logo" componentKey={logoKey} />
                    <span className="designation">{designation}</span>
                </div>
                <div className="organization-detail-container">
                    <div className="duration">{duration}</div>
                    <div className="organization">
                        <a target="blank" href={link}>{organization}</a>
                    </div>
                    <div className="domain">{domain}</div>
                </div>
            </div>
            <div className="work-details">
                <ul className="detail-point-container">
                    {renderDetails()}
                </ul>
            </div>
        </div>
    );
};

export default Work;