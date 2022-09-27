import React from "react";

import TypingAnimator from "../../TypingAnimator";

import { PROFILE } from "../../constants";
import { HOME_SUFFIX } from "./constants";

import "./style.css";

const Home = (props) => {
    const displayText = `${PROFILE.NAME}${HOME_SUFFIX }`
    return (
        <div className="home-container">
            <a className="home-link" href="/">
                <TypingAnimator
                    content={displayText}
                    styleConfiguration={{
                        textTransform: 'lowercase',
                        fontWeight: 500,
                    }}
                />
            </a>
        </div>
    )
};

export default Home;
