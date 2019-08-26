import React from "./node_modules/react";
import { makeStyles } from "./node_modules/@material-ui/core/styles";
import Divider from "./node_modules/@material-ui/core/Divider";
import Button from "./node_modules/@material-ui/core/Button";
import ListItem from "./node_modules/@material-ui/core/ListItem";
import List from "./node_modules/@material-ui/core/List";
import FriendsMap from "../friendsMap/FriendsMap";
import FriendReqMap from "../friendReqMap/FriendReqMap";
import "./friendsList.css";

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
        <ListItem style={listItemStyle} button>
          Placeholder
        </ListItem>
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
        <ListItem style={listItemStyle} button>
          <FriendsMap />
        </ListItem>
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
        <ListItem style={listItemStyle} button>
         <FriendReqMap />
        </ListItem>
      </List>
    </div>
  );
}
