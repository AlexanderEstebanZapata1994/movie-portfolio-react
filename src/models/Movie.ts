
export interface Movie {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
    overview: string;
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    imdb_id: string;
    origin_country: string[];
    original_language: string;
    original_title: string;
    popularity: number;
    production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    video: boolean;
    vote_count: number;
}

export interface MovieResponse {
    results: Movie[];
    total_pages: number;
}



/**
 * 
 * 
 * {
adult: false,
backdrop_path: "/6tROOVmV5vRymO2g52aR8kWlfoT.jpg",
belongs_to_collection: {
id: 1716673,
name: "Cocktail Movie Collection",
poster_path: "/6b9rHUxGLJPs0IYgjfsOpVty14Y.jpg",
backdrop_path: null
},
budget: 0,
genres: [
{
id: 10749,
name: "Romance"
},
{
id: 35,
name: "Comedy"
}
],
homepage: "",
id: 1392469,
imdb_id: "tt35064672",
origin_country: [
"IN"
],
original_language: "hi",
original_title: "कॉकटेल २",
overview: "After a decade together, Diya and Kunal's relationship is shaken when Ally, an old friend, re-enters their lives. What begins as a plan between two women spirals into chaos, triggering hilarious, emotional rollercoaster none of them saw coming.",
popularity: 610.4673,
poster_path: "/oIQmtByV1LtEQSwM4EpdLTyoSlM.jpg",
production_companies: [
{
id: 86699,
logo_path: "/tFikZRdCEuse5WRG2N7Z4YSNCxr.png",
name: "Maddock Films",
origin_country: "IN"
}
],
production_countries: [
{
iso_3166_1: "IN",
name: "India"
}
],
release_date: "2026-06-19",
revenue: 0,
runtime: 149,
softcore: false,
spoken_languages: [
{
english_name: "Hindi",
iso_639_1: "hi",
name: "हिन्दी"
}
],
status: "Released",
tagline: "",
title: "Cocktail 2",
video: false,
vote_average: 5.538,
vote_count: 13
}
 */