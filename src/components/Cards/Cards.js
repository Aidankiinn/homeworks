import React from 'react';
import "./Cards.css";

const Cards = (props) => {
    return (
        <div className={"col-12 col-sm-6 card-" + props.color}>
            <a href="#">
                <span className={"ic-" + props.icon}/>
                <h4>Vestibulum auctor</h4>
            </a>
            <p>Praesent dapibus, neque id cursus faucibus,tortor neque egestas augue, eu vulputate magna eros eu
                erat.Aliquam erat volutpat</p>
        </div>
    );
};

export default Cards;