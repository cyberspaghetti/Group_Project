import React, { Component } from "react";
import { connect } from "react-redux";

import { rejectFriend, acceptFriend } from '../../ducks/friendReducer'

import "./Request.css";


class Request extends Component {
  render() {
    console.log("353", this.props.obj);
    return (
      <section>
        <img src={this.props.obj.user_image} className="request-image" />
        <div>{this.props.obj.user_name}</div>
        <button onClick={() => this.props.acceptFriend(this.props.obj.user_friend_junction, this.props.user.user.user_id)}>accept</button>
        <button onClick={() => this.props.rejectFriend(this.props.obj.user_friend_junction, this.props.user.user.user_id)}>reject</button>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { rejectFriend, acceptFriend }
)(Request);
