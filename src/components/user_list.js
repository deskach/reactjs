import React from "react";
import {connect} from "react-redux";
import {fetchUsers} from "../actions/index";

class UserList extends React.Component {
  componentWillMount() {
    this.props.fetchUsers();
  }

  renderUser(user) {
    return (
      <div className="card card-block" key={user.name}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.company.name}</p>
        <a className="btn btn-primary" href={user.website}>Website</a>
      </div>
    )
  }

  render() {
    if (this.props.users) {
      return (
        <div className="user-list">
          {this.props.users.map(this.renderUser)}
        </div>
      )
    }

    return <div>Loading...</div>
  }

  static mapState2Props({users}) {
    return {users};
  }
}

export default connect(UserList.mapState2Props, {fetchUsers})(UserList);
