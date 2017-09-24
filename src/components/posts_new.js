import React from 'react';
// import {connect} from 'react-redux';
// import {fetchPosts} from "../actions/index";
import {Field, reduxForm} from 'redux-form';


class PostsNew extends React.Component {
    renderField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input type={'text'}{...field.input} className={'form-control'}/>
            </div>
        );
    }

    render() {
        return (
            <form className={'form-group'}>
                <Field label={'Title'} name={'title'} component={this.renderField}/>
                <Field label={'Tags'} name={'tags'} component={this.renderField}/>
                <Field label={'Post Content'} name={'content'} component={this.renderField}/>
            </form>
        );
    }
}

// export default connect(PostsNew.mapStateToProps, {fetchPosts})(PostsNew);
export default reduxForm({
    form: 'PostsNewForm',
})(PostsNew);
