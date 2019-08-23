import React, { Component } from "react";
import { getUser } from "../../ducks/userReducer";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "./landingpage.css";

const buttonStyle = {
  background: "#7e8699",
  color: "#ffffff"
};

class LandingPage extends Component {
  componentDidMount() {
    if (!this.props.user.loggedIn) {
      this.props.getUser();
    }
  }

  userLogin = () => {
    window.location.href = "http://localhost:4000/api/login";
  };

  render() {
    if (this.props.user.loggedIn) return <Redirect to="/home/0/0" />;
    return (
      <div className="login-container">
        <Box component="span" m={1} className="login-box">
          <Button />
          <div className="dude-container" />
          <div className="button-container">
            <Button
              style={buttonStyle}
              className="login-button"
              onClick={this.userLogin}
            >{`Login / Register`}</Button>
          </div>
        </Box>
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