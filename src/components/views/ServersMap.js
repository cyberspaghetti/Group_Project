import React, { Component } from "react";
import { connect } from "react-redux";
import Server from "./Server";
import { getAllServers } from "../../ducks/serverReducer";

class ServerMap extends Component {
  constructor() {
    super();
    this.state = {
      servers: []
    };
  }

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
  { getAllServers }
)(ServerMap);
