import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { createPost } from '../actions';
import './App.css';

class PostsNew extends Component {

    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-control ${touched && error ? 'is-invalid' : ''}`;
        if (field.label !== 'Content') {
        return (
            <div className="form-group" >
                <h4>{field.label}</h4>
                <input type="text" className={className} {...field.input} />
                <div className="invalid-feedback">
                    {touched ? error : ''}
                </div>
            </div>
        );
        } else {
            return (
            <div className="form-group" >
                <h4>{field.label}</h4>
                <textarea rows="5" className={className} {...field.input}> </textarea>
                <div className="invalid-feedback">
                    {touched ? error : ''}
                </div>
            </div>
        );
        }
    }

    onSubmit(values) {
        this.props.createPost(values, () => {
            this.props.history.push('/Open-Blog/');
        });
    }

    render() {
        const { handleSubmit } = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
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
                            <button className="btn btn-primary" type="submit">Submit</button>
                            <Link to="/Open-Blog/">
                                <button className="btn">Cancel</button>
                            </Link>
                        </form>
                        <br/>
                    </div>
                </div>
            </div>

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