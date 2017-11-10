import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/CourseActions";
import * as authorActions from "../../actions/authorActions";
import CourseForm from "./CourseForm";

class ManageCourses extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            authors: [],
            course: Object.assign({}, this.props.course),
            errors: {}
        };

        this.onSave = this.onSave.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.course.id !== nextProps.course.id) {
            this.setState({
               course: Object.assign({}, nextProps.course)
            });
        }
    }

    onSave(event) {
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.push('/courses');
    }

    onChange(event) {
        const field = event.target.name;
        let course = this.state.course;
        course[field] = event.target.value;
        return this.setState({
            course: course
        });
    }


    render() {
        return (
            <CourseForm course={this.state.course} errors={this.state.errors} allAuthors={this.props.authors} onChange={this.onChange}
                        onSave={this.onSave}/>
        );
    }

}

ManageCourses.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCourses.contextTypes = {
    router: PropTypes.object
};

ManageCourses.defaultProps = {};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id === id);
    if(course) {
        return course[0];
    }

    return null;
}

function mapStateToProps(state, ownProps) {
    let course = {id: "", watchHref: "", title: "", authorId: "", length: "", category: ""};

    let courseID = ownProps.params.id;
    if(courseID && state.courseReducer.length > 0) {
        course = getCourseById(state.courseReducer, courseID);
    }

    const authorsFormatted = state.authorReducer.map(author => {
       return {
           value: author.id,
           text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFormatted
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch),
        authorActions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCourses);