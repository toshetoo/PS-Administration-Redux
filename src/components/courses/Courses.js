import React from "react";
import {connect} from 'react-redux';
import * as courseActions from '../../actions/CourseActions';
import * as PropTypes from "react/lib/ReactPropTypes";
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class Courses extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddPage = this.redirectToAddPage.bind(this);
    }

    redirectToAddPage() {
        browserHistory.push('/course');
    }

    render() {
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input
                    type='submit'
                    value='Add Course'
                    className='btn btn-primary'
                    onClick={this.redirectToAddPage}
                />
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