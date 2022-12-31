import Axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayListMovie from './DisplayListMovie';
import SearchMovies from './SearchMovies';
import FilterMovies from './FilterMovies';
import { baseURL, apiKEY } from '../api/Api';
import Alert from './Alert';

function MainContent() {
    const [movies, setMovies] = useState({
        results: [],
        filterType: '',
        movieDetails: '',
        alertMsgPosition: '',
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

    const alertMsgModal = () => {
        setMovies((prevState) => {
            return { ...prevState, alertMsgPosition: '28px' };
        });
        setTimeout(() => {
            setMovies((prevState) => {
                return { ...prevState, alertMsgPosition: '-600px' };
            });
        }, 3000);
    };

    useEffect(() => {
        showMoviesOnBtn('popular');
    }, []);

    return (
        <div className='App'>
            <header>
                <SearchMovies
                    movies={movies}
                    setMovies={setMovies}
                    results={movies.results}
                    filterType={movies.filterType}
                    alertMsgModal={alertMsgModal}
                />
            </header>
            <main className='flex flex-nowrap'>
                <aside className='flex min-w-[80px] min-h-screen bg-sidebar justify-center drop-shadow-2xl'>
                    <FilterMovies showMoviesOnBtn={showMoviesOnBtn} />
                </aside>
                <section className='bg-[#24323F] w-full min-h-screen flex justify-center'>
                    <DisplayListMovie results={movies.results} filterType={movies.filterType} />
                </section>
                <Alert alertMsgPosition={movies.alertMsgPosition} />
            </main>
        </div>
    );
}

export default MainContent;
