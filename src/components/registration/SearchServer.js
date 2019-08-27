import React from "react";
import List from "@material-ui/core/List";
import { getAllServers, addServerUser } from "../../ducks/serverReducer";
import { connect } from "react-redux";
import { useEffect } from 'react'

function SearchServer(props) {
  const [ServerName, Searched] = React.useState("");
  console.log('kkkk', props);

  
      useEffect(() => {
          props.getAllServers()
      }, [])
  

    function handleJoinServer(user_id, server_id){
        console.log('hit handleJoin', user_id, server_id);
        props.addServerUser(user_id, server_id)
    }

  return (
    <div>
      <input
        placeholder="Find Server"
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
              <List>
                {server.server_name}
                <button onClick={() => handleJoinServer(props.user.user.user_id, server.server_id)}>join</button>
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
