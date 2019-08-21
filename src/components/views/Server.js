import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import '../homepage/homepage.css'

//this is the component for a specified server it grabs props from the parent module that is uses it and displays the server information
export default class Server extends Component {
  render() {
    return (

      <ListItem button className='list-item-text'>
        <div className="image-container">
          <img
            src=''
            alt=""
          />
          <div
            onClick={() =>
              this.props.selectServer(this.props.server.server_id)
            }
          >
            {this.props.server.server_name}
          </div>
        </div>
      </ListItem>
    );
  }
}
