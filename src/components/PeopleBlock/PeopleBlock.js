import React from 'react';
import "./PeopleBlock.css";

import PeopleInfo from "../PeopleInfo/PeopleInfo";

const PeopleBlock = () => {
    return (
        <div className="people-block">
            <div className="container">
                <h4>tempor interdum</h4>
                <p>Integer vitae libero ac risus egestas placerat</p>
                <div className="boxes row">
                    <PeopleInfo color="red" src="../../assets/person-1.jpg"/>
                    <PeopleInfo color="yellow" src="../../assets/person-2.jpg"/>
                    <PeopleInfo color="cyan" src="../../assets/person-3.jpg"/>
                </div>
            </div>
        </div>
    );
};

export default PeopleBlock;