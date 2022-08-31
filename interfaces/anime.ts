export interface Anime {
    id?: number | string;
    name: string;
    slug: string;
    year: number;
    season: string;
    synopsis: string;

    created_at?: number | string;
    updated_at?: number | string;
    deleted_at?: null
}