export interface PaginationParams {
    _limit: number;
    _pages: number;
    _total: number;
}

export interface ListResponse<T> {
    anime: T[];
}

export interface ListParams {
    _page: number;
    _limit: number;
    _sort: string;
    _order: 'Title (ascending)' | 'Title (descending)' | 'Score (ascending)' | 'Score (descending)';

    [key: string]: any
}