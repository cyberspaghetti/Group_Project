import React, { Component } from "react";
import { connect } from "react-redux";
import SpecificServer from "../specificServer/SpecificServer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { getAllServers } from "../../ducks/serverReducer";
import "../homepage/homepage.css";

const newsIconStyle = {
  padding: "0px",
  color: "white",
  marginTop: "9px"
};

const listStyle = {
  padding: "0px",
  margin: "9px 0px",
  width: "100%"
};

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
        <ListItem button style={newsIconStyle}>
          <div onClick={() => this.props.selectServer(0, 0)} className='menu-news'>
            <img
              src="https://images-workbench.99static.com/oe8mL8VlMNvQP6dLBIKXN812mMM=/0x0:1000x1000/fit-in/500x500/filters:fill(white,true)/99designs-contests-attachments/87/87933/attachment_87933369"
              alt=""
              className="news-icon"
            />
            <div>News</div>
          </div>
        </ListItem>
        {servers.map(server => {
          return (
            <List style={listStyle}>
              <SpecificServer
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
