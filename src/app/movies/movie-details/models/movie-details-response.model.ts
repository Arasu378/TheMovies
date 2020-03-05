export class MovieDetailsResponse {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    spoken_languages: SpokenLanguages[];
    production_countries: SpokenLanguages[];
    production_companies: SpokenLanguages[];
    genres: SpokenLanguages[];

}

export class SpokenLanguages {
    iso_639_1: string;
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
}