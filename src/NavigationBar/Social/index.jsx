import React from "react";
import { get } from "lodash";

import { SOCIAL_PROFILES } from "./constants";

import "./style.css";

const Social = (props) => {
    const renderSocialProfiles = () => {
        return Object.entries(SOCIAL_PROFILES).map(([profileKey, profile]) => {
            const LogoComponent = get(profile, 'LogoComponent');
            const link = get(profile, 'link');
            const target = get(profile, 'target');

            return (
                <li
                    key={profileKey.toString()}
                    className="profile-list"
                >
                    <a className="logo-link" href={link} target={target}>
                        <LogoComponent className="social-logo"/>
                    </a>
                </li>
            );
        });
    }

    return (
        <div className="social-container">
            <ul className="profile-list-container">
                {renderSocialProfiles()}
            </ul>
        </div>
    );
};

export default Social;
