import Axios from 'axios';
import React, { useState } from 'react';
import { baseURL, apiKEY } from '../api/Api';

const SearchMovies = ({ movies, setMovies, alertMsgModal }) => {
    const [keywords, setKeywords] = useState('');

    // Handle for get data from API based on users search
    const handleSearch = (e) => {
        setKeywords(e.target.value);
    };

    const onSubmitSearch = (e) => {
        e.preventDefault();
        Axios(`${baseURL}/search/movie?api_key=${apiKEY}&query=${keywords}&page=1`)
            .then((data) => {
                let results = data.data.results;
                console.log(results);
                if (results.length > 0) {
                    setMovies((prevState) => {
                        return { ...prevState, results: results, filterType: keywords };
                    });
                } else {
                    alertMsgModal('Movie Not Found');
                }
            })
            .catch(() => setKeywords(''));
    };

    return (
        <>
            <section className='search-container z-[1] flex justify-between bg-navbar py-1 px-3 gap-6 fixed w-full'>
                <img src='/svgs/TMDB_LOGO.svg' className='z-[1]  cursor-pointer' alt='TMDB LOGO' />
                <form onSubmit={onSubmitSearch}>
                    <div className='search-action flex gap-2 py-3 pl-2'>
                        <img
                            src='/svgs/search.svg'
                            alt='search'
                            onClick={onSubmitSearch}
                            className='search-icon z-[1] w-[1.6rem] cursor-pointer'
                        />
                        <input
                            className='bg-navbar text-slate-700 border-none placeholder:text-sm relative -left-[42px] w-[170px] transition duration-300 ease-in-out hover:bg-[#c9cdd0] hover:w-[200px] hover:placeholder:text-slate-700 hover:placeholder:italic focus:placeholder:italic focus:ring focus:ring-blue-200 focus:outline-none focus:bg-[#c9cdd0] focus:placeholder:text-slate-700 focus:w-[200px] py-1 px-4 pl-[45px] rounded-2xl'
                            type='text'
                            name='searchMovie'
                            onChange={handleSearch}
                            placeholder='Search Movies...'
                        />
                    </div>
                </form>
            </section>
        </>
    );
};

export default SearchMovies;
