import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer-top">
                <p>info@sitename.com</p>
                <div className="icons">
                    <a href="#" className="icon ic-fb"/>
                    <a href="#" className="icon ic-tw"/>
                </div>
                <p>(000) 777 777 7777</p>
            </div>
            <span className="line"/>
            <div className="footer-bottom">
                <p>Copyright(c) website name. <a href="#" className="designed">Designed by:
                    www.alltemplateneeds.com</a> / Images from: <a href="#">www.wallpaperswide.com</a> , <a
                    href="#">www.photorack.net</a></p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;