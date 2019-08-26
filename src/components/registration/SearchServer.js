import React from 'react'
import { getAllServers } from "../../ducks/serverReducer";


function SearchServer(props){

    componentDidMount() {
        console.log('hit component did')
        props.getAllServers()
      }

    return(
        <div>
            <input />
            <div>
          {servers = this.props.server.servers.map(servers => {
            return (<List style={listStyle}>
              <SpecificServer servers={servers} key={servers.server_id} selectServer={this.props.selectServer} className="server_list" />
            </List>
            )
          })}
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return { user: state.user, server: state.server };
  }

export default connect(
    mapStateToProps,
    { getAllServers }
  )(SearchServer);