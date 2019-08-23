import React, { Component } from "react";
import { connect } from "react-redux";
//reducers
import { createRoom, getRooms } from "../../ducks/roomReducer";
//components
import Room from "../room/Room";
class RoomsMap extends Component {
  
  componentDidMount = () => {
    this.props.getRooms(this.props.selectedServer)
  }
  
  componentDidUpdate = prevProps => { 
      if (prevProps.selectedServer != this.props.selectedServer ) {
      this.props.getRooms(this.props.selectedServer).then(res => {
        this.setState({ rooms: res.value });
      });
    }
  };
  // <RoomsMap selectRoom={this.selectRoom} selectedServer={this.selectedServer}/>
  render() {
    console.log('props in rooms',this.props)
    let rooms = 'loading'
    if(this.props.rooms.rooms)
    return (
      <section className="full-room-holder">
        {rooms = this.props.rooms.rooms.map(rooms => {
          return <Room rooms={rooms} key={rooms.socket_room_id} selectedServer={this.props.selectedServer} selectRoom={this.props.selectRoom}/>;
        })}
      </section>
    );
    return(
      <div>{rooms}</div>
    )
  }
}
function mapStateToProps(state) {
  return {rooms: state.rooms};
}
export default connect(
  mapStateToProps,
  { getRooms, createRoom }
)(RoomsMap);
