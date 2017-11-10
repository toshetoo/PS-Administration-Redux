import React from "react";
import {connect} from 'react-redux';
import * as courseActions from '../../actions/CourseActions';
import * as PropTypes from "react/lib/ReactPropTypes";
import {bindActionCreators} from 'redux';

class Courses extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: {title: ''}
        };

        this.onClickSave = this.onClickSave.bind(this);
        this.onTitleChange = this.onTitleChange.bind(this);
    }

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course: course
        });
    }

    onClickSave() {
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }


    render() {
        return (
            <div>
                <h1>Courses</h1>

                {this.props.courses.map(this.courseRow)}
                <input
                    type='text'
                    onChange={this.onTitleChange}
                    value={this.state.course.title}
                />
                <input type='button' value='Save' onClick={this.onClickSave} />
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