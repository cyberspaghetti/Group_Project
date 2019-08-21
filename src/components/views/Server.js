import React, { Component } from "react";
export default class Server extends Component {
  render() {
      console.log('props in server',this.props)
    return (
      <div className="image-container">
        <img
          src={this.props.server.server_image}
          className="image-container"
          alt=""
        />
        <div onClick={() => this.props.selectServer(this.props.server.server_id)}>
          {this.props.server.server_name}
        </div>
      </div>
    );
  }
}
