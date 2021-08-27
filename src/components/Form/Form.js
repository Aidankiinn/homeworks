import React from 'react';
import './Form.css';

const Form = (props) => {
    const {onSubmit, post, onChange, btnTitle, title} = props;
    return (
        <form onSubmit={onSubmit} className="addPost">
            <h2>{title}</h2>
            <div className="labels">
                <label>Title:<br/> <input
                    name="title"
                    placeholder="Enter the title of post"
                    value={post.title}
                    onChange={onChange}
                /></label>
                <label>Description: <br/> <textarea
                    rows="10"
                    name="message"
                    placeholder="Enter the content of post"
                    value={post.message}
                    onChange={onChange}
                /></label>
            </div>
            <button className="btn-read">{btnTitle}</button>
        </form>
    );
};

export default Form;