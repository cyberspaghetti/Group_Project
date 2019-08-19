import React, { Component } from "react";

import axios from "axios";
import { userData, logout } from "../../ducks/userReducer";
import Header from "../header/Header";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class LandingPage extends Component {
  

  componentDidMount() {
    if (!this.props.user.loggedIn) {
      this.props.userData();
    }
  } 

  fetchSecureData = () => {
    axios
      .get("/api/secure-data")
      .then(response => {
        this.setState({
          secureDataResponse: JSON.stringify(response.data, null, 2)
        });
      })
      .catch(error => {
        this.setState({ secureDataResponse: this.getMessage(error) });
      });
  };

  render() {
    if (this.props.user.loggedIn) return <Redirect to="/home" />;
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(
  mapStateToProps,
  { userData, logout }
)(LandingPage);
