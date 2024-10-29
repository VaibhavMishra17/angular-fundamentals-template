import { Injectable } from '@angular/core';
import {
    CanLoad, Route,
    Router, UrlSegment,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '@app/auth/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class NotAuthorizedGuard implements CanLoad {
    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean | UrlTree {
        if (!this.authService.isAuthorised) {
            return true;
        }

        const redirectUrl = this.authService.getRedirectUrl();
        return this.router.createUrlTree([redirectUrl]);
    }
}
