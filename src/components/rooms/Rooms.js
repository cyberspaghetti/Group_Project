import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import "./Rooms.css";
import { IconButton } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import { Link, Route } from "react-router-dom";
import { getThemeProps } from "@material-ui/styles";
import MessageBoard from "../messageBoard/MessageBoard";
import { connect } from "react-redux";

import RoomsMap from "../roomsMap/RoomsMap";

const useStyles = makeStyles({
  root: {
    background: "#3d4251",
    borderRadius: 3,
    border: "1px solid #52586d",
    color: "white",
    height: 48,
    padding: "0px 30px"
  },
  label: {
    textTransform: "capitalize"
  }
});
const addButton = {
  color: "#ccc"
};
const listItemStyle = {
  color: "#ccc",
  fontSize: ".9rem",
  padding: "0px"
};

const roomListStyle = {
  width: "100%"
};

function Rooms(props) {
  const classes = useStyles();

  // tying to get server name for rooms

  // const serverName = props.server.serverUsers.filter(server => {
  //   if(props.selectedServer === server.server_id){
  //     return server.server_name
  //   } 
  // })


  return (
    <div className="rooms-container">
      <div className="server-name">
        <Button
          classes={{
            root: classes.root,
            label: classes.label
          }}
        >
          {'WHAAAT'}
        </Button>
      </div>

      <div className="text-channel-container">
        <div className="text-channels-title">
          {`TEXT CHANNELS`}
          <IconButton style={addButton}>
            <AddIcon onClick={props.toggle} />
          </IconButton>
        </div>
        <List style={roomListStyle}>
          <ListItem style={listItemStyle}>
            <RoomsMap
              selectedServer={props.selectedServer}
              selectRoom={props.selectRoom}
            />
          </ListItem>
        </List>
      </div>
      <MessageBoard
        selectedServer={props.selectedServer}
        selectedRoom={props.selectedRoom}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return { user: state.user, server: state.server };
}

export default connect(mapStateToProps)(Rooms);
