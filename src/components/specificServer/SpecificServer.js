import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import "../homepage/homepage.css";
import serverDefaultImage from './serverDefault.png';

//this is the component for a specified server it grabs props from the parent module that is uses it and displays the server information

const listItemStyleServer = {
  padding: "0px",
  marginLeft: "7px",
  color: 'white'
};

export default class SpecificServer extends Component {
  addDefaultSrc(ev) {
    ev.target.src = serverDefaultImage
  }

  render() {
    return (
      <ListItem
        button
        className="list-item-text"
        style={listItemStyleServer}
        onClick={() => this.props.selectServer(this.props.servers.server_id, 0)}
      >
        <img
          src={this.props.servers.server_image}
          alt=""
          onError={this.addDefaultSrc}
          className="server-image"
        />
        <div>{this.props.servers.server_name}</div>
      </ListItem>
    );
  }
}
