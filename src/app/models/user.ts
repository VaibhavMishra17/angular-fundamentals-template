import { ApiResult } from "./apiResult";

export interface User {
    name: string,
    email: string,
    password: string
}

export interface UserWithRole extends User {
    role: string;
    id: string
}

export interface UserApiResult extends ApiResult<UserWithRole> {
}