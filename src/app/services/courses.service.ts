import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
    AuthorApiResult,
    Course,
    CourseApiResult,
    CoursesApiResults,
    CreateCourse
} from '@app/models/courses-api-results';
import { ApiResult } from '@app/models/apiResult';
import { environment } from '../../environments/environment';
import { SessionStorageService } from '@app/auth/services/session-storage.service';

@Injectable({
    providedIn: 'root'
})
export class CoursesService {

    constructor(
        private http: HttpClient,
        private sessionStorageService: SessionStorageService
    ) { }

    getAll() {
        return this.http.get<CoursesApiResults>(`${environment.apiURL}/courses/all`);
    }

    createCourse(course: CreateCourse) {
        const authorization = this.sessionStorageService.getToken();

        const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${authorization}`);

        return this.http.post<CourseApiResult>(`${environment.apiURL}/courses/add`, course, { headers });
    }

    getCourse(id: string) {
        const authorization = this.sessionStorageService.getToken();

        const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${authorization}`);

        return this.http.get<CourseApiResult>(`${environment.apiURL}/courses/${id}`, { headers });
    }

    editCourse(id: string, course: Course) {
        const authorization = this.sessionStorageService.getToken();

        const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${authorization}`);

        return this.http.put<CourseApiResult>(`${environment.apiURL}/courses/${id}`, course, { headers });
    }

    deleteCourse(id: string) {
        const authorization = this.sessionStorageService.getToken();

        const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${authorization}`);

        return this.http.delete<ApiResult<string>>(`${environment.apiURL}/courses/${id}`, { headers });
    }

    getAuthorById(id: string) {
        return this.http.get<AuthorApiResult>(`${environment.apiURL}/authors/${id}`);
    }

    createAuthor(name: string) {
        const authorization = this.sessionStorageService.getToken();

        const headers = new HttpHeaders()
            .set('Authorization', `Bearer ${authorization}`);

        return this.http.post<any>(`${environment.apiURL}/authors/add`, { name }, { headers });
    }

    filterCourses(value: string) {
        return this.http.get<any>(`${environment.apiURL}/courses/filter?title=${value},string`);
    }
}
