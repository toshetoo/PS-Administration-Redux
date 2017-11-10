import React from "react";
import {connect} from 'react-redux';
import * as courseActions from '../../actions/CourseActions';
import * as PropTypes from "react/lib/ReactPropTypes";
import {bindActionCreators} from 'redux';

class Courses extends React.Component {
    constructor(props, context) {
        super(props, context);
    }


    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }


    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
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