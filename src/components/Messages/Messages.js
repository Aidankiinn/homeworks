import React from 'react';
import "./Messages.css";

const Messages = (props) => {
    return (
        <div className="message">
            <div>
                Author: <h3>{props.author}</h3>
                <div>Date: {props.date}</div>
            </div>
            <div style={{width: '40%'}}>Message: {props.message}</div>
            {props.children}
        </div>
    );
};

export default Messages;