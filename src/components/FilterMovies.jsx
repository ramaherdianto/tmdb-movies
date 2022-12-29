import React from 'react';

const FilterMovies = ({ showMoviesOnBtn }) => {
    return (
        <>
            <div className='navlink-container'>
                <button className='popular' id='filter-btn' onClick={showMoviesOnBtn}>
                    <img src='/svgs/trending.svg' className='popular' alt='' />
                    Popular
                </button>
                <button className='top_rated' id='filter-btn' onClick={showMoviesOnBtn}>
                    <img src='/svgs/star.svg' className='top_rated' alt='' />
                    Top <br />
                    Rated
                </button>
                <button className='now_playing' id='filter-btn' onClick={showMoviesOnBtn}>
                    <img src='/svgs/play.svg' className='now_playing' alt='' />
                    Now <br />
                    Playing
                </button>
            </div>
        </>
    );
};

export default FilterMovies;
