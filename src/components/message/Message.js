import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import io from "socket.io-client";
import Delete from "@material-ui/icons/Delete";
import Edit from "@material-ui/icons/Edit";
import Save from "@material-ui/icons/Save";
import Divider from "@material-ui/core/Divider";
import { getUsers } from "../../ducks/userReducer";
import { getRoomName } from "../../ducks/serverReducer";
import "../messageBoard/messageBoard.css";
const style = {
  color: " #00b9ff",
  fontSize: "1.5rem"
};
const style2 = {
  color: " #00b9ff",
  fontSize: "1.5rem",
  marginLeft: '4vw'
};
class Message extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      editingInput: ""
    };
  }
  componentDidMount = () => {
    this.setState({
      editingInput: this.props.messageObj.message
    });
  };
  edit = () => {
    if (this.state.editing) {
      this.setState({
        editing: false
      });
    } else if (!this.state.editing) {
      this.setState({
        editing: true
      });
    }
  };
  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  saveChanges = () => {
    this.props.editMessage(
      this.props.messageObj.socket_message_id,
      this.state.editingInput
    );
    this.edit();
  };
  render() {
    // eslint-disable-next-line no-lone-blocks
    console.log("this.state", this.props);
    if (this.props.messageObj.user_id !== this.props.user.user.user_id) {
      return (
        <section className="messages">
          <section className="message-layer2">
            <Divider />
            <img
              className="messaging-picture"
              src={this.props.user.user.user_image}
            />
            <section className="messaging-sender">
              {" "}
              {this.props.user.user.user_name} {""}{" "}
            </section>
            {this.state.editing ? (
              <div className='save-input'>
                <input
                  type="text"
                  name="editingInput"
                  value={this.state.editingInput}
                  onChange={this.handleInput}
                />
                <Save style={style2} onClick={this.saveChanges}>
                  Save
                </Save>
              </div>
            ) : (
              <section className="message-color">
                {" "}
                {this.props.messageObj.message}
              </section>
            )}
            <Delete
              style={style}
              className="put-socket"
              onClick={() =>
                this.props.deleteMessage(
                  this.props.messageObj.socket_message_id
                )
              }
            >
              Delete
            </Delete>
            <Edit style={style} className="put-socket" onClick={this.edit}>
              Edit Message
            </Edit>
          </section>
        </section>
      );
    } else {
      let correctPerson = this.props.user.users.find( element => {
        return element.user_id == this.props.messageObj.user_id;
      });
      return (
        <section className="messages">
          <section className="message-layer2">
            <Divider />
            <div>{console.log(correctPerson)}</div>
            <img className="messaging-picture" src={correctPerson.user_image} />
            <section className="messaging-sender-not-user">
              {" "}
              {correctPerson.user_name} {""}{" "}
            </section>
            <section className="message-color">
              {" "}
              {this.props.messageObj.message}{" "}
            </section>
          </section>
        </section>
      );
    }
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
)(Message);