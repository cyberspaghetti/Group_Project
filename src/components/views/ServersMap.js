import React, { Component } from "react";
import { connect } from "react-redux";
import Server from "./Server";
import { getServers } from "../../ducks/serverReducer";

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
    this.props.getServers().then(res => {
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
        <div onClick={() => this.props.selectServer(0)}>Home</div>
        {servers.map(server => {
          return (
            <Server
              server={server}
              key={servers.id}
              className="server-container"
              selectServer={this.props.selectServer}
              className="server_list"
            />
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
  { getServers }
)(ServerMap);
