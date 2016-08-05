import React, {Component} from "react";
import {reduxForm} from "redux-form";
import * as actions from "../../actions";

class Signin extends Component {
  handleFormSubmit({email, password}) {
    this.props.signin({email, password});
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const {handleSubmit, fields: {email, password}} = this.props;
    //^handleSubmin, email and password come from reduxForm

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <fieldset className="form-group">
          <label>Email:</label>
          <input {...email} className="form-control"/>
        </fieldset>
        <fieldset className="form-group">
          <label>Password:</label>
          <input type="password" {...password} className="form-control"/>
        </fieldset>
        {this.renderAlert()}
        <button action="submit" className="btn btn-primary">Sign in</button>
      </form>
    );
  }

  static mapState2Props(state) {
    return {
      errorMessage: state.auth.error
    };
  }
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, Signin.mapState2Props, actions)(Signin);
