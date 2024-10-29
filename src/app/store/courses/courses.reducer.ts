import { createReducer, on, Action } from '@ngrx/store';
import * as CoursesActions from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface CoursesState {
    allCourses: any;
    course: any;
    isAllCoursesLoading: boolean;
    isSingleCourseLoading: boolean;
    isSearchState: boolean;
    errorMessage: string;
}

export const initialState: CoursesState = {
    allCourses: null,
    course: null,
    isAllCoursesLoading: false,
    isSingleCourseLoading: false,
    isSearchState: false,
    errorMessage: ''
};

export const coursesReducer = createReducer(
    initialState,
    on(CoursesActions.requestAllCourses, state => ({
        ...state,
        isAllCoursesLoading: true,
        errorMessage: ''
    })),
    on(CoursesActions.requestAllCoursesSuccess, (state, { courses }) => ({
        ...state,
        allCourses: courses,
        isAllCoursesLoading: false
    })),
    on(CoursesActions.requestAllCoursesFail, (state, { error }) => ({
        ...state,
        isAllCoursesLoading: false,
        errorMessage: error
    })),
    on(CoursesActions.requestSingleCourse, state => ({
        ...state,
        isSingleCourseLoading: true,
        errorMessage: ''
    })),
    on(CoursesActions.requestSingleCourseSuccess, (state, { course }) => ({
        ...state,
        course,
        isSingleCourseLoading: false
    })),
    on(CoursesActions.requestSingleCourseFail, (state, { error }) => ({
        ...state,
        isSingleCourseLoading: false,
        errorMessage: error
    })),
    on(CoursesActions.requestFilteredCourses, state => ({
        ...state,
        isAllCoursesLoading: true,
        errorMessage: ''
    })),
    on(CoursesActions.requestFilteredCoursesSuccess, (state, { courses }) => ({
        ...state,
        allCourses: courses,
        isAllCoursesLoading: false
    })),
    on(CoursesActions.requestFilteredCoursesFail, (state, { error }) => ({
        ...state,
        isAllCoursesLoading: false,
        errorMessage: error
    })),
    on(CoursesActions.requestDeleteCourse, state => ({
        ...state,
        errorMessage: ''
    })),
    on(CoursesActions.requestDeleteCourseSuccess, (state, { id }) => ({
        ...state
    })),
    on(CoursesActions.requestDeleteCourseFail, (state, { error }) => ({
        ...state,
        errorMessage: error
    })),
    on(CoursesActions.requestEditCourse, state => ({
        ...state,
        errorMessage: ''
    })),
    on(CoursesActions.requestEditCourseSuccess, (state, { course }) => ({
        ...state,
        course: { ...course }
    })),
    on(CoursesActions.requestEditCourseFail, (state, { error }) => ({
        ...state,
        errorMessage: error
    })),
    on(CoursesActions.requestCreateCourse, state => ({
        ...state,
        errorMessage: ''
    })),
    on(CoursesActions.requestCreateCourseSuccess, (state, { course }) => ({
        ...state,
        allCourses: [...state.allCourses, course]
    })),
    on(CoursesActions.requestCreateCourseFail, (state, { error }) => ({
        ...state,
        errorMessage: error
    }))
);

export const reducer = (state: CoursesState, action: Action): CoursesState => coursesReducer(state, action);
