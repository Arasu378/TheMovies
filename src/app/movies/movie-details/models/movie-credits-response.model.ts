export class MovieCreditsResponse {
    id: number;
    cast: Cast[];
    crew: Cast[];
}

export class Cast {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    department: string;
    job: string;
    id: number;
    name: string;
    order: number;
    profile_path: string;
}