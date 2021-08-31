import React from 'react';
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const Toolbar = () => {
    return (
        <header className="Toolbar">
            <div className="Toolbar-logo"><h1>Static Pages</h1></div>
            <nav><NavigationItems/></nav>
        </header>
    );
};

export default Toolbar;