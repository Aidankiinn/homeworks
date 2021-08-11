import React, {Component} from 'react';
import "./MovieBuilder.css";
import Form from "../../components/Form/Form";
import {nanoid} from "nanoid";

class MovieBuilder extends Component {
    state = {
        movie: [],
        movieName: '',
    };

    takeMovie = (e) => {
        this.setState({
            movieName: e,
        })
    }

    addMovie = (e) => {
        e.preventDefault();
        this.setState({
            movie: this.state.movie.map(film => {
                return {
                    ...film,
                    title: this.state.movieName,
                    id: nanoid()
                }
            })
        })
        this.setState({
            movieName: '',
        })
    }


    render() {
        return (
            <form className="container">
                <Form
                    title="Add"
                    placeholder="Add movie"
                    type="submit"
                    onInputChange={(e) => this.takeMovie(e.target.value)}
                    onBtnClick={this.addMovie}
                />
                <p>To watch list: </p>
                {
                    this.state.movie.map(movie => (
                        <Form
                            value={movie.title}
                            key={movie.id}
                            type="button"
                            title="Delete"
                        />
                    ))
                }

            </form>
        );
    }
}

export default MovieBuilder;