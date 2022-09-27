import React from "react";

import TypingAnimator from "../../TypingAnimator";

import { PROFILE } from "../../constants";

import "./style.css";

const Home = (props) => {
    return (
        <div className="home-container">
            <a className="home-link" href="/">
                <TypingAnimator
                    content={PROFILE.NAME}
                    styleConfiguration={{
                        textTransform: 'uppercase',
                        fontWeight: 500,
                    }}
                />
            </a>
        </div>
    )
};

export default Home;
