import React, { Component } from "react";
import { connect } from "react-redux";
import Server from "../specificServer/SpecificServer";
import List from "@material-ui/core/List";
import { getAllServers } from "../../ducks/serverReducer";
import ListItem from "@material-ui/core/ListItem";
import "../homepage/homepage.css";

const newsIconStyle = {
  padding: '0px',
  color: 'white',
  marginTop: '9px'
}

const listStyle = {
  padding: '0px',
  margin: '9px 0px'
}

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
        <ListItem style={newsIconStyle} button className='menu-news' onClick={() => this.props.selectServer(0, 0)}>
        <img
          src="data:image/png;base64,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"
          alt=""
          className="news-icon"
        />
        <div>News</div>
        </ListItem>
        {servers.map(server => {
          return (
            <List style={listStyle}>
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
