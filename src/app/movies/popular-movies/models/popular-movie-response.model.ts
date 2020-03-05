import { Result } from './result.model';

export class PopularMovieResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: Result[];
}