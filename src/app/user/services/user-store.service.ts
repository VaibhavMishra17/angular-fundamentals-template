import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { UserService } from "./user.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserStoreService {
    private name$$ = new BehaviorSubject('');
    public name$ = this.name$$.asObservable();

    private isAdmin$$ = new BehaviorSubject(false);
    public isAdmin$ = this.isAdmin$$.asObservable();

    constructor(private userService: UserService) { }

    getUser() {
        return this.userService.getUser().pipe(
            tap(res => {
                if (res?.successful) {
                    const { name, role } = res.result;

                    this.name$$.next(name);

                    if (role === 'admin') {
                        this.isAdmin$$.next(true);
                    }
                }
            },
                () => {
                    this.name$$.next('');
                    this.isAdmin$$.next(false);
                }
            )
        )
    }

    get isAdmin() {
        return this.isAdmin$$.getValue();
    }

    set isAdmin(value: boolean) {
        this.isAdmin$$.next(value);
    }
}
