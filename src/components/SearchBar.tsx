import { useEffect, useState } from 'react';
import { useDebouce } from '@/hooks/useDebounce';
import { movieService } from '@/services/movie.service';
import { useMovieContext } from '@/context/MovieContext';
import { Movie } from '@/models/Movie';

const SearchBar = () => {
    const [input, setInput] = useState("");
    const deboucedQuery = useDebouce(input, 500);
    const { setFilteredMovies } = useMovieContext();

    useEffect(() => {
        if (deboucedQuery) {
            movieService.searchMovies(deboucedQuery).then((movies: Movie[]) => {
                setFilteredMovies(movies)
            }).catch(() => {
                console.log("Error while searching")
            })
        } else {
            setFilteredMovies([])
        }
    }, [deboucedQuery, setFilteredMovies])

    return (
        <input
            type="text"
            className="w-1/2 flex mx-auto px-4 py-3 mt-10 mb-24 rounded-full bg-slate-300 placeholder:text-slate-500 focus:outline-none focus:scale-150 transition-transform duration-300 ease-in-out"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search for a movie..."
        />
    )
}

export default SearchBar