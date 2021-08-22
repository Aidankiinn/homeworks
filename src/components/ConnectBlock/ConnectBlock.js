import React from 'react';
import "./ConnectBlock.css";

const ConnectBlock = () => {
    return (
        <div className="connect-block">
            <div className="container">
                <span className="ic-mail"/>
                <h4>connect with us</h4>
                <p>Vivamus vestibulum nulla nec ante</p>
                <div className="connect-form">
                    <form>
                        <div className="form-inner row">
                            <input type="text" name="name" placeholder="Enter your name"
                                   className="col-12 col-sm-6"/>
                            <input type="text" name="phone" placeholder="Enter your phone"
                                   className="col-12 col-sm-6"/>
                            <textarea name="message" cols="60" rows="7" placeholder="Enter your message"
                                      className="col-12"/>
                            <button type="submit" className="link-darkBlue">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ConnectBlock;
