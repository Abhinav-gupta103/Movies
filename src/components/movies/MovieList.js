import React from 'react';
// import Movie from './movie';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div key={index} className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					{/* <Movie className="movie-details" movieId={movie.imdbID}/> */}
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
