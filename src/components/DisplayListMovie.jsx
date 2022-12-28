import React from 'react';
import DisplayMovieResult from './DisplayMovieResult';

const DisplayListMovie = ({ results, filterType }) => {
    let filterHeader = '';

    switch (filterType) {
        case 'popular':
            filterHeader = 'Popular Movies';
            break;
        case 'now_playing':
            filterHeader = 'Now Playing';
            break;
        case 'top_rated':
            filterHeader = 'Top Rated Movies';
            break;
        default:
            filterHeader = `Results for ${filterType}`;
            break;
    }

    return (
        <>
            <div className='card-container pt-0 px-[4vw] pb-[150px] '>
                <h1 className='w-full text-white font-medium text-[1.7rem] text-left mt-[110px] sm:ml-12 capitalize'>
                    {filterHeader}
                </h1>
                <div className='flex flex-wrap justify-center'>
                    {results.map((result) => {
                        return <DisplayMovieResult key={result.id} result={result} />;
                    })}
                </div>
            </div>
        </>
    );
};

export default DisplayListMovie;
