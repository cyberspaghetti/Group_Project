import React, { Component } from "react";
import { connect } from "react-redux";
import { removeFriend, getFriends } from "../../ducks/friendReducer";

import Button from "@material-ui/core/Button";
import "./Friends2.css";
//this is the component for the user it grabs props from the parent module that uses it and displays the specific user information

const listItemStyle = {
  color: "#ccc",
  fontSize: ".9rem"
};

class Friend2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      friendOfUser: ""
    };
  }

  render() {
    let { friends } = this.props;
    return (
      <div className="specific-user-holder">
        <img src={friends.user_image} className="request-image2" />
        <section className="pics-name">
          <div>{friends.user_name}</div>
          <Button
            style={listItemStyle}
            onClick={() =>
              this.props.remove(
                this.props.friends.user_id,
                this.props.friends.friend_id
              )
            }
          >
            remove
          </Button>
        </section>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(
  mapStateToProps,
  { removeFriend, getFriends }
)(Friend2);
