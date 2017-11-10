import React from "react";
import {connect} from 'react-redux';
import * as courseActions from '../../actions/CourseActions';
import * as PropTypes from "react/lib/ReactPropTypes";
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';

class Courses extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <CourseList courses={courses}/>
            </div>
        );
    }
}

Courses.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
      courses: state.courseReducer
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Courses);