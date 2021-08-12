import React, {useEffect, useState} from 'react';
import {nanoid} from "nanoid";
import MovieForm from "../../components/MovieForm/MovieForm";
import MovieList from "../../components/MovieList/MovieList";
import "./MovieBuilder.css";

const MovieBuilder = () => {
    const [movie, setMovie] = useState([]);
    const [movieName, setMovieName] = useState('');

    const takeMovie = (e) => {
        setMovieName(e);
    };

    const addMovie = (e) => {
        setMovie([...movie, {title: movieName, id: nanoid()}]);
        e.preventDefault();
    };

    const deleteMovie = id => {
        setMovie(movie.filter(m => m.id !== id));
    };

    const editMovie = (id, value) => {
        setMovie(movie.map(m => {
            if (m.id === id) {
                return {
                    ...m,
                    title: value,
                }
            }
            return m;
        }));
    }

    return (
        <div className="container">
            <MovieForm addMovie={addMovie} takeMovie={(e) => takeMovie(e.target.value)}/>
            <p>To watch list: </p>
            {<MovieList deleteMovie={deleteMovie} editMovie={editMovie} movie={movie}/>}
        </div>
    );
};

export default MovieBuilder;
