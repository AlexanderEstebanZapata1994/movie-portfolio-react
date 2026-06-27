import { Movie } from "@/models/Movie";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "@/services/movie.service";
import { useMovieContext } from "@/context/MovieContext";
import { Spinner } from "./Spinner";
export const MovieDetails = () => {
    const baseImageUrl = "https://image.tmdb.org/t/p/w500/"; // import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

    const { id } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);
    const { isLoading, setIsLoading } = useMovieContext();

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

    if (!movie) {
        return <div>Movie not found</div>
    }

    if (isLoading) {
        return <Spinner />
    }

    return (
        <div
            className="size-full flex flex-col justify-center items-center bg-no-repeat bg-center w-full min-h-screen"
            style={{ backgroundImage: movie?.poster_path ? `url(${baseImageUrl}${movie.poster_path})` : undefined }}
        >
            <article className="h-dvh w-dvw flex flex-col justify-center items-center backdrop-blur-[250px]">
                <h1 className="text-6xl font-bold">{movie?.title}</h1>
                <img className="h-1/2 w-auto mt-12 mb-12 rounded-3xl" src={`${baseImageUrl}${movie?.poster_path}`} alt={movie?.title} style={{ viewTransitionName: `poster-${id}` }} />
                <h3 className="text-3xl mb-8 font-bold">Overview</h3>
                <p className="max-w-3xl text-xl font-sans leading-relaxed">{movie?.overview}</p>
            </article>

        </div>
    );
}
