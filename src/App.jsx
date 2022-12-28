import Axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayListMovie from './components/DisplayListMovie';
import FilterMovies from './components/FilterMovies';
import SearchMovies from './components/SearchMovies';

export const baseURL = 'https://api.themoviedb.org/3/';
export const apiKEY = 'b0002ebea15015d3ff5da2f475f8b062';
export const movieIMG = 'https://image.tmdb.org/t/p/w500';

function App() {
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
                    <FilterMovies />
                </aside>
                <section className='bg-[#24323F] flex justify-center'>
                    <DisplayListMovie results={movies.results} filterType={movies.filterType} />
                </section>
            </main>
        </div>
    );
}

export default App;
