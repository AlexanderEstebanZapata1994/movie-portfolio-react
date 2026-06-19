import { Movie, MovieResponse } from '@/types/movie.type';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_KEY;

export const movieService = {

    getPopularMovies: async () => {
        try {
            const response: Response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
            if (!response.ok) throw new Error('Failed to fetch popular movies');
            const data: MovieResponse = await response.json();
            return data.results as Movie[];
        } catch (error) {
            console.error('Error fetching popular movies:', error);
            throw error;
        }
    }
}