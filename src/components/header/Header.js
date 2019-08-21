import React, { Component } from "react";
import { logout, getUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import axios from "axios";

class Header extends Component {
  constructor() {
    super();

    this.userLogin = this.userLogin.bind(this);
  }

   userLogin() {
    window.location.href = "http://localhost:4000/api/login";
  }

  logout = () => {
    // this.props.logout()
    window.location.href = "http://localhost:4000/api/logout";
  }

  render() {
    return (
      <div>
        <button onClick={this.userLogin}>Login</button>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { logout, getUser }
)(Header);
