import React from 'react';
import Cards from "../Cards/Cards";

const CardBlock = () => {
    return (
        <div className="cards-block">
            <div className="container">
                <div className="row cards">
                    <Cards color="red" icon="chat"/>
                    <Cards color="yellow" icon="pencil"/>
                    <Cards color="cyan" icon="crown"/>
                    <Cards color="violet" icon="user"/>
                </div>
            </div>
        </div>
    );
};

export default CardBlock;