import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import { FormGroup, ControlLabel, FormControl, HelpBlock , Button } from 'react-bootstrap';

class PostsNew extends Component {

    renderField(field) {
        const { meta } = field;
        return (
            <FormGroup validationState={meta.touched && meta.error ? "error" : null}>
                <ControlLabel>{field.label}</ControlLabel>
                <FormControl type="text"  {...field.input} />
                <HelpBlock >
                    {meta.touched ? meta.error : ''}
                </HelpBlock>
            </FormGroup>
        );
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={this.renderField} />
                <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField} />
                <Field
                    label="Content"
                    name="content"
                    component={this.renderField} />
                 <Button bsStyle="info" type="submit">Submit</Button>
                 <Link to="/">
                    <Button>Cancel</Button>
                 </Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};

    if (!values.title) {
        errors.title = "Enter a title";
    }
    if (!values.categories) {
        errors.categories = "Enter some categories";
    }
    if (!values.content) {
        errors.content = "Enter some content";
    }
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);