import React, { Component } from "react";
import { connect } from "react-redux";

//reducers
import { createRoom, getRooms } from "../../ducks/roomReducer";

//components
import Room from "./Room";

class RoomsMap extends Component {
  constructor() {
    super()
    this.state = {
      rooms: []
    };
  }

  componentDidUpdate = prevProps => {
    if (prevProps.selectedServer !== this.props.selectedServer) {
      this.props.getRooms(this.props.match.params.selectedServer).then(res => {
        this.setState({ rooms: res.value });
      });
    }
  };
  // <RoomsMap selectRoom={this.selectRoom} selectedServer={this.selectedServer}/>
  render() {
    console.log("eyo", this.props);
    let { rooms } = this.state;
    return (
      <section className="full-room-holder">
        {this.state.rooms.map(obj => {
          return <Room obj={obj} key={obj.socket_room_id} />;
        })}
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
