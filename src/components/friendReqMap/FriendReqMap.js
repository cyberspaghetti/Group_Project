import React, { Component } from "react";
import { connect } from "react-redux";
import Request from "../request/Request";
import {
  acceptFriend,
  rejectFriend,
  friendRequests
} from "../../ducks/friendReducer";

class FriendReqMap extends Component {
  componentDidMount = () => {
    this.props.friendRequests(this.props.user.user.user_id);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.requests !== this.props.requests) {
      console.log("are we hittin dat");
      this.render();
    }
  };

  render() {
    console.log("props", this.props);
    if (this.props.requests) {
      return (
        <section>
          {this.props.requests.map(obj => {
            return (
              <div>
                <Request obj={obj} />
              </div>
            );
          })}
        </section>
      );
    } else {
      return <div>loading</div>;
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    friends: state.friends.friends,
    requests: state.friends.requests
  };
}

export default connect(
  mapStateToProps,
  { acceptFriend, rejectFriend, friendRequests }
)(FriendReqMap);
