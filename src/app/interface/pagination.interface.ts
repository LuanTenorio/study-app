export interface Pagination<T = object> {
    readonly totalElements: number;
    readonly totalPages: number;
    readonly page: number;
    readonly data: T[];
}