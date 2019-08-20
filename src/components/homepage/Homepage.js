import React, { Component } from "react";
import { editUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import ServersMap from '../views/ServersMap'
import ServerRegistration from '../registration/ServerRegistration'

import "./homepage.css";
import Header from "../header/Header";

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user_name: props.user.user.user_name,
      user_image: props.user.user.user_image,

      editing: false
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
    console.log("props", this.props);
    this.props.editUser(this.props.user.user.auth0_id, user_name, user_image);
    this.setState({ editing: false });
  };

  render() {
    if (!this.props.user.loggedIn) return <Redirect to="/" />;
    console.log(this.props);
    console.log("dash", this.props.user.user.user_name);
    console.log("dash1", this.state.user_name);
    return (
      <div>
        Server Registration
        <ServerRegistration/>
        Servers Mapped
        <ServersMap/>
        <Header />
         YOU ARE ON THE DASH
        {this.state.editing ? (
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
    );
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
