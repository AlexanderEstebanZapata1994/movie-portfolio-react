import React from 'react';
import { useMovieContext } from '@/context/MovieContext.ts';

export const MovieGrid: React.FC = () => {
    const { movies, isLoading, error } = useMovieContext();
    const baseImageUrl = "https://image.tmdb.org/t/p/w500/"; // import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

    return (
        <section>
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {
                    !isLoading
                        ? <h2>Loading...</h2>
                        : movies.map((movie) => (
                            <div key={movie.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer">
                                <img
                                    src={baseImageUrl + movie.poster_path}
                                    alt={movie.title}
                                    className="w-full h-96 object-cover"
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