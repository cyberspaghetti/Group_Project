import React, { Component } from "react";
import { connect } from "react-redux";
import SpecificServer from "../specificServer/SpecificServer";
import List from "@material-ui/core/List";
import ListItem from '@material-ui/core/ListItem'
import { getAllServers, getUserServers } from "../../ducks/serverReducer";
import "../homepage/homepage.css";
import newsIconLogo from './astronaut1largeTransparent.png'
import { regExpLiteral } from "@babel/types";

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
  constructor() {
    super()
    this.state = {
      servers: [],
      loading: true
    }
  }


  // neeed to change to specific users to grab server
  componentDidMount() {
    this.props.getUserServers(this.props.user.user.user_id)

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.servers !== this.props.server.serverUsers) {
      this.setState({ servers: this.props.server.serverUsers, loading: false })
    }
  }

  render() {
    console.log('hello there', this.state)
    console.log('props for the servers', this.props)
    let servers ='loading'
    if (this.state.loading && this.state.servers) {
      return <div>shizz is loadin'</div>
    } else if (!this.state.loading) {
      return <div>
      {servers = this.state.servers.map(servers => {
        return (<List style={listStyle}>
          <SpecificServer servers={servers} key={servers.server_id} selectServer={this.props.selectServer} className="server_list" />
        </List>
        )
      })}
      </div>
    } else {
      return <div>Something went wrong</div>
    }
    
  }
}

function mapStateToProps(state) {
  return { user: state.user, server: state.server };
}

export default connect(
  mapStateToProps,
  { getAllServers, getUserServers }
)(ServerMap);
