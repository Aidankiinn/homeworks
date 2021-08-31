import React from 'react';
import "./Layout.css";
import Toolbar from "../../Navigation/Toolbar/Toolbar";

const Layout = ({children}) => {
    return (
        <>
            <Toolbar/>
            <main className="Layout-Content">
                {children}
            </main>
        </>
    );
};

export default Layout;