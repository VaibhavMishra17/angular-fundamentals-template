export interface ApiResult<T> {
    successful: boolean;
    result: T,
}