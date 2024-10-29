import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            catchError((err) => {
                if (err instanceof HttpErrorResponse && err.status == 401) {
                    this.authService.logout();
                    const loginUrl = this.authService.getLoginUrl();

                    if (this.router.routerState.snapshot.url !== loginUrl) {
                        this.router.navigate([loginUrl])
                    }

                }
                const error = err?.error?.message || err?.statusText || 'Something went wrong! Request is failed.';
                return throwError(error);
            })
        );
    }
}
