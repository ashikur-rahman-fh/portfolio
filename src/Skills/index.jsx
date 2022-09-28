import React from "react";
import Languages from "./Languages";

import { PROGRAMMING_LANGUAGES, MARKUP_LANGUAGES, FRAMEWORKS, SECTION_TITLE } from "./constants";

import "./style.css";

const Skills = (props) => {
    
    return (
        <div id="skill" className="skill-container outmost-container">
            <div className="section-title-container">
                <span className="section-title">{SECTION_TITLE}</span>
            </div>

            <div className="programming-language-container">
                <Languages
                    title={PROGRAMMING_LANGUAGES.TITLE}
                    languages={PROGRAMMING_LANGUAGES.LANGUAGES}
                />
                <Languages
                    title={MARKUP_LANGUAGES.TITLE}
                    languages={MARKUP_LANGUAGES.LANGUAGES}
                />
                <Languages
                    title={FRAMEWORKS.TITLE}
                    languages={FRAMEWORKS.LANGUAGES}
                />
            </div>
        </div>
    );
};

export default Skills;