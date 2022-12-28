import React from 'react';

const SearchMovies = () => {
    return (
        <>
            <section className='search-container z-[1] flex justify-start bg-navbar py-1 px-3 gap-6 fixed w-full'>
                <img src='/svgs/TMDB_LOGO.svg' className='z-[1]  cursor-pointer' alt='TMDB LOGO' />
                <div className='search-action flex gap-2 py-3 pl-2'>
                    <img
                        src='/svgs/search.svg'
                        alt='search'
                        className='search-icon z-[1] w-[1.6rem]'
                    />
                    <input
                        className='bg-navbar border-none relative -left-[42px] w-[170px] transition duration-300 ease-in-out hover:bg-[#c9cdd0] hover:w-[200px] hover:placeholder:text-slate-700 hover:placeholder:italic focus:placeholder:italic focus:ring focus:ring-blue-200 focus:outline-none focus:bg-[#c9cdd0] focus:placeholder:text-slate-700 focus:w-[200px] py-1 px-4 pl-[45px] rounded-2xl'
                        type='text'
                        name='searchMovie'
                        placeholder='Search Movies...'
                    />
                </div>
            </section>
        </>
    );
};

export default SearchMovies;
