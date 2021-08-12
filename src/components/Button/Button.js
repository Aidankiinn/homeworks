import React from 'react';

const Button = ({getJoke}) => {
    return <button type="button" onClick={getJoke}>Next Joke</button>
};

export default Button;