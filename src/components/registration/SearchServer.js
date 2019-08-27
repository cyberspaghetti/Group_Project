import React from "react";
import List from "@material-ui/core/List";
import { getAllServers, addServerUser } from "../../ducks/serverReducer";
import { connect } from "react-redux";
import { useEffect } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  serverSearchList: {
    overflowY: 'hidden',
    display: 'flex',
    justifyContent: 'flex-start'
  }
}))

function SearchServer(props) {
  const classes = useStyles();
  const [ServerName, Searched] = React.useState("");
  console.log('kkkk', props);

  
      useEffect(() => {
          props.getAllServers()
      }, [])
  

    function handleJoinServer(user_id, server_id){
        console.log('hit handleJoin', user_id, server_id);
        props.addServerUser(user_id, server_id)
    }

    const buttonStyle = {
      background: "#7e8699",
      color: "white",
    };

  return (
    <div>
      <TextField
        id="standard-dense"
        label="Search"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        onChange={e => Searched(e.target.value)}
      />
      <div>
        {props.server.servers
          .filter(servers => {
            if (
              ServerName !== "" &&
              servers.server_name.startsWith(ServerName)
            ) {
              return true;
            } else if (ServerName === "") {
              return true;
            }
          })
          .map(server => {
            return (
              <List className={clsx(classes.serverSearchList)}>
                {server.server_name}
                <Button style={buttonStyle} onClick={() => handleJoinServer(props.user.user.user_id, server.server_id)}>join</Button>
              </List>
            );
          })}
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return { user: state.user, server: state.server };
}

export default connect(
  mapStateToProps,
  { getAllServers, addServerUser }
)(SearchServer);
