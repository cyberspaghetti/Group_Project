import React, { Component } from "react";
import { editUser } from "../../ducks/userReducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createRoom } from "../../ducks/roomReducer";
import ServersMap from "../serversMap/ServersMap";
import ServerRegistration from "../registration/ServerRegistration";
import UsersMap from "../usersMap/UsersMap";
import "./homepage.css";
// import Header from "../header/Header";
import Rooms from "../rooms/Rooms";

import News from "../Posts/News";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import FriendsList from "../friendsList/FriendsList";
import { Link } from "react-router-dom";

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    background: "#414656",
    display: "flex"
  },
  drawerPaper: {
    background: "#313442"
  }
}));

const addButtonStyle = {
  background: "#00B9FF",
  color: "white"
};

const buttonStyle = {
  background: "#7e8699",
  color: "#ffffff",
  position: "absolute",
  right: "30px",
  top: "15px"
};

const listItemStyle = {
  color: "white",
  fontSize: "1.2rem",
  padding: "0px"
  // margin: '0px 7px'
};

const chevronStyle = {
  background: "transparent",
  color: "white"
};



function Homepage(props) {
  const [serverToggle, setServerToggle] = React.useState(false)

  function addServer() {
    console.log('hit')
    setServerToggle(serverToggle === false ? true : false )
  }
  // console.log('props23', props)

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [toggleState, setToggleState] = React.useState("off");

  const [newRoom, changeNewRoom] = React.useState('')

  function toggle() {
    console.log("hit the toggle");
    setToggleState(toggleState === "off" ? "on" : "off");
  }

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  function selectServer(server_id, room_id) {
    props.history.push(`/home/${server_id}/${room_id}`);
  }

  function selectRoom(server_id, room_id) {
    props.history.push(`/home/${server_id}/${room_id}`);
  }

  function logout() {
    // props.logout()
    window.location.href = "http://localhost:4000/api/logout";
  }

  if (!props.user.loggedIn) return <Redirect to="/" />;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className="tool-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Singularity
            </Typography>
          <div className="logout-parent">
            <Button variant="contained" style={buttonStyle} onClick={logout}>
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            [classes.drawerPaper]: true
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={chevronStyle} />
            ) : (
              <ChevronLeftIcon style={chevronStyle} />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className="add-server-btn">
        <Fab
         style={addButtonStyle}
         onClick={addServer}
         aria-label="add">
       <AddIcon></AddIcon>
       </Fab>
        </div>
        <Divider />
        <ServersMap selectServer={selectServer} />
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
      </main>
      {props.match.params.selectedServer == 0 ? (
        <News />
      ) : (
        <Rooms
          selectedServer={props.match.params.selectedServer}
          selectedRoom={props.match.params.selectedRoom}
          selectRoom={selectRoom}
          toggle={toggle}
        />
      )}
      {serverToggle
        ?
        <ServerRegistration addServer={addServer} />
        :
        null}
      {toggleState === "on" ? (
        <section className="dark-dash">
          <section className={`add-room`}>

            <input 
            onChange={e => changeNewRoom(e.target.value)}

            />
            <Button onClick={() =>  props.createRoom(newRoom, props.match.params.selectedServer, props.user.user.user_id).then(toggle())}>SUBMIT</Button> 
            <Button onClick={toggle} style={buttonStyle}>
              CANCEL
            </Button>
          </section>
        </section>
      ) : null}
      <FriendsList />
      
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user,
    server: state.server,
    editing: state.editing
  };
}

export default connect(
  mapStateToProps,
  { editUser, createRoom }
)(Homepage);
