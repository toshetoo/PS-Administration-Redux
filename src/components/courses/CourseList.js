import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CourseList = ({courses, deletedCourse}) => {
  return (
    <table className='table'>
        <thead>
            <th>&nbsp;</th>
            <th>Title</th>
            <th>Author</th>
            <th>Category</th>
            <th>Length</th>
        </thead>
        <tbody>
        {courses.map(c => {
            return <CourseListRow key={c.id} course={c} />
        })}
        </tbody>
    </table>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;