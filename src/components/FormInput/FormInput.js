import React from 'react';
import "./FormInput.css";

function FormInput(props) {
    const {value, type, title, onMessageChange, onNameChange} = props;
    return (
        <div className="form">
            <input value={value} type="text" placeholder="Enter your message" onChange={onMessageChange}/>
            <input value={value} type="text" placeholder="Enter your name" onChange={onNameChange}/>
            <button type={type} className={"btn-" + title}>{title}</button>
        </div>
    );
}

export default FormInput;