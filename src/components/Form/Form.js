import React, {Component} from 'react';
import "./Form.css";

class Form extends Component {
    render() {
        const {placeholder,value,type, title, onInputChange, onBtnClick} = this.props;
        return (
            <div className="form">
                <input value={value} type="text" placeholder={placeholder} onChange={onInputChange}/>
                <button type={type} className="btn-add" onClick={onBtnClick}>{title}</button>
            </div>
        );
    }
}

export default Form;