import { useState } from 'react';
import { useMovieSearch } from '@/hooks/useMovieSearch';

const SearchBar = () => {
    const [input, setInput] = useState("");
    useMovieSearch(input);

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