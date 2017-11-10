import React from "react";

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
        alert(`Saving ${this.state.course.title}`);
    }


    render() {
        return (
            <div>
                <h1>Courses</h1>

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

export default Courses;