import React from "react";
import List from "@material-ui/core/List";
import { getAllServers, addServerUser } from "../../ducks/serverReducer";
import { connect } from "react-redux";
import { useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

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
    marginTop: 19
  },
  serverSearchList: {
    overflowY: "hidden",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    color: "white",
    fontSize: "1rem"
  }
}));
function SearchServer(props) {
  const classes = useStyles();
  const [ServerName, Searched] = React.useState("");
  console.log("kkkk", props);
  useEffect(() => {
    props.getAllServers();
  }, []);
  function handleJoinServer(user_id, server_id) {
    console.log("hit handleJoin", user_id, server_id);
    props.addServerUser(user_id, server_id);
  }
  const buttonStyle = {
    background: "#00b9ff",
    color: "white"
  };
  return (
    <div className="over-flow-parent">
      <Typography style={typographyStyle} variant="h5">
        Or Join Some Other One.
      </Typography>
      <div className="group">
        <input
          className={clsx(classes.textField, classes.dense)}
          onChange={e => Searched(e.target.value)}
          required
        />
        <span className="highlight" />
        <span className="bar" />
        <label className="label">Find A Server</label>
      </div>
      <div className="over-flow">
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
                {/* <img src={server.server_image}></img> */}
                {server.server_name}
                <Button
                  style={buttonStyle}
                  onClick={() =>
                    handleJoinServer(props.user.user.user_id, server.server_id)
                  }
                >
                  join
                </Button>
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
