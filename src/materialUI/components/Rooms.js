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
import TextChannel from './TextChannel'

import RoomsMap from '../../components/roomsMap/RoomsMap'

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
  paddingLeft: "35px"
};
export default function Rooms(props) {
  const classes = useStyles();
  return (
    <div className="rooms-container">
      <div className="server-name">
        <Button
          classes={{
            root: classes.root,
            label: classes.label
          }}
        >
          {`server name`}
        </Button>
      </div>
      <div className="text-channel-container">
        <div className="text-channels-title">
          {`TEXT CHANNELS`}
          <IconButton style={addButton}>
            <AddIcon />
          </IconButton>
        </div>
          <List >
            <ListItem style={listItemStyle} button>
             <RoomsMap />
            </ListItem>
          </List>
     
      
      </div>
      {/* {props.children ? props.children : null} */}
      <Route path="/rooms/general" component={TextChannel} />
    </div>
  );
}
