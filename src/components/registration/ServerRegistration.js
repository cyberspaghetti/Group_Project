import React, { Component } from 'react'
import { connect } from 'react-redux';
import { serverRegister } from '../../ducks/serverReducer';
import Button from "@material-ui/core/Button";
import "./serverRegistration.css";
import SearchServer from "./SearchServer";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  }
}))

function ServerRegistration(props) {
  const classes = useStyles();
  const [inputName, registerName] = React.useState("");
  const [inputImage, registerImage] = React.useState("");
    

  function handleCancel(){
    props.addServer()
  }

  function registerServer(){
    let { user_id } = props.user.user;
    props.serverRegister(inputName, inputImage, user_id);
    props.addServer();
  };

  const buttonStyle = {
    background: "#7e8699",
    color: "white",
    height: '30px'
  };
  return(
    <div className="server-registration-container">
        <div className="border-of-component">
          <title>Register server</title>
          <div className='server-input-btn-container'>
          <div>
          <TextField
          id="standard-dense"
          label="Server Name"
          className={clsx(classes.textField, classes.dense)}
          margin="dense"
            onChange={e => registerName(e.target.value)} 
          />
          </div>
          <div>
          <TextField
            id="standard-dense"
            label="Server Image"
            className={clsx(classes.textField, classes.dense)}
            margin="dense"
            onChange={e => registerImage(e.target.value)} 
          />
          </div>
          <Button style={buttonStyle} onClick={registerServer}>
            Register
          </Button>
          <Button style={buttonStyle} onClick={handleCancel}>
            Exit
          </Button>
          </div>
          <div className='search-server'>
            <SearchServer />
          </div>
        </div>
      </div>
  )
}

function mapStateToProps(state) {
  return { server: state.server, user: state.user };
}
export default connect(
  mapStateToProps,
  { serverRegister }
)(ServerRegistration);
