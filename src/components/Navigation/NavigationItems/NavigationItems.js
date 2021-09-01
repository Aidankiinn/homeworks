import React from 'react';
import "./NavigationItems.css";
import {NavLink} from "react-router-dom";
import {links} from "../../../constants";

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            {links.map(id => (
                <li className="NavigationItem" key={id}><NavLink to={"/page/" + id} exact>{id.toUpperCase()}</NavLink></li>
            ))}
            <li className="NavigationItem" key="admin"><NavLink to="/page/admin">ADMIN</NavLink></li>
        </ul>
    );
};

export default NavigationItems;