import React from 'react';
import Form from "../Form/Form";

const MovieForm = (props) => {
    const {addMovie, takeMovie} = props;
    return (
        <form onSubmit={addMovie}>
            <Form
                title="Add"
                placeholder="Add movie"
                type="submit"
                onInputChange={takeMovie}
            />
        </form>
    );
};

export default MovieForm;