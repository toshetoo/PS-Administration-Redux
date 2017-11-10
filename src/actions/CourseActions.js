import * as types from './actionTypes';
import CourseAPI from '../api/mockCourseApi'

export function loadCoursesSuccess(courses) {
    return {type: types.LOAD_COURSES_SUCCESS, courses: courses};
}

export function updateCourseSuccess(course) {
    return {type: types.UPDATE_COURSE_SUCCESS, course: course};
}

export function createCourseSuccess(course) {
    return {type: types.CREATE_COURSE_SUCCESS, course: course};
}

export function loadCourses() {
    return function (dispatch) {
        return CourseAPI.getAllCourses().then((courses) => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error => {
            throw(error);
        });
    }
}

export function saveCourse(course) {
    return function (dispatch) {
        return CourseAPI.saveCourse(course).then((savedCourse) => {
            if(savedCourse.id) {
                dispatch(updateCourseSuccess(savedCourse));
            } else {
                dispatch(createCourseSuccess(savedCourse))
            }
        }).catch(error => {
            throw(error);
        });
    }
}