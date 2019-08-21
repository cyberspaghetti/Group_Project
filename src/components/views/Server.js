import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import '../homepage/homepage.css'

//this is the component for a specified server it grabs props from the parent module that is uses it and displays the server information
export default class Server extends Component {
  render() {
    console.log('propsosopr', this.props)
    return (

        <ListItem button className='list-item-text'>
            <img
              src='this.props.server.server_image'
              alt=""
            />
            <div
              onClick={() =>
                this.props.selectServer(this.props.server.server_id, 0)
              }
            >
              {this.props.server.server_name}
            </div>
        </ListItem>
    );
  }
}
