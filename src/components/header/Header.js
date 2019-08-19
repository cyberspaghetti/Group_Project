import React, { Component } from "react";
import { userData, logout } from "../../ducks/userReducer";
import { connect } from "react-redux";

class Header extends Component {


  login = () => {
    const redirectUri = encodeURIComponent(
      `${window.location.origin}/auth/callback`
    );
    window.location = `https://${
      process.env.REACT_APP_AUTH0_DOMAIN
    }/authorize?client_id=${
      process.env.REACT_APP_AUTH0_CLIENT_ID
    }&scope=openid%20profile%20email&redirect_uri=${redirectUri}&response_type=code`;
  }

  logout = () => {
    this.props.logout();
  }

  render() {
    return (
      <div>
        <div className="section">
          <button onClick={this.login}>Log in</button>{" "}
          <button onClick={this.logout}>Log out</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user.user };
}

export default connect(
  mapStateToProps,
  { userData, logout }
)(Header);
