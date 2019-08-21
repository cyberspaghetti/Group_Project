import React, { Component } from "react";

//this is the component for a specified server it grabs props from the parent module that is uses it and displays the server information 
export default class Server extends Component {
  render() {
    return (
      <div className="image-container">
        <img
          src={this.props.server.server_image}
          className="image-container"
          alt=""
        />
        <div onClick={() => this.props.selectServer(this.props.server.server_id)}>{this.props.server.server_name}</div>
        {/* <div onCLick={() => this.props.location.push(`/${this.props.server.server_id}`)}>{this.props.server.server_name}</div> */}
      </div>
    );
  }
}
