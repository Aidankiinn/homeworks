import React from 'react';
import "./Messages.css";

const Messages = (props) => {
    return (
        <div className="message">
            Author: <h3 className="Author">{props.author}</h3>
            Message: <div style={{fontSize: "20px", color: "red"}}>{props.message}</div>
            <div style={{margin: "10px 0px"}}>Date: {props.date}</div>
            {props.children}
        </div>
    );
};

export default Messages;