import React from 'react';
import { movieIMG } from '../api/Api';

const MovieDetail = (movieDetails, handleClose) => {
    let defaultPosterUrl = '/svgs/TMDB_LOGO.svg';
    let posterUrl = `${movieIMG}`;

    const { title, poster_path, backdrop_path, overview, release_date, runtime, genres } =
        movieDetails.movieDetails;

    let moviePoster = poster_path !== null ? `${posterUrl}${poster_path}` : defaultPosterUrl;
    let movieBackdrop =
        backdrop_path !== null
            ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`
            : defaultPosterUrl;

    let genresList = genres
        ?.map((genre) => {
            return `${genre.name}`;
        })
        .join(', ');

    return (
        <div className='movieDetail-container'>
            <div className='movieDetail-backdrop-container'>
                <img
                    src={movieBackdrop}
                    className='movieDetail-backdrop'
                    alt={`${title} Poster`}
                ></img>
                <div className='shadow'></div>
            </div>
            <div className='movieDetail'>
                <div onClick={handleClose} className='movieDetail-close'>
                    <span>X</span>
                </div>

                <img
                    src={`${moviePoster}`}
                    className='movieDetail-poster'
                    alt={`${title} Poster`}
                ></img>

                <div className='movieDetail-disc'>
                    <div className='movieDetail-title'>{title}</div>
                    <div className='movieDetail-genres'>{`Genres: ${genresList}`}</div>
                    <div> {`Runtime: ${runtime} min`}</div>
                    <div>{`Release date: ${release_date}`}</div>
                    <h4 style={{ color: '#eaeaea', marginTop: '30px' }}>Overview</h4>
                    <div className='movieDetail-overview'>{overview}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
