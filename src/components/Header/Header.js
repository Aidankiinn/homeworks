import React from 'react';
import "./Header.css";

const Header = ({onHomeClick, onAboutClick, onContactClick}) => {
    return (
        <header className="header">
            <div className="row">
                <a href="#" className="logo">Aidana's Blog</a>
                <nav className="main-nav">
                    <ul>
                        <li><button onClick={onHomeClick}>Home</button></li>
                        <li><button onClick={onAboutClick}>About</button></li>
                        <li><button onClick={onContactClick}>Contact</button></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;