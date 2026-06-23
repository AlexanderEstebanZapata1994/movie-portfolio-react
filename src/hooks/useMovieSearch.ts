import { useEffect } from "react";
import { movieService } from "@/services/movie.service.ts";
import { useMovieContext } from "@/context/MovieContext.ts";

export const useMovieSearch = (query: string) => {
    const { setMovies, setIsLoading, setError } = useMovieContext();

    useEffect(() => {
        if (!query) return;
        // 1. Set a timer to delay the API call
        const delayDebounceFn = setTimeout(async () => {
            setIsLoading(true);
            try {
                const response = await movieService.searchMovies(query);
                setMovies(response);
            } catch (error) {
                console.error('Error searching for the requested movie:', error);
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }, 500); // Wait 500ms once the user stops typing
        // 2. Clean up function: This cancels the timer if the user types again
        return () => clearTimeout(delayDebounceFn);
    }, [query, setMovies, setIsLoading, setError]);
};