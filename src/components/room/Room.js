import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const singleRoomStyle = {
  padding: '5px 100px 5px 35px',
  width: '300px'
}

export default class Room extends Component {

  render() {
    return (
      <div>
        <section onClick={() => this.props.selectRoom(this.props.selectedServer, this.props.rooms.socket_room_id)}>
          <ListItem style={singleRoomStyle} button>
          {this.props.rooms.room_name}
          </ListItem>
        </section>
      </div>
    );
  }
}

