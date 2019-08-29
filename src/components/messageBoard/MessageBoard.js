import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import io from "socket.io-client";
import Delete from "@material-ui/icons/Delete";
import Divider from "@material-ui/core/Divider";
import { getUsers } from "../../ducks/userReducer";
import { getRoomName } from "../../ducks/serverReducer";
import Message from "../message/Message";
import "./messageBoard.css";
class MessageBoard extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      messageInput: "",
      room: 0,
      server: 0
    };
  }
  componentDidMount = () => {
    this.socket = io();
    this.socket.on("room entered", data => {
      this.joinSuccess(data);
    });
    this.socket.on("message sent", data => {
      this.updateMessages(data);
    });
    this.props.getUsers();
  };
  componentWillUnmount = () => {
    this.socket.disconnect();
  };
  componentDidUpdate = prevProps => {
    if (prevProps.selectedRoom != this.props.selectedRoom) {
      this.props
        .getRoomName(this.props.selectedRoom, this.props.selectedServer)
        .then(res => {
          this.setState({ rooms: res.value });
        })
        .then(
          this.setState(
            {
              room: this.props.selectedRoom,
              server: this.props.selectedServer
            },
            () => {
              if (this.state.room !== 0) {
                this.socket.emit("enter room", {
                  selectedRoom: this.state.room,
                  selectedServer: this.props.selectedServer,
                  roomName: this.state.room
                });
              }
            }
          )
        );
    }
  };
  joinSuccess = messages => {
    this.setState({
      messages
    });
  };
  sendMessage = () => {
    console.log(
      "sent",
      this.state.messageInput,
      this.state.room,
      this.state.server
    );
    this.socket.emit("send message", {
      message: this.state.messageInput,
      selectedRoom: this.state.room,
      selectedServer: this.state.server,
      sender: this.props.user.user.user_id
    });
    this.setState({
      messageInput: ""
    });
  };
  deleteMessage = socket_message_id => {
    console.log("hit");
    this.socket.emit("delete message", {
      socket_message_id,
      selectedRoom: this.state.room,
      selectedServer: this.props.selectedServer
    });
  };
  editMessage = (socket_message_id, editingInput) => {
    this.socket.emit("edit message", {
      socket_message_id: socket_message_id,
      message: editingInput,
      room_id: this.state.room,
      server_id: this.state.server
    });
  };
  updateMessages = messages => {
    this.setState({
      messages
    });
  };
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="text-channel-containerz">
        <section className="mapped-message-holder">
          {this.state.messages.map(messageObj => {
            return (
              <Message
                messageObj={messageObj}
                deleteMessage={this.deleteMessage}
                selectedRoom={this.state.selectedRoom}
                selectedServer={this.state.selectedServer}
                editMessage={this.editMessage}
              />
            );
          })}
        </section>
        {/* <div className="message-footer"> */}
        {this.state.room ? (
          <div className="group2">
            {" "}
            <input
              type="text"
              name="messageInput"
              autocomplete="off"
              value={this.state.messageInput}
              onChange={this.handleInput}
              onKeyDown={ev => {
                if (ev.key === "Enter") {
                  this.sendMessage();
                }
              }}
              required
            />
            <span className="highlight2" />
            <span className="bar2" />
            <label className="label2">Message</label>
          </div>
        ) : null}
        {/* </div> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(
  mapStateToProps,
  { getRoomName, getUsers }
)(MessageBoard);