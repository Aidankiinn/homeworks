import React, {Component} from 'react';
import "./MovieBuilder.css";
import Form from "../../components/Form/Form";
import {nanoid} from "nanoid";

class MovieBuilder extends Component {
    state = {
        movie: [],
        movieName: '',
    };

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Post] ShouldUpdate');
    //     return nextProps !== this.props.title ||
    //         nextProps.id !== this.props.id;
    // }

    componentWillUnmount() {
        console.log("Movie part is not visible")
    }

    takeMovie = (e) => {
        this.setState({
            movieName: e,
        })
    };

    addMovie = (e) => {
        const stateCopy = this.state;
        const movieCopy = [...this.state.movie];
        movieCopy.push({
            title: this.state.movieName,
            id: nanoid()
        });
        stateCopy.movie = movieCopy;
        this.setState(stateCopy);
        e.preventDefault();
    };

    deleteMovie = id => {
        const stateCopy = this.state;
        const movieCopy = [...this.state.movie];
        const index = this.state.movie.findIndex((p => p.id === id));
        movieCopy.splice(index, 1);
        stateCopy.movie = movieCopy;
        this.setState(stateCopy);
    };

    editMovie = (id, value) => {
        const stateCopy = this.state;
        const movieCopy = [...this.state.movie];
        stateCopy.movie = movieCopy.map(m => {
            if (id === m.id) {
                return {...m, title: value}
            }
            return m;
        });
        this.setState(stateCopy);
    }

    render() {
        console.log(this.state);
        return (
            <div className="container">
                <form onSubmit={this.addMovie}>
                    <Form
                        title="Add"
                        placeholder="Add movie"
                        type="submit"
                        onInputChange={(e) => this.takeMovie(e.target.value)}
                    />
                </form>
                <p>To watch list: </p>
                {
                    this.state.movie.map(movie => (
                        <Form
                            value={movie.title}
                            key={movie.id}
                            type="button"
                            title="Delete"
                            onDelete={() => this.deleteMovie(movie.id)}
                            onInputChange={(e) => {this.editMovie(movie.id, e.target.value)}}
                        />
                    ))
                }
            </div>
        );
    }
}

export default MovieBuilder;