import React, { Component } from "react";
import Header from "../header/Header";
import { getUser } from "../../ducks/userReducer";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class LandingPage extends Component {

  componentDidMount() {
    if (!this.props.user.loggedIn) {
      console.log('hit')
      this.props.getUser();
    }
  }

  render() {
    console.log('props',this.props)
    if (this.props.user.loggedIn) return <Redirect to="/home" />;
    return (
      <div>
        <Header />
        this is landing page
      </div>
    );
  }
}

//rethink how the layout is laid out
//Write down ideas for battle system steps to take

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { getUser }
)(LandingPage);
