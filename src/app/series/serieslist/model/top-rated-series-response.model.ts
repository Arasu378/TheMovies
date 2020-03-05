import { Result } from 'src/app/movies/popular-movies/models/result.model';

export class TopRatedSeriesResponse {
    page: number;
    results: Result[];
    total_pages: number;
    total_results: number
}