import React from "react";
import { get } from "lodash";

import SVGLogo from "../SGVLogo";

import { TITLE, PROJECTS } from "./constants";

import "./style.css";

const Projects = (props) => {

    const renderProjects = () => {
        return Object.entries(PROJECTS).map(([projectKey, projectDetails]) => {
            const name = get(projectDetails, 'NAME');
            const logo = get(projectDetails, 'LOGO');
            const visitText = get(projectDetails, 'VISIT.TEXT');
            const visitLink = get(projectDetails, 'VISIT.LINK');
            const technologies = get(projectDetails, 'TECHNOLOGIES');

            return (
                <li key={projectKey.toString()} className="project">
                    <div className="logo-details-container">
                        <div className="logo-container">
                            <SVGLogo className="project-logo" componentKey={logo} />
                        </div>
                        <div className="details-container">
                            <div className="project-name">{name}</div>
                            <div className="project-tech">{technologies}</div>
                            {visitText && (
                                    <div className="visit-option">
                                        <a href={visitLink} target="blank">{visitText}</a>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </li>
            );
        });
    };


    return (
        <div id="projects" className="projects-container outmost-container">
            <div className="section-title-container">
                <span className="section-title">{TITLE}</span>
            </div>
            <ul className="project-item-container">
                {renderProjects()}
            </ul>
        </div>
    );
};

export default Projects;