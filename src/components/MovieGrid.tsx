import React, { useEffect } from 'react';
import { useMovieContext } from '@/context/MovieContext.tsx';
import { movieService } from "@/services/movie.service.ts"
import defaultMoviePoster from "@/assets/img/default-movie-poster.jpg";

export const MovieGrid: React.FC = () => {
    const { popularMovies, setPopularMovies, filteredMovies, isLoading, setIsLoading, error, setError } = useMovieContext();
    const baseImageUrl = "https://image.tmdb.org/t/p/w500/"; // import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

    useEffect(() => {
        setIsLoading(true)
        movieService.getPopularMovies()
            .then((res) => {
                setPopularMovies(res)
            })
            .catch(error => setError(error))
            .finally(() => setIsLoading(false))
    }, []);

    const movies = filteredMovies.length > 0 ? filteredMovies : popularMovies;

    return (
        <section>
            <div className="w-full max-w-7xl mx-auto flex flex-wrap justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
                {
                    isLoading
                        ? <h2>Loading...</h2>
                        : movies.map((movie) => (
                            <div key={movie.id} className="w-64 bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer">
                                <img
                                    src={!movie.poster_path ? defaultMoviePoster : baseImageUrl + movie.poster_path}
                                    alt={movie.title}
                                    className="h-96 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-white font-bold text-lg truncate" title={movie.title}>{movie.title}</h3>
                                    <p className="text-gray-400 text-sm">{movie.release_date.split('-')[0]}</p>
                                </div>
                            </div>
                        ))
                }
            </div>
        </section>
    )
}