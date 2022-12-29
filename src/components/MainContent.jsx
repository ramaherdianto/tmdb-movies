import Axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayListMovie from './DisplayListMovie';
import SearchMovies from './SearchMovies';
import FilterMovies from './FilterMovies';
import { baseURL, apiKEY } from '../api/Api';

function MainContent() {
    const [movies, setMovies] = useState({
        results: [],
        filterType: '',
        movieDetails: '',
        alerMsgModal: '',
    });

    // Get data from API
    const showMoviesOnBtn = (e) => {
        const buttonType = typeof e === 'string' ? e : e.target.className;
        Axios(`${baseURL}/movie/${buttonType}?api_key=${apiKEY}&page=1`)
            .then((data) => {
                let results = data.data.results;
                setMovies((prevState) => {
                    return { ...prevState, results: results, filterType: buttonType };
                });
            })
            .catch((err) => console.info('Error', err.message));
    };

    useEffect(() => {
        showMoviesOnBtn('popular');
    }, []);
    return (
        <div className='App'>
            <header>
                <SearchMovies />
            </header>
            <main className='flex flex-nowrap'>
                <aside className='flex min-w-[80px] min-h-screen bg-sidebar justify-center drop-shadow-2xl'>
                    <FilterMovies showMoviesOnBtn={showMoviesOnBtn} />
                </aside>
                <section className='bg-[#24323F] flex justify-center'>
                    <DisplayListMovie results={movies.results} filterType={movies.filterType} />
                </section>
            </main>
        </div>
    );
}

export default MainContent;
