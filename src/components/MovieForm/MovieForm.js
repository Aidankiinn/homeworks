import React, {Component} from 'react';
import Form from "../Form/Form";

class MovieForm extends Component {
    render() {
        const {addMovie, takeMovie} = this.props;
        return <form onSubmit={addMovie}>
            <Form
                title="Add"
                placeholder="Add movie"
                type="submit"
                onInputChange={takeMovie}
            />
        </form>;
    }
}

export default MovieForm;