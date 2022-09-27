import React, { useState, useEffect, useMemo } from "react";

import { FIRST_INDEX, CURSOR_CLASSNAME, NO_CURSOR_CLASSNAME } from "./constants";

import "./style.css";

const TypingAnimator = (props) => {
    const { content, styleConfiguration, interval, cursorInterval } = props;

    const [currentDisplyIndex, setCurrentDisplyIndex] = useState(FIRST_INDEX);
    const [cursorClass, setCursorClass] = useState(CURSOR_CLASSNAME);

    const contentLength = useMemo(() => {
        return content.length;
    }, [content]);
    const currentContent = useMemo(() => {
        return content.substring(0, currentDisplyIndex + 1);
    }, [currentDisplyIndex, content]);

    useEffect(() => {
        const typingInterval = setInterval(() => {
            setCurrentDisplyIndex((previousDisplayIndex) => {
                return (previousDisplayIndex + 1) % contentLength;
            });
        }, interval);

        return () => clearInterval(typingInterval);
    }, [currentDisplyIndex, interval, contentLength]);

    useEffect(() => {
        const toggleCursor = setInterval(() => {
            setCursorClass((previosCursorClass) => {
                if (previosCursorClass === CURSOR_CLASSNAME) {
                    return NO_CURSOR_CLASSNAME;
                } else {
                    return CURSOR_CLASSNAME;
                }
            });
        }, cursorInterval);

        return () => clearInterval(toggleCursor);
    }, [cursorInterval]);
    
    return (
        <span
            className={`animator-container ${cursorClass}`}
            style={{...styleConfiguration}}
        >
            {currentContent}
        </span>
    );
};

TypingAnimator.defaultProps = {
    interval: 300,
    cursorInterval: 500,
};

export default TypingAnimator;
