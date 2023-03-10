import React from 'react';
import { movieIMG } from '../api/Api';
import DefaultPoster from '/svgs/TMDB_LOGO.svg';

const MovieDetail = ({ movieDetails, handleClose, setIsLoading, isLoading }) => {
    let defaultPoster = DefaultPoster;
    let posterUrl = `${movieIMG}`;

    const { title, poster_path, backdrop_path, overview, release_date, runtime, genres } =
        movieDetails;

    let moviePoster = poster_path !== null ? `${posterUrl}${poster_path}` : defaultPoster;
    let movieBackdrop =
        backdrop_path !== null
            ? `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`
            : defaultPoster;

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
                    alt={isLoading ? 'Loading...' : title + 'Poster'}
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
                    alt={isLoading ? 'Loading...' : title + 'Poster'}
                ></img>

                <div className='movieDetail-disc'>
                    <div className='movieDetail-title'>{isLoading ? 'Loading...' : title}</div>
                    <div className='movieDetail-genres'>{`Genres: ${
                        isLoading ? 'Loading...' : genresList
                    }`}</div>
                    <div> {`Runtime: ${isLoading ? 'Loading...' : runtime + ' min'}`}</div>
                    <div>{`Release date: ${isLoading ? 'Loading...' : release_date}`}</div>
                    <h4 style={{ color: '#eaeaea', marginTop: '30px' }}>Overview</h4>
                    <div className='movieDetail-overview'>
                        {isLoading ? 'Loading...' : overview}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
