import { useMovieSearch } from '@/hooks/useMovieSearch';
import { useMovieContext } from '@/context/MovieContext';

const SearchBar = () => {
    const { currentSearch, setCurrentSearch } = useMovieContext();
    useMovieSearch(currentSearch);

    return (
        <input
            type="text"
            className="sm:w-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 2xl:w-1/5 flex mx-auto px-5 py-4 mb-12 rounded-full bg-white placeholder:text-amber-900 focus:shadow-lg focus:scale-150 xs:focus:scale-110 transition-transform duration-300 ease-in-out"
            value={currentSearch}
            onChange={(e) => setCurrentSearch(e.target.value)}
            placeholder="Search for a movie..."
        />
    )
}

export default SearchBar