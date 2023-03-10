import Axios from 'axios';
import React, { useState } from 'react';
import { baseURL, apiKEY } from '../api/Api';

const SearchMovies = ({
    movies,
    setMovies,
    alertMsgModal,
    handleClose,
    isLoading,
    setIsLoading,
}) => {
    const [keywords, setKeywords] = useState('');

    // Handle for get data from API based on users search
    const handleSearch = (e) => {
        setKeywords(e.target.value);
    };

    const onSubmitSearch = (e) => {
        e.preventDefault();
        handleClose();
        setIsLoading(true);
        Axios(`${baseURL}/search/movie?api_key=${apiKEY}&query=${keywords}&page=1`)
            .then((data) => {
                let results = data.data.results;
                if (results.length > 0) {
                    setMovies((prevState) => {
                        return { ...prevState, results: results, filterType: keywords };
                    });
                    setIsLoading(false);
                } else {
                    alertMsgModal();
                    setIsLoading(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setIsLoading(false);
            });
    };

    return (
        <>
            <section className='search-container z-[1] flex justify-between bg-navbar py-1 px-3 gap-6 fixed w-full'>
                <img
                    src='/svgs/TMDB_LOGO.svg'
                    className='z-[1]  cursor-pointer'
                    alt='TMDB LOGO'
                    onClick={handleClose}
                />
                <form onSubmit={onSubmitSearch}>
                    <div className='search-action flex gap-2 py-[10px] pl-2 mr-6'>
                        <input
                            className='bg-navbar text-slate-700 border-none placeholder:text-sm relative -right-[42px] w-[170px] transition duration-300 ease-in-out hover:bg-[#c9cdd0] hover:w-[200px] hover:placeholder:text-slate-700 hover:placeholder:italic focus:placeholder:italic focus:ring focus:ring-blue-200 focus:outline-none focus:bg-[#c9cdd0] focus:placeholder:text-slate-700 focus:w-[200px] py-1 px-4 pr-[45px] rounded-2xl'
                            type='text'
                            name='searchMovie'
                            onChange={handleSearch}
                            placeholder='Search Movies...'
                        />
                        <img
                            src='/svgs/search.svg'
                            alt='search'
                            onClick={onSubmitSearch}
                            className='search-icon z-[1] w-[1.6rem] cursor-pointer'
                        />
                    </div>
                </form>
            </section>
        </>
    );
};

export default SearchMovies;
