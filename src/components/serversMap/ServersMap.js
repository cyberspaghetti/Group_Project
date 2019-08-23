import React, { Component } from "react";
import { connect } from "react-redux";
import SpecificServer from "../specificServer/SpecificServer";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem'
import { getAllServers } from "../../ducks/serverReducer";
import "../homepage/homepage.css";
import newsIconLogo from './astronaut1largeTransparent.png'

const newsIconStyle = {
  padding: '0px',
  color: 'white',
  marginTop: '9px'
}

const listStyle = {
  padding: '0px',
  margin: '9px 0px',
  width: '100%'
}

// this component maps over ./server which are the servers that are apart of the specific user
// the specific user id is grabbed from redux
class ServerMap extends Component {
 
  // neeed to change to specific users to grab server
  componentDidMount() {
    console.log('hit component did')
    this.props.getAllServers()
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.render();
    }
  }

  render() {
    console.log('props in server', this.props);
    let servers = 'loading'
    if (this.props.server.servers) {
      return (
        <div className="hero-container">
          <ListItem button style={newsIconStyle}>
            <div className='menu-news' onClick={() => this.props.selectServer(0, 0)}>
              <img src="https://images-workbench.99static.com/oe8mL8VlMNvQP6dLBIKXN812mMM=/0x0:1000x1000/fit-in/500x500/filters:fill(white,true)/99designs-contests-attachments/87/87933/attachment_87933369"
                alt="" className="news-icon" />
              <div>News</div>
            </div>
          </ListItem>
          {servers = this.props.server.servers.map(servers => {
            return (<List style={listStyle}>
              <SpecificServer servers={servers} key={servers.server_id} className='server-container' selectServer={this.props.selectServer} className="server_list" />
            </List>
            )
          })}
        </div>
      )
    }
    return (
      <div className='friends-container'>{servers}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { user: state.user, servers: state.servers, server: state.server };
}

export default connect(
  mapStateToProps,
  { getAllServers }
)(ServerMap);
