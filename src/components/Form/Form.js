import React from 'react';
import "./Form.css";

const Form = (props) => {
    const {placeholder,value,type, title, onInputChange, onDelete} = props;
    return (
        <div className="form">
            <input value={value} type="text" placeholder={placeholder} onChange={onInputChange}/>
            <button type={type} className={"btn-" + title} onClick={onDelete}>{title}</button>
        </div>
    );
};

export default Form;
