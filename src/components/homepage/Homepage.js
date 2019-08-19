import React, { Component } from "react";
import Header from '../header/Header'
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

class Homepage extends Component {
  render() {
    if (!this.props.user.loggedIn) return <Redirect to="/" />;
    return (
      <div>
        <Header />
        YOU ARE ON THE HOMEPAGE NOW..
      </div>
    );
  }
}

function mapStateToProps(state) {
    return { user: state.user };
  }

  export default connect(
    mapStateToProps,
    { }
  )(Homepage);
  