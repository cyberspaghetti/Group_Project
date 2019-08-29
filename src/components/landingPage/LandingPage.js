import React, { Component } from "react";
import { getUser } from "../../ducks/userReducer";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import "./landingpage.css";
import background from "./LandingPageFinal-01.png";
import astroBoi from "./astronautMascot2.svg";
const buttonStyle = {
  background: "#00b9ff",
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
      <div>
        <img src={background} alt="" className="background" />
        <Box component="span" m={1} className="login-box">
          <div className="dude-container">
            <img src={astroBoi} alt="" className="astroBoi" />
          </div>
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
