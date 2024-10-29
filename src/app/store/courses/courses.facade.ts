import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CoursesState } from './courses.reducer';
import * as CoursesActions from './courses.actions';
import {
    isAllCoursesLoadingSelector,
    isSingleCourseLoadingSelector,
    isSearchingStateSelector,
    getAllCourses,
    getCourse,
    getErrorMessage,
} from './courses.selectors';

@Injectable({
    providedIn: 'root'
})
export class CoursesStateFacade {
    isAllCoursesLoading$: Observable<boolean>;
    isSingleCourseLoading$: Observable<boolean>;
    isSearchingState$: Observable<boolean>;
    courses$: Observable<any[]>;
    allCourses$: Observable<any[]>;
    course$: Observable<any>;
    errorMessage$: Observable<string>;

    constructor(private store: Store<CoursesState>) {
        this.isAllCoursesLoading$ = this.store.pipe(select(isAllCoursesLoadingSelector));
        this.isSingleCourseLoading$ = this.store.pipe(select(isSingleCourseLoadingSelector));
        this.isSearchingState$ = this.store.pipe(select(isSearchingStateSelector));
        this.courses$ = this.store.pipe(select(getAllCourses));
        this.allCourses$ = this.store.pipe(select(getAllCourses));
        this.course$ = this.store.pipe(select(getCourse));
        this.errorMessage$ = this.store.pipe(select(getErrorMessage));
    }

    getAllCourses(): void {
        this.store.dispatch(CoursesActions.requestAllCourses());
    }

    getSingleCourse(id: string): void {
        this.store.dispatch(CoursesActions.requestSingleCourse({ id: id }));
    }

    getFilteredCourses(searchValue: string): void {
        this.store.dispatch(CoursesActions.requestFilteredCourses({ title: searchValue }));
    }

    editCourse(body: any, id: string): void {
        this.store.dispatch(CoursesActions.requestEditCourse({ id: id, course: body }));
    }

    createCourse(body: any): void {
        this.store.dispatch(CoursesActions.requestCreateCourse({ course: body }));
    }

    deleteCourse(id: string): void {
        this.store.dispatch(CoursesActions.requestDeleteCourse({ id: id }));
    }
}
