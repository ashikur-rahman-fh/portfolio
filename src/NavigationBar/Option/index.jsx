import React from "react";
import { get } from "lodash"

import { MENU } from "./constants";

import "./style.css";

const Option = (props) => {
    const renderMenuOptions = () => {
        return Object.entries(MENU).map(([menuKey, menuOption]) => {
            const displayText = get(menuOption, 'displayText');
            const link = get(menuOption, 'link');

            return (
                <li
                    key={menuKey.toString()}
                    className="menu-option"
                >
                    <a className="text-hover-style" href={link}>{displayText}</a>
                </li>
            );
        });
    };

    return (
        <div className="option-container">
            <ul className="option-list-container">
                {renderMenuOptions()}
            </ul>
        </div>
    );
};

export default Option;
