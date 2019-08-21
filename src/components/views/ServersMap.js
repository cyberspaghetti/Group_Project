import React, { Component } from "react";
import { connect } from "react-redux";
import Server from "./Server";
import List from "@material-ui/core/List";
import { getAllServers } from "../../ducks/serverReducer";
import "../homepage/homepage.css";

// this component maps over ./server which are the servers that are apart of the specific user
// the specific user id is grabbed from redux
class ServerMap extends Component {
  constructor() {
    super();
    this.state = {
      servers: []
    };
  }
  // neeed to change to specific users to grab server
  componentDidMount() {
    this.props.getAllServers().then(res => {
      this.setState({ servers: res.value });
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.render();
    }
  }


  render() {
    let { servers } = this.state;
    return (
      <div className="hero-container">
        <img
          src="yes"
          alt=''
          onClick={() => this.props.selectServer(0)}
          className="news-icon"
        />
        {servers.map(server => {
          return (
            <List>
              <Server
                server={server}
                key={servers.id}
                className="server-container"
                selectServer={this.props.selectServer}
                className="server_list"
              />
            </List>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user, servers: state.servers, server: state.server };
}

export default connect(
  mapStateToProps,
  { getAllServers }
)(ServerMap);
