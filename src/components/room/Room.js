import React, { Component } from "react";
import { connect } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import './Room.css'
const singleRoomStyle = {
  // padding: '5px 100px 5px 35px',
  width: '300px',
  height: '30px',
  margin: '0px',
  paddingTop: '0px',
}

const textChannelNameStyle = {
  margin: '10px',
  fontSize: '15px'

}

 class Room extends Component {
   constructor(){
     super()
     this.state={
       userChannelShow: false
     }
   }
   showShowName = () => {
    this.setState({ userChannelShow: !this.state.userChannelShow });

  }
  componentDidUpdate(prevProps, prevState){
    
   if(prevProps.selectedRoom !== this.props.selectedRoom)
   this.setState({userChannelShow: false})
  }

  render() {
    console.log('preveprops n rooms', this.props)
    let { userChannelShow }= this.state
    return (
      <div className='space' >
        <section className='specific-room' onClick={() => this.props.selectRoom(this.props.selectedServer, this.props.rooms.socket_room_id)}>
          <ListItem button style={singleRoomStyle} onClick={this.showShowName}>
             {userChannelShow
          ?
          <div className=''>
          <div className='name-of-server'>{this.props.rooms.room_name}</div>
          <div classname='room-user'>  
          <div className='online'>
          </div >
          <div className='name'>
          {this.props.user.user.user_name}
          </div>
          </div>
          </div>
          :
          <h1 onClick={this.showShowName}> {this.props.rooms.room_name}</h1>
        }
          </ListItem>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(
  mapStateToProps,
  null
)(Room);