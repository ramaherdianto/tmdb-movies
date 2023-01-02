import Axios from 'axios';
import { useEffect, useState } from 'react';
import DisplayListMovie from './DisplayListMovie';
import SearchMovies from './SearchMovies';
import FilterMovies from './FilterMovies';
import { baseURL, apiKEY } from '../api/Api';
import Alert from './Alert';
import MovieDetail from './MovieDetail';

function MainContent() {
    const [movies, setMovies] = useState({
        results: [],
        filterType: '',
        movieDetails: '',
        alertMsgPosition: '',
    });

    const [openDetail, setOpenDetail] = useState(false);

    const handleOpen = () => setOpenDetail(true);
    const handleClose = () => {
        setMovies((prevState) => {
            return { ...prevState, movieDetails: '' };
        });
        setOpenDetail(false);
    };

    // Get data from API
    const showMoviesOnBtn = async (e) => {
        const buttonType = typeof e === 'string' ? e : e.target.className;
        handleClose();
        await Axios(`${baseURL}/movie/${buttonType}?api_key=${apiKEY}&page=1`)
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

    const showMovieDetail = async (movieID) => {
        await Axios(`${baseURL}/movie/${movieID}?api_key=${apiKEY}`)
            .then((data) => {
                const movieDetails = data.data;
                setMovies((prevState) => {
                    return { ...prevState, movieDetails: movieDetails };
                });
            })
            .catch((err) => console.log('error', err));
    };

    const getMovieID = (movieID) => {
        showMovieDetail(movieID);
        setOpenDetail(true);
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
                    handleClose={handleClose}
                />
            </header>
            <main className='flex flex-nowrap'>
                <aside className='flex min-w-[80px] min-h-screen bg-sidebar justify-center drop-shadow-2xl'>
                    <FilterMovies showMoviesOnBtn={showMoviesOnBtn} />
                </aside>
                <section className='bg-[#24323F] w-full min-h-screen flex justify-center'>
                    <DisplayListMovie
                        results={movies.results}
                        filterType={movies.filterType}
                        getMovieID={getMovieID}
                    />

                    {openDetail ? (
                        <MovieDetail movieDetails={movies.movieDetails} handleClose={handleClose} />
                    ) : null}
                </section>
                <Alert alertMsgPosition={movies.alertMsgPosition} />
            </main>
        </div>
    );
}

export default MainContent;
