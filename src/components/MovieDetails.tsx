import { Movie } from "@/models/Movie";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { movieService } from "@/services/movie.service";
import { useMovieContext } from "@/context/MovieContext";
import { Spinner } from "./Spinner";

//TODO: this is not working because a failure with the API KEY for the AI gateway VERCEL
const getSummary = (title: string) => {
    return fetch("/api/summary", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
    }).then(res => res.json()).then(data => data.summary);
}

export const MovieDetails = () => {
    const baseImageUrl = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

    const { id } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const { isLoading, setIsLoading } = useMovieContext();
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        if (id) {
            movieService.getMovieDetails(id)
                .then(movie => {
                    setMovie(movie);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    }, [id]);

    useEffect(() => {
        if (movie) {
            fetch("/api/favorites/list").then(res => res.json()).then(data => {
                const isFavorite = data.favoriteIds.includes(movie.id)
                setIsFavorite(isFavorite);
            });
        }
    }, [movie])

    const toggleFavorite = async () => {
        const response = await fetch("/api/favorites/toggle", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ movie_id: movie?.id }),
        });
        const data = await response.json();
        setIsFavorite(data.is_favorite);
    }

    const toggleDarkMode = () => {
        const darkMode = !isDarkMode;
        setIsDarkMode(darkMode);
        document.documentElement.classList.toggle("dark", darkMode);
    }

    if (!movie) {
        return <div>Movie not found</div>
    }

    if (isLoading) {
        return <Spinner />
    }
    // remove border 4 border-red-500 border-4 border-blue-500 border-4 border-green-500 
    return (
        <div
            className="flex flex-col place-items-center bg-center bg-no-repeat"
            style={{ backgroundImage: movie?.poster_path ? `url(${baseImageUrl}${movie.poster_path})` : undefined }}
        >
            <article className="w-full min-h-screen flex flex-col justify-center items-center dark:bg-black/50  backdrop-blur-[600px] md:backdrop-blur-[900px] py-8 px-8 ">
                <button onClick={() => toggleDarkMode()} title="Toggle dark mode" className="absolute top-4 right-4 text-4xl md:text-6xl cursor-pointer ">
                    {isDarkMode ? "🌙" : "☀️"}
                </button>
                <section className="flex flex-col md:flex-row justify-center items-center gap-8 ">
                    <h1 className="text-4xl md:text-7xl lg:text-8xl font-bold text-center dark:text-gray-200">{movie?.title}</h1>
                    <span
                        className="text-4xl md:text-6xl cursor-pointer "
                        onClick={() => toggleFavorite()}
                        title={isFavorite ? "Remove from favorites" : "Add to favorites"}>
                        {isFavorite ? "❤️" : "🤍"}
                    </span>
                </section>
                <img className="h-1/3 md:h-1/2 aspect-2/3 mt-12 mb-12 rounded-3xl" src={`${baseImageUrl}${movie?.poster_path}`} alt={movie?.title} style={{ viewTransitionName: `poster-${id}` }} />
                <h3 className="text-3xl md:text-4xl mb-8 font-extrabold dark:text-gray-200">Overview</h3>
                <p className="max-w-full sm:max-w-2xl md:max-w-1/2 text-lg md:text-xl font-sans leading-relaxed  dark:text-gray-300">{movie?.overview}</p>
                <section>
                    <ul className="flex flex-row flex-wrap gap-1 max-w-3xl mt-5 ">
                        {movie?.genres?.map((genre) => (
                            <li className="w-fit text-sm border text-center bg-black/50 text-white rounded-full px-4 py-2" key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </section>
                <div className="flex flex-col items-center w-full p-2 mt-5">
                    <Link className="text-md border-2 shadow text-center border-white text-gray  dark:text-gray-200 rounded-full px-4 py-2 transition-colors hover:bg-black/70 hover:text-white hover:scale-110" to="/">Home</Link>
                </div>
            </article>
        </div>
    );
}
