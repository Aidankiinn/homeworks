import React from 'react';
import "./NavigationItems.css";
import {NavLink} from "react-router-dom";

const NavigationItems = () => {
    return (
        <ul className="NavigationItems">
            <li className="NavigationItem"><NavLink to="/pages/home" exact>Home</NavLink></li>
            <li className="NavigationItem"><NavLink to="/pages/about">About</NavLink></li>
            <li className="NavigationItem"><NavLink to="/pages/contacts">Contacts</NavLink></li>
            <li className="NavigationItem"><NavLink to="/pages/divisions">Divisions</NavLink></li>
            <li className="NavigationItem"><NavLink to="/pages/admin">Admin</NavLink></li>
        </ul>
    );
};

export default NavigationItems;