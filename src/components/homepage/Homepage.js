import React, { Component } from "react";
import { editUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import ServersMap from "../views/ServersMap";
import ServerRegistration from "../registration/ServerRegistration";
import UsersMap from "../views/UsersMap";
import "./homepage.css";
import Header from "../header/Header";
import RoomsMap from "../JeordinTest/RoomsMap";

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: props.user.user.user_name,
      user_image: props.user.user.user_image,
      editing: false,

      //props function/selecting---------------
      selectedServer: 0,
      selectedRoom: 0
    };
  }

  componentDidMount = () => {
    if (!this.props.user.user.user_name) {
      this.setState({ editing: true });
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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

  //props function/selecting---------------
  selectServer = server_id => {
    console.log("hit", server_id);
    this.setState({
      selectedServer: server_id
    });
  };

  selectRoom = () => {};

  render() {
   console.log(this.props);
    if (!this.props.user.loggedIn) return <Redirect to="/" />;
    if (this.state.selectedServer !== 0) {
      return (
        <div>
          <Header />
          Server Registration
          <ServerRegistration />
          Servers Mapped for searching for and adding servers
          <ServersMap selectServer={this.selectServer} />
          <RoomsMap
            selectRoom={this.selectRoom}
            selectedServer={this.state.selectedServer}
          />
          Users Mapped for user component searching for and adding friends
          <UsersMap />
          YOU ARE ON THE DASH
          {this.state.editing ? ( //edit user profile----------------------------
            <section className="dark-dash">
              <div className="user-edit">
                <img src={this.state.user_image} onError={this.addDefaultSrc} />
                PROFILE
                <input
                  value={this.state.user_name}
                  onChange={this.handleChange}
                  name="user_name"
                />
                <input
                  value={this.state.user_image}
                  onChange={this.handleChange}
                  name="user_image"
                />
                <button onClick={this.saveEdit}>Submit</button>
              </div>
            </section>
          ) : null}
        </div>
      ); //-----------------------------------------------------------------------
    } else if (this.state.selectedServer == 0) {
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
)(Homepage);
