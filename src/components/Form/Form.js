import React, {Component} from 'react';
import "./Form.css";

class Form extends Component {
    componentWillUnmount() {
        console.log("Movie is deleted");
    };
    render() {
        const {placeholder,value,type, title, onInputChange, onDelete} = this.props;
        return (
            <div className="form">
                <input value={value} type="text" placeholder={placeholder} onChange={onInputChange}/>
                <button type={type} className={"btn-" + title} onClick={onDelete}>{title}</button>
            </div>
        );
    }
}

export default Form;