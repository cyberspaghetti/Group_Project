import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import "../homepage/homepage.css";

//this is the component for a specified server it grabs props from the parent module that is uses it and displays the server information

const listItemStyleServer = {
  padding: "0px",
  marginLeft: '7px'
};

export default class Server extends Component {
  addDefaultSrc(ev) {
    ev.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlhaYgj0EeSjYPBSHNY3xacbupTZ_EnCvlSWoyJB7jMa1wuhdeA";
  }

  render() {
    return (
      <ListItem
        button
        style={listItemStyleServer}
        onClick={() => this.props.selectServer(this.props.server.server_id)}
        className="list-item-text"
      >
        <img
          className="image-test"
          src="this.props.server.server_image"
          alt="server-pic"
          onError={this.addDefaultSrc}
        />
        <div className='server-name-style'>{this.props.server.server_name}</div>
      </ListItem>
    );
  }
}
