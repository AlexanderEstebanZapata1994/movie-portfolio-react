import React, { useEffect } from 'react';
import { useMovieContext } from '@/context/MovieContext.tsx';
import { movieService } from "@/services/movie.service.ts"
import { MovieCard } from './MovieCard.tsx';
import { Movie } from '@/models/Movie.ts';

export const MovieGrid: React.FC = () => {
    const { popularMovies, setPopularMovies, filteredMovies, isLoading, setIsLoading, error, setError } = useMovieContext();

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
            <div className="w-full max-w-full mx-auto flex flex-wrap justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {
                    isLoading
                        ? <h2>Loading...</h2>
                        : movies.map((movie: Movie) => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                }
            </div>
        </section>
    )
}