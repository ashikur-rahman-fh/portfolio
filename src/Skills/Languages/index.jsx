import React from "react";

import SVGLogo from "../../SGVLogo";

import "./style.css";

const Languages = (props) => {
    const { title, languages } = props;

    const renderLanguages = () => {
        return languages.map((language, languageId) => {
            return (
                <SVGLogo
                    key={languageId.toString()}
                    componentKey={language}
                    withText
                    containerStyleConfiguration={{
                        padding: '6px 12px',
                    }}
                />
            );
        });
    };

    return (
        <div className="language-container">
            <div className="title-content">{title}</div>
            <div className="logo-content">{renderLanguages()}</div>
        </div>
    );
};

export default Languages;