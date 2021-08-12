import React, {Component} from 'react';
import Form from "../Form/Form";

class MovieList extends Component {
    render() {
        const {deleteMovie, editMovie, state} = this.props;
        return (
            state.movie.map(movie => (
                <Form
                    value={movie.title}
                    key={movie.id}
                    type="button"
                    title="Delete"
                    onDelete={() => deleteMovie(movie.id)}
                    onInputChange={(e) => {editMovie(movie.id, e.target.value)}}
                />
            ))
        );
    }
}

export default MovieList;