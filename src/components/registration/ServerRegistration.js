import React, { Component } from "react";
import { connect } from "react-redux";
import { serverRegister } from "../../ducks/serverReducer";
import Button from "@material-ui/core/Button";
import "./serverRegistration.css";
import SearchServer from "./SearchServer";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Typography } from "@material-ui/core";
import astroBoi from "./astronautMascotWaat.svg";

const typographyStyle = {
  color: "white",
  borderBottom: "1px solid #00b9ff"
};

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  dense: {
    marginTop: 19,
    color: "white"
  }
}));
function ServerRegistration(props) {
  const classes = useStyles();
  const [inputName, registerName] = React.useState("");
  const [inputImage, registerImage] = React.useState("");
  function handleCancel() {
    props.addServer();
  }
  function registerServer() {
    let { user_id } = props.user.user;
    props.serverRegister(inputName, inputImage, user_id);
    props.addServer();
  }
  const buttonStyle = {
    background: "#00b9ff",
    color: "white",
    marginTop: "15px"
  };
  return (
    <div className="server-registration-container">
      <div className="add-server-container">
        <div className="server-input-btn-container">
          <Typography style={typographyStyle} variant="h5">
            Make Your Own Server...{" "}
          </Typography>
          <div className="group">
            <input
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
              onChange={e => registerName(e.target.value)}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label">Server Name</label>
          </div>
          <div className="group">
            <input
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
              onChange={e => registerImage(e.target.value)}
              required
            />
            <span className="highlight" />
            <span className="bar" />
            <label className="label">Server Icon</label>
          </div>
          <div className="server-btn-container">
            <Button style={buttonStyle} onClick={registerServer}>
             Lead On
            </Button>
            <Button style={buttonStyle} onClick={handleCancel}>
              nvm
            </Button>
          </div>
          <div className="dude-container2">
            <img src={astroBoi} alt="" className="astroBoi2" />
          </div>
        </div>
        <div className="search-server">
          <SearchServer />
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
 return { server: state.server, user: state.user };
}
export default connect(
 mapStateToProps,
 { serverRegister }
)(ServerRegistration);
