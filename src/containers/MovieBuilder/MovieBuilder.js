import React, {Component} from 'react';
import "./MovieBuilder.css";
import {nanoid} from "nanoid";
import MovieForm from "../../components/MovieForm/MovieForm";
import MovieList from "../../components/MovieList/MovieList";

class MovieBuilder extends Component {
    state = {
        movie: [],
        movieName: '',
    };

    componentWillUnmount() {
        console.log("MovieForm part is not visible")
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
        return (
            <div className="container">
                <MovieForm addMovie={this.addMovie} takeMovie={(e) => this.takeMovie(e.target.value)}/>
                <p>To watch list: </p>
                {this.state.movie.map(m => {
                    return <MovieList
                        key={m.id}
                        id={m.id}
                        deleteMovie={() => this.deleteMovie(m.id)}
                        editMovie={(e) => {this.editMovie(m.id, e.target.value)}}
                        title={m.title}
                    />
                })}
            </div>
        );
    }
}

export default MovieBuilder;