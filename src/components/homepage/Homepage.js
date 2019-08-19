import React, { Component } from "react";
import { getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

class Homepage extends Component {

  render() {
    if (!this.props.user.loggedIn) return <Redirect to="/" />;
    console.log('dash',this.props)
    return <div>YOU ARE ON THE DASH</div>;
  }
}

function mapStateToProps(state) {
  return {
    user : state.user
  };
}

export default connect(
  mapStateToProps,
  { getUser }
)(Homepage);
