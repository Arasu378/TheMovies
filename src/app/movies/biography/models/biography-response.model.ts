import { StringProtocolResponse } from 'electron';

export class BiographyResponse {
    birthday: string;
    known_for_department: string;
    deathday: string;
    id: string;
    name: string;
    also_known_as: string[];
    gender: number;
    biography: string;
    popularity: number;
    place_of_birth: string;
    profile_path: string;
    adult: boolean;
    imdb_id: string;
    homepage: string;
}