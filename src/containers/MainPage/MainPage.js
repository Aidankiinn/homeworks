import React from 'react';
import "./MainPage.css";
import MainBlock from "../../components/MainBlock/MainBlock";

const MainPage = ({history}) => {
    const goToPortfolio = () => {
        history.push("/portfolio");
    }

    return (
        <div>
            <MainBlock/>
            <button className="main-btn" onClick={goToPortfolio}>Get more INFORMATION</button>
        </div>
    );
};

export default MainPage;