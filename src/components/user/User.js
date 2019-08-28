import React, { Component } from "react";
import { connect } from "react-redux";

import Button from '@material-ui/core/Button'
import "./User.css";

import { addFriend } from "../../ducks/friendReducer";

const listItemStyle = {
  color: "#ccc",
  fontSize: ".9rem"
};
//this is the component for the user it grabs props from the parent module that uses it and displays the specific user information
class User extends Component {

  
  render() {
    return (
      <div className="specific-user-holder">
        <img src={this.props.users.user_image} className="image-request" />
        <section className='pics-name'>
          <div>{this.props.users.user_name}</div>
          <Button style={listItemStyle}
            onClick={() =>
              this.props.addFriend(
                this.props.user.user.user_id,
                this.props.users.user_id
              )
            }
          >
            request
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
  { addFriend }
)(User);
