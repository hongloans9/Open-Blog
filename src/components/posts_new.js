import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        return (
            <div>
                <label>Title</label>
                <input type="text" {...field.input} />
            </div>
        );
    }

    render() {
        return (
            <form >
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField} />
                <Field
                    label="Tags"
                    name="tags"
                    component={this.renderField} />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField} />

                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);