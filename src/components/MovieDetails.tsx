import { Movie } from "@/models/Movie";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
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
                    console.log(movie)
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
            className="size-full flex flex-col justify-around items-center bg-center bg-no-repeat"
            style={{ backgroundImage: movie?.poster_path ? `url(${baseImageUrl}${movie.poster_path})` : undefined }}
        >
            <article className="w-dvw flex flex-col justify-center items-center backdrop-blur-[500px] py-8 px-8">
                <h1 className="text-5xl font-bold text-center">{movie?.title}</h1>
                <img className="xs:h-1/3 h-1/2 w-auto mt-12 mb-12 rounded-3xl" src={`${baseImageUrl}${movie?.poster_path}`} alt={movie?.title} style={{ viewTransitionName: `poster-${id}` }} />
                <h3 className="text-3xl mb-8 font-extrabold">Overview</h3>
                <p className="max-w-3xl text-xl font-sans leading-relaxed">{movie?.overview}</p>
                <section>
                    <ul className="flex flex-row flex-wrap gap-1 max-w-3xl mt-5">
                        {movie?.genres?.map((genre) => (
                            <li className="w-fit text-sm border text-center bg-black/50 text-white rounded-full px-4 py-2 transition-colors hover:bg-black/70" key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </section>
                <div className="flex flex-col items-center w-full p-2 mt-5 backdrop-blur-[1px]">
                    <Link className="text-md border-2 shadow text-center border-white text-white rounded-full px-4 py-2 transition-colors hover:bg-black/70" to="/">Home</Link>
                </div>
            </article>
        </div>
    );
}
