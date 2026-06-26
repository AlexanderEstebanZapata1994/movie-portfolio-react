import { Movie } from "@/models/Movie";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "@/services/movie.service";

export const MovieDetails = () => {

    const { id } = useParams();
    const [movie, setMovie] = useState<Movie | null>(null);

    useEffect(() => {
        movieService.getMovieDetails(id).then(response => {
            setMovie(response);
        });
    }, [id]);

    return (
        <div className="mt-12 mb-12">
            <h1 className="text-2xl font-bold">{movie?.title}</h1>
            <img className="mt-12 mb-12" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt={movie?.title} />
            <p>{movie?.overview}</p>
        </div>
    );
}
