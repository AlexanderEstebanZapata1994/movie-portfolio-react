import { createContext, useContext, useState, ReactNode } from 'react';
import { Movie } from '@/models/Movie.ts';

interface MovieContextType {
    popularMovies: Movie[];
    setPopularMovies: (movies: Movie[]) => void;
    filteredMovies: Movie[];
    setFilteredMovies: (movies: Movie[]) => void;
    currentSearch: string;
    setCurrentSearch: (search: string) => void;
    isLoading: boolean;
    setIsLoading: (isLoading: boolean) => void;
    error: string | null;
    setError: (error: string | null) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
    const [popularMovies, setPopularMovies] = useState<Movie[]>([])
    const [filteredMovies, setFilteredMovies] = useState<Movie[]>([])
    const [currentSearch, setCurrentSearch] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null)

    return (
        <MovieContext.Provider value={{ popularMovies, setPopularMovies, filteredMovies, setFilteredMovies, isLoading, setIsLoading, error, setError, currentSearch, setCurrentSearch }}>
            {children}
        </MovieContext.Provider>
    )
}

export const useMovieContext = () => {
    const context = useContext(MovieContext);
    if (!context) throw new Error('useMovieContext must be used within a MovieProvider');

    return context;
}