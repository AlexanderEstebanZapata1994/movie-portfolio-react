import { useEffect } from "react";
import { movieService } from "@/services/movie.service.ts";
import { useMovieContext } from "@/context/MovieContext.tsx";
import { useDebounce } from "@/hooks/useDebounce.ts";
import { Movie } from "@/models/Movie";

export const useMovieSearch = (query: string) => {
    const deboucedQuery = useDebounce(query, 500);
    const { setIsLoading, setError, setFilteredMovies } = useMovieContext();

    useEffect(() => {
        if (deboucedQuery) {
            setIsLoading(true)
            movieService.searchMovies(deboucedQuery).then((movies: Movie[]) => {
                setFilteredMovies(movies)
            }).catch((error) => {
                console.log("Error while searching")
                setError(error)
            }).finally(() => {
                setIsLoading(false)
            })
        } else {
            setFilteredMovies([])
            setIsLoading(false)
        }
    }, [deboucedQuery, setFilteredMovies, setIsLoading, setError]);
};