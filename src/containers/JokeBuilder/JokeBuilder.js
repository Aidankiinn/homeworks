import React, {useEffect, useState} from 'react';
import Button from "../../components/Button/Button";
import Jokes from "../../components/Jokes/Jokes";

const url = 'https://api.chucknorris.io/jokes/random';

const JokeBuilder = () => {
    const [jokes, setJokes] = useState([]);

    const getJoke = () => {
        const fetchData = async () => {
            const response = await fetch(url);

            if (response.ok) {
                const posts = await response.json();
                setJokes([...jokes, {value: posts.value, id: posts.id}]);
            }
        };

        fetchData().catch(e => console.error(e));
    };

    useEffect(() => {
        getJoke();
    }, []);

    return (
        <div>
            <Jokes jokes={jokes}/>
            <hr/>
            <Button getJoke={getJoke}/>
        </div>
    );
};

export default JokeBuilder;