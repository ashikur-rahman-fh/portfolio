import React from "react";

import { PDF_CONFIG } from "./constants";

import "./style.css";

const Resume = () => {
    return (
        <div className="resume-container outmost-container">
            <div className="pdf-container">
                <iframe
                    title="resume"
                    src={PDF_CONFIG.EMBEDED_LINK}
                    width={PDF_CONFIG.WIDTH}
                    height={PDF_CONFIG.HEIGHT}
                    allow={PDF_CONFIG.ALLOW}
                ></iframe>
            </div>
        </div>
    );
};

export default Resume;