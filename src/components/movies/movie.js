import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap';

const Movie = (props) => {
    const [movieData, setMovieData] = useState([])
    console.log(props);
    const url = `http://www.omdbapi.com/?i=${props.movieID}&apikey=263d22d8`;
    // var a;
    // const response = fetch(url);
    // const responseJson = response.json();

    // if (responseJson) {
    //     a = responseJson
    // }
    // const evalFind = (a) => {
    //     setMovieId(a)
    //     console.log(movie.imdbID);
    // }
    const FavouriteComponent = props.favouriteComponent;

    useEffect(async () => {
        const response = await fetch(url);
        const responseJson = response.json();
        console.log(responseJson);
        if (responseJson) {
            setMovieData(responseJson)
        }
    }, []);

    return (
        <>
            <h3>{movieData.Title}</h3>
        </>
    );
};

export default Movie;
