import React from 'react';
import { movieIMG } from '../api/Api';

const DisplayMovieResult = ({ result }) => {
    const isPosterUrlValid =
        result.poster_path !== null ? `${movieIMG}/${result.poster_path}` : '/svgs/TMDB_LOGO.svg';

    return (
        <>
            <div
                className='card flex flex-wrap max-w-[200px] h-[300px] cursor-pointer text-left my-[50px] mx-[20px]'
                id={result.id}
            >
                <img
                    src={`${isPosterUrlValid}`}
                    className='card-poster w-full h-full block object-cover rounded-[5px]'
                    alt={`${result.title} Poster`}
                ></img>
                <div className='card-release_date text-[#bebebe] text-xs mt-[10px] mb-[5px]'>
                    {result.release_date && result.release_date.split('-')[0]}
                </div>
                <div className='card-title w-full h-[12%] text-[0.8rem] text-white'>
                    <p>{result.title}</p>
                </div>
            </div>
        </>
    );
};

export default DisplayMovieResult;
