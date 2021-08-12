import React from 'react';
import Form from "../Form/Form";

const MovieList = ({deleteMovie, editMovie, movie}) => {
    return (
        movie.map(movie => (
            <Form
                value={movie.title}
                key={movie.id}
                type="button"
                title="Delete"
                onDelete={() => deleteMovie(movie.id)}
                onInputChange={(e) => {
                    editMovie(movie.id, e.target.value)
                }}
            />
        ))
    );
};

export default MovieList;