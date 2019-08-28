import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import UsersMap from '../usersMap/UsersMap'
import FriendsMap from "../friendsMap/FriendsMap";
import FriendReqMap from "../friendReqMap/FriendReqMap";

import './friendslist.css'

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
const listItemStyle = {
  color: "#ccc",
  fontSize: ".9rem",
  paddingLeft: "35px"
};
export default function FriendsList() {
  const classes = useStyles();
  return (
    <div className="friends-list-container">
      <div className="friends-list-title">
        <Button
          classes={{
            root: classes.root,
            label: classes.label
          }}
        >
          {`New Friends`}
        </Button>
      </div>

      <List className="channel-names-container">
          <UsersMap />
      </List>

      <div className="friends-list-title">
        <Button
          classes={{
            root: classes.root,
            label: classes.label
          }}
        >
          {`Your Friends`}
        </Button>
      </div>
      <List className="channel-names-container">
          <FriendsMap />
      </List>

      <div className="friends-list-title">
        <Button
          classes={{
            root: classes.root,
            label: classes.label
          }}
        >
          {`Friend Requests`}
        </Button>
      </div>

      <List className="channel-names-container">
         <FriendReqMap />
      </List>
    </div>
  );
}
