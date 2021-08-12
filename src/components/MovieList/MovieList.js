import React, {Component} from 'react';
import Form from "../Form/Form";

class MovieList extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Movie] ShouldUpdate');
        return nextProps.title !== this.props.title;
    }

    render() {
        const {deleteMovie, editMovie, title} = this.props;
        return (
            <Form
                value={title}
                type="button"
                title="Delete"
                onDelete={deleteMovie}
                onInputChange={editMovie}
            />

        );
    }
}

export default MovieList;