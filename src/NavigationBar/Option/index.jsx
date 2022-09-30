import React from "react";
import { get } from "lodash"

import { MENU } from "./constants";
import { Link } from "react-router-dom";

import "./style.css";

const Option = (props) => {
    const renderMenuOptions = () => {
        return Object.entries(MENU).map(([menuKey, menuOption]) => {
            const displayText = get(menuOption, 'displayText');
            const link = get(menuOption, 'link');
            const route = get(menuOption, 'route');

            const renderRouteElement = () => {
                if (route) {
                    return <Link className="menu-link text-hover-style" to={link}>{displayText}</Link>
                }

                return <a className="menu-link text-hover-style" href={link}>{displayText}</a>
            };

            return (
                <li
                    key={menuKey.toString()}
                    className="menu-option"
                >
                    {renderRouteElement()}
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
