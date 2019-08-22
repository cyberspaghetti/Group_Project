import React, { Component } from "react";
import { connect } from "react-redux";
//reducers
import { createRoom, getRooms } from "../../ducks/roomReducer";
//components
import Room from "../room/Room";

class RoomsMap extends Component {
  constructor() {
    super()
    this.state = {
      rooms: []
    };
  }
  
  componentDidMount = () => {
    this.props.getRooms(this.props.selectedServer).then(res => {
      this.setState({ rooms: res.value });
    })
  }
  
  componentDidUpdate = prevProps => { 
      if (prevProps.selectedServer != this.props.selectedServer ) {
        console.log('hitihtihi')
      this.props.getRooms(this.props.selectedServer).then(res => {
        this.setState({ rooms: res.value });
      });
    }
  };
  // <RoomsMap selectRoom={this.selectRoom} selectedServer={this.selectedServer}/>
  render() {
    console.log("eyo", this.props.selectedServer);
    let { rooms } = this.state;
    return (
      <section className="full-room-holder">
        {rooms.map(obj => {
          return <Room obj={obj} key={obj.socket_room_id} selectedServer={this.props.selectedServer} selectRoom={this.props.selectRoom}/>;
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
