import React, { Component } from "react";
import { connect } from "react-redux";

import { addFriend } from "../../ducks/friendReducer";
//this is the component for the user it grabs props from the parent module that uses it and displays the specific user information
class User extends Component {
  render() {
      console.log("flkajflasjfd;ljads;ljflkasjdklfjasd", this.props.users)
    return (
      <div className="image-container">
        <img src={this.props.users.user_image} className="request-image" />
        <div>{this.props.users.user_name}</div>
        <button onClick={() => this.props.addFriend(this.props.user.user.user_id, this.props.users.user_id)}>request</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(
  mapStateToProps,
  { addFriend }
)(User);
