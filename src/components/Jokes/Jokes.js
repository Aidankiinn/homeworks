import React from 'react';

const Jokes = ({jokes}) => {
    return <div>
        {
            jokes.map(joke => {
                return (
                    <div key={joke.id}>
                        <p><strong>Joke ID id: {joke.id}</strong></p>
                        <hr/>
                        <p>Joke is: {joke.value}</p>
                        <hr/>
                    </div>
                );
            })
        }
    </div>
};

export default Jokes;