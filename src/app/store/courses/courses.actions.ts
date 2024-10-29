import { createAction, props } from '@ngrx/store';
import { CoursesConstants } from '@app/store/courses/courses.constants';

// Actions for request all Courses
export const requestAllCourses = createAction(CoursesConstants.REQUEST_ALL_COURSES);
export const requestAllCoursesSuccess = createAction(CoursesConstants.REQUEST_ALL_COURSES_SUCCESS, props<{ courses: any }>());
export const requestAllCoursesFail = createAction(CoursesConstants.REQUEST_ALL_COURSES_FAIL, props<{ error: string }>());

// Actions for request individual course
export const requestSingleCourse = createAction(CoursesConstants.REQUEST_SINGLE_COURSE, props<{ id: string }>());
export const requestSingleCourseSuccess = createAction(CoursesConstants.REQUEST_SINGLE_COURSE_SUCCESS, props<{ course: any }>());
export const requestSingleCourseFail = createAction(CoursesConstants.REQUEST_SINGLE_COURSE_FAIL, props<{ error: string }>());

// Actions for request filtered Courses
export const requestFilteredCourses = createAction(CoursesConstants.REQUEST_FILTERED_COURSES, props<{ title: string }>());
export const requestFilteredCoursesSuccess = createAction(CoursesConstants.REQUEST_FILTERED_COURSES_SUCCESS, props<{ courses: any[] }>());
export const requestFilteredCoursesFail = createAction(CoursesConstants.REQUEST_FILTERED_COURSES_FAIL, props<{ error: string }>());

// Actions for delete course
export const requestDeleteCourse = createAction(CoursesConstants.REQUEST_DELETE_COURSE, props<{ id: string }>());
export const requestDeleteCourseSuccess = createAction(CoursesConstants.REQUEST_DELETE_COURSE_SUCCESS, props<{ id: string }>());
export const requestDeleteCourseFail = createAction(CoursesConstants.REQUEST_DELETE_COURSE_FAIL, props<{ error: string }>());

// Actions for edit course
export const requestEditCourse = createAction(CoursesConstants.REQUEST_EDIT_COURSE, props<{ id: string, course: any }>());
export const requestEditCourseSuccess = createAction(CoursesConstants.REQUEST_EDIT_COURSE_SUCCESS, props<{ course: any }>());
export const requestEditCourseFail = createAction(CoursesConstants.REQUEST_EDIT_COURSE_FAIL, props<{ error: string }>());

// Actions for create course
export const requestCreateCourse = createAction(CoursesConstants.REQUEST_CREATE_COURSE, props<{ course: any }>());
export const requestCreateCourseSuccess = createAction(CoursesConstants.REQUEST_CREATE_COURSE_SUCCESS, props<{ course: any }>());
export const requestCreateCourseFail = createAction(CoursesConstants.REQUEST_CREATE_COURSE_FAIL, props<{ error: string }>());
