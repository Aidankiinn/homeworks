import React from 'react';
import {Route} from "react-router-dom";
import Header from "../../components/Header/Header";
import MainBlock from "../../components/MainBlock/MainBlock";
import CardBlock from "../../components/CardBlock/CardBlock";
import PeopleBlock from "../../components/PeopleBlock/PeopleBlock";
import ConnectBlock from "../../components/ConnectBlock/ConnectBlock";
import Footer from "../../components/Footer/Footer";
import "./PortfolioBuilder.css";

const PortfolioBuilder = ({history, match}) => {
    const goToHome = () => {
        history.replace("/portfolio/home");
    };
    const goToAbout = () => {
        history.replace("/portfolio/about");
    };
    const goToContact = () => {
        history.replace("/portfolio/contact");
    };

    return (
        <div>
            <div className="top">
                <div className="container">
                    <Header
                        onAboutClick={goToAbout}
                        onHomeClick={goToHome}
                        onContactClick={goToContact}
                    />
                    <MainBlock/>
                </div>
            </div>
            <Route path={match.path + "/home"} component={CardBlock}/>
            <Route path={match.path + "/about"} component={PeopleBlock}/>
            <Route path={match.path + "/contact"} component={ConnectBlock}/>
            <Footer/>
        </div>
    );
};


export default PortfolioBuilder;