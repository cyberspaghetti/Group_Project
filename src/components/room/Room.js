import React, { Component } from "react";
import { connect } from "react-redux";

class Room extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    console.log('object',this.props.obj.socket_room_id)
    return (
      <div>
        <section onClick={() => this.props.selectRoom(this.props.selectedServer, this.props.obj.socket_room_id)}>
          {this.props.obj.room_name}
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
