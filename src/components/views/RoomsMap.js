import React, { Component } from "react";
import { connect } from "react-redux";

//reducers
import { createRoom, getRooms } from "../../ducks/roomReducer";

class RoomsMap extends Component {
  constructor() {
    super();

    this.state = {
      rooms: []
    };
  }

  componentDidMount = () => {
    let rooms = this.props.getRooms();
    this.setState({
      rooms
    });
  };

  render() {
    return (
      <section className="full-room-holder">
        <div />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  { getRooms, createRoom }
)(RoomsMap);
