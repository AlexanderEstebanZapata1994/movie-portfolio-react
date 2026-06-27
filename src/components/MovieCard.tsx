import React from "react"
import { Movie } from '@/types/movie.type'
import defaultMoviePoster from "@/assets/img/default-movie-poster.jpg";
import { useNavigate, Link } from "react-router-dom";

interface MovieCardProps {
    movie: Movie
}

export const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const navigate = useNavigate();
    const baseImageUrl = "https://image.tmdb.org/t/p/w500/"; // import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

    const ratingColorStyle = () => {
        if (movie.vote_average >= 8) {
            return "text-green-700 bg-green-400"
        } else if (movie.vote_average >= 6) {
            return "text-yellow-700 bg-yellow-400"
        } else {
            return "text-red-700 bg-red-300"
        }
    }
    return (
        <Link key={movie.id} to={`/movie/${movie.id}`} className={"w-64 dark:bg-amber-950 bg-opacity-55 rounded-4xl overflow-hidden shadow-lg transition-transform group perspective-distant"} viewTransition>
            <div className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] cursor-pointer md:cursor-auto md:group-hover:[transform:rotateY(180deg)]">
                <div className="inset-0 backface-hidden transition-transform duration-500 rotate-y-0">
                    <img
                        src={!movie.poster_path ? defaultMoviePoster : baseImageUrl + movie.poster_path}
                        alt={movie.title}
                        className="h-96 object-cover"
                        style={{ viewTransitionName: `poster-${movie.id}` }}
                    />
                    <div className="bg-amber-100 dark:bg-amber-900 p-4">
                        <h3 className="text-amber-900 dark:text-amber-100 font-bold text-lg truncate" title={movie.title}>{movie.title}</h3>
                        <section className="flex justify-between">
                            <p className="text-amber-500 dark:text-amber-200 font-bold">Votes average</p>
                            <span className={`${ratingColorStyle()} px-2 rounded-lg ml-3`}>{movie.vote_average}</span>
                        </section>
                    </div>
                </div>
                <div className="absolute inset-0 size-full bg-amber-100 dark:bg-amber-950
                                backface-hidden rotate-y-180 p-4 border-2 border-amber-800 rounded-4xl
                                flex flex-col gap-4">
                    <h1 className="text-amber-900 dark:text-amber-100 text-2xl font-bold text-center" title={movie.title}>{movie.title}</h1>
                    <p className="text-amber-500 dark:text-amber-200 text-sm"><span className="font-bold">Release date:</span> {movie.release_date.split('-')[0]}</p>
                    <span className="text-amber-500 dark:text-amber-200 font-bold">Overview:</span><p className="h-fit text-balance px-2 truncate overflow-y-auto text-amber-500 scrollbar-thin [scrollbar-color:#a6690b_#94460300]">{movie.overview}</p>
                    <button className="mt-auto bg-amber-500 dark:bg-amber-800 text-white mb-4 px-2 rounded-lg cursor-pointer" onClick={() => navigate(`/movie/${movie.id}`)}>View more</button>
                </div>
            </div>
        </Link>
    )
}