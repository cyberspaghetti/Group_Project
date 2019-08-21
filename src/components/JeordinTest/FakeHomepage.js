import React, { Component } from "react";
import { editUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";

import Header from "../header/Header";
import ServersMap from "../views/ServersMap";
import RoomsMap from "./RoomsMap";

class FakeHomepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: props.user.user.user_name,
      user_image: props.user.user.user_image,
      editing: false,

      //passing props
      selectedServer: 0,
      selectedRoom: 0
    };
  }

  componentDidMount = () => {
    if (!this.props.user.user.user_name) {
      this.setState({ editing: true });
    }
  };

  addDefaultSrc(ev) {
    ev.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlhaYgj0EeSjYPBSHNY3xacbupTZ_EnCvlSWoyJB7jMa1wuhdeA";
  }

  cancel = () => {};

  saveEdit = () => {
    const { user_name, user_image } = this.state;
    this.props.editUser(this.props.user.user.auth0_id, user_name, user_image);
    this.setState({ editing: false });
  };

  //props function/selecting
  selectServer = server_id => {
    console.log("hit", server_id);
    this.setState({
      selectedServer: server_id
    });
  };

  selectRoom = () => {};

  render() {
    console.log("main state", this.state);
    if (!this.props.user.loggedIn) return <Redirect to="/" />;
    if (this.state.selectedServer !== 0) {
      return (
        <div>
          <Header />
          Servers Mapped for searching for and adding servers
          <ServersMap selectServer={this.selectServer} />
          <RoomsMap
            selectRoom={this.selectRoom}
            selectedServer={this.state.selectedServer}
          />
          Testing
        </div>
      );
    } else if (this.state.selectedServer === 0) {
      return (
        <div>
          <Header />
          THE NEWS WOULD BE ON THIS PAGE{" "}
          <ServersMap selectServer={this.selectServer} />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(
  mapStateToProps,
  { editUser }
)(FakeHomepage);
