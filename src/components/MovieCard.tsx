import React from "react"
import { Movie } from "@/models/Movie"
import defaultMoviePoster from "@/assets/img/default-movie-poster.jpg";
import { useNavigate } from "react-router-dom";


export const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
    const navigate = useNavigate();
    const baseImageUrl = "https://image.tmdb.org/t/p/w500/"; // import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

    return (
        <div key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
            className={"card w-64 bg-gray-600 bg-opacity-55 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer"}>
            <div className="face front absolute backface-hidden transition-all duration-1000 rotate-y-180">
                <img
                    src={!movie.poster_path ? defaultMoviePoster : baseImageUrl + movie.poster_path}
                    alt={movie.title}
                    className="h-96 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-white font-bold text-lg truncate" title={movie.title}>{movie.title}</h3>
                    <p className="text-gray-400 text-sm">{movie.release_date.split('-')[0]}</p>
                </div>
            </div>
            <div className="face back">
                <h2 className="text-white font-bold text-lg truncate" title={movie.title}>{movie.title}</h2>
                <ul className="list-disc">
                    <li>Average vote: {movie.vote_average}</li>
                    <li>Popularity: {movie.release_date.split('-')[0]}</li>
                    <li>Overview: {movie.overview}</li>
                    <li onClick={() => navigate(`/movie/${movie.id}`)}>Details click here</li>
                </ul>
            </div>
        </div >
    )
}