import React, { Component } from "react";
import { connect } from "react-redux";

import Button from '@material-ui/core/Button'

import { rejectFriend, acceptFriend } from '../../ducks/friendReducer'

import "./Request.css";

const listItemStyle = {
  color: "#ccc",
  fontSize: ".9rem"
};

class Request extends Component {
  render() {
    return (
      <section className="specific-user-holder">
        <img src={this.props.obj.user_image} className="request-image" />
        <section className='pics-name'>
        <div>{this.props.obj.user_name}</div>
        <Button style={listItemStyle} onClick={() => this.props.acceptFriend(this.props.obj.user_friend_junction, this.props.user.user.user_id)}>accept</Button>
        <Button style={listItemStyle} onClick={() => this.props.rejectFriend(this.props.obj.user_friend_junction, this.props.user.user.user_id)}>reject</Button>
        </section>
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
