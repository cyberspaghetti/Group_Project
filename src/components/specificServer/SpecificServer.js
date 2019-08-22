import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import "../homepage/homepage.css";

//this is the component for a specified server it grabs props from the parent module that is uses it and displays the server information

const listItemStyleServer = {
  padding: "0px",
  marginLeft: "7px"
};

export default class SpecificServer extends Component {
  addDefaultSrc(ev) {
    ev.target.src =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlhaYgj0EeSjYPBSHNY3xacbupTZ_EnCvlSWoyJB7jMa1wuhdeA";
  }

  render() {
    console.log("propsosopr", this.props);
    return (
      <ListItem
        button
        className="list-item-text"
        onClick={() => this.props.selectServer(this.props.server.server_id, 0)}
      >
        <img
          src="this.props.server.server_image"
          alt=""
          onError={this.addDefaultSrc}
          className="image-test"
        />
        <div>{this.props.server.server_name}</div>
      </ListItem>
    );
  }
}
