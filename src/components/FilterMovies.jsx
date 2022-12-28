import React from 'react';

const FilterMovies = () => {
    return (
        <>
            <div className='fixed navlink-container gap-[40px] flex mt-[100px] items-center flex-col'>
                <button
                    className='popular flex flex-col justify-center items-center text-[#eaeaea] text-[0.8rem] gap-[5px]'
                    id='filter-btn'
                >
                    <img src='/svgs/trending.svg' className='popular' alt='' />
                    Popular
                </button>
                <button
                    className='top_rated flex flex-col justify-center items-center text-[#eaeaea] text-[0.8rem] gap-[5px]'
                    id='filter-btn'
                >
                    <img src='/svgs/star.svg' className='top_rated' alt='' />
                    Top <br />
                    Rated
                </button>
                <button
                    className='now_playing flex flex-col justify-center items-center text-[#eaeaea] text-[0.8rem] gap-[5px]'
                    id='filter-btn'
                >
                    <img src='/svgs/play.svg' className='now_playing' alt='' />
                    Now <br />
                    Playing
                </button>
            </div>
        </>
    );
};

export default FilterMovies;
