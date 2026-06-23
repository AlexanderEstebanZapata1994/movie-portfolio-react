import { createContext, useContext, useState, ReactNode } from 'react';
import { Movie } from '@/models/Movie.ts';

interface MovieContextType {
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)

    return (
        <MovieContext.Provider value={{ movies, setMovies, isLoading, setIsLoading, error, setError }}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) throw new Error('useMovieContext must be used within a MovieProvider');

    return context;
}