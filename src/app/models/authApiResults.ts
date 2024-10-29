import { ApiResult } from "./apiResult";
import { User } from "./user";

export interface LoginResult extends ApiResult<string>{
    user: Omit<User, 'password'>
}

export interface RegisterResult extends ApiResult<string>{}