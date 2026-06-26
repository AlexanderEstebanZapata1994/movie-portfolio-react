import { Movie, MovieResponse } from '@/types/movie.type';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_KEY;

export const movieService = {
    getPopularMovies: async (): Promise<Movie[]> => {
        try {
            const response: Response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
            if (!response.ok) throw new Error('Failed to fetch popular movies');
            const data: MovieResponse = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw error;
        }
    },

    searchMovies: async (query: string): Promise<Movie[]> => {
        try {
            const response: Response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
            if (!response.ok) throw new Error('Failed to fetch the requested movie');
            const data: MovieResponse = await response.json();
            return data.results;
        } catch (error) {
            console.error('Error searching for the requested movie:', error);
            throw error;
        }
    },

    getMovieDetails: async (id: string): Promise<Movie> => {
        try {
            const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
            if (!response.ok) throw new Error('Error trying to fetch the requested movie');
            const data: Movie = await response.json();
            return data;
        } catch (error) {
            console.error('Error trying to fetch the requested movie:', error);
            throw error;
        }
    }
}