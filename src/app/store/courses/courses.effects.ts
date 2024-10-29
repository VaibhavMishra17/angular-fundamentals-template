import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import * as CoursesActions from './courses.actions';
import { CoursesService } from '@app/services/courses.service';

@Injectable()
export class CoursesEffects {
    constructor(
        private actions$: Actions,
        private coursesService: CoursesService,
        private router: Router
    ) {}

    getAll$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestAllCourses),
            switchMap(() =>
                this.coursesService.getAll().pipe(
                    map((courses: any) => CoursesActions.requestAllCoursesSuccess({ courses })),
                    catchError((error) => of(CoursesActions.requestAllCoursesFail({ error })))
                )
            )
        )
    );

    filteredCourses$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestFilteredCourses),
            switchMap((action) =>
                this.coursesService.filterCourses(action.title).pipe(
                    map((courses: any) => CoursesActions.requestFilteredCoursesSuccess({ courses })),
                    catchError((error) => of(CoursesActions.requestFilteredCoursesFail({ error })))
                )
            )
        )
    );

    getSpecificCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestSingleCourse),
            switchMap((action) =>
                this.coursesService.getCourse(action.id).pipe(
                    map((course) => CoursesActions.requestSingleCourseSuccess({ course })),
                    catchError((error) => of(CoursesActions.requestSingleCourseFail({ error })))
                )
            )
        )
    );

    deleteCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestDeleteCourse),
            switchMap((action) =>
                this.coursesService.deleteCourse(action.id).pipe(
                    map(() => CoursesActions.requestAllCourses()),
                    catchError((error) => of(CoursesActions.requestDeleteCourseFail({ error })))
                )
            )
        )
    );

    editCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestEditCourse),
            switchMap((action) =>
                this.coursesService.editCourse(action.id, action.course).pipe(
                    map(() => CoursesActions.requestEditCourseSuccess({ course: action.course })),
                    catchError((error) => of(CoursesActions.requestEditCourseFail({ error })))
                )
            )
        )
    );

    createCourse$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CoursesActions.requestCreateCourse),
            switchMap((action) =>
                this.coursesService.createCourse(action.course).pipe(
                    map(() => CoursesActions.requestCreateCourseSuccess({ course: action.course })),
                    catchError((error) => of(CoursesActions.requestCreateCourseFail({ error })))
                )
            )
        )
    );

    redirectToTheCoursesPage$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(
                    CoursesActions.requestCreateCourseSuccess,
                    CoursesActions.requestEditCourseSuccess,
                    CoursesActions.requestSingleCourseFail
                ),
                map(() => {
                    this.router.navigate(['/courses']);
                })
            ),
        { dispatch: false }
    );
}
