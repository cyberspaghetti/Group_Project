import React, { Component } from "react";
import { connect } from "react-redux";

import ListItem from "@material-ui/core/ListItem";
import '../rooms/Rooms.css'

const singleRoomStyle = {
  padding: '5px 100px 5px 35px',
  width: '300px'
}

class Room extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    console.log("object", this.props.obj.socket_room_id);
    return (
      <div>
        <section
          onClick={() =>
            this.props.selectRoom(
              this.props.selectedServer,
              this.props.obj.socket_room_id
            )
          }
        >
          <ListItem button style={singleRoomStyle} >{this.props.obj.room_name}</ListItem>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  {}
)(Room);
