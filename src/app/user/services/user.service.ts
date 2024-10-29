import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { SessionStorageService } from '@app/auth/services/session-storage.service';
import { UserApiResult } from '@app/models/user';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor(
        private http: HttpClient,
        private sessionStorageService: SessionStorageService
    ) { }

    getUser() {
        const authorization = this.sessionStorageService.getToken();
        const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${authorization}`);

        return this.http.get<UserApiResult>(`${environment.apiURL}/users/me`, { headers });
    }
}
