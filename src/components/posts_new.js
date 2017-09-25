import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from "../actions/index";


class PostsNew extends React.Component {
    renderField(field) {
        const {meta: {touched, error}} = field;
        const hasDanger = touched && error ? 'has-danger' : '';
        const className = `form-group ${hasDanger}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input type={'text'}{...field.input} className={'form-control'}/>
                <div className={'text-help'}>
                    {touched && error}
                </div>
            </div>
        );
    }

    onSubmit(values) {
        this.props.createPost(values);
    }

    render() {
        const {handleSubmit} = this.props;

        return (
            <form className={'form-group'}
                  onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field label={'Title'} name={'title'} component={this.renderField}/>
                <Field label={'Categories'} name={'categories'} component={this.renderField}/>
                <Field label={'Post Content'} name={'content'} component={this.renderField}/>

                <button type={'submit'} className={'btn btn-primary'}>Submit</button>
                <Link to={"/"} className={"btn btn-danger"}>Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {}; // if empty -> the form is valid

    // Validate the inputs from 'values'
    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.categories) {
        errors.categories = "Enter a categories!";
    }
    if (!values.content) {
        errors.content = "Enter a content!";
    }

    return errors;
}

// export default connect(PostsNew.mapStateToProps, {fetchPosts})(PostsNew);
export default reduxForm({
    validate,
    form: 'PostsNewForm',
})(
    connect(null, {createPost})(PostsNew)
);
