import React, { Component } from 'react';
import { connect } from 'react-redux';
import Server from './Server'
import { getAllServers } from '../../ducks/serverReducer';
import { Link } from 'react-router-dom'
class ServerMap extends Component {
    constructor() {
        super()
        this.state = {
            servers: []
        }
    }

    componentDidMount() {
        this.props.getAllServers()
            .then(res => {
                this.setState({ servers: res.value });
            })
    }

    componentDidUpdate(prevProps) {
        if(prevProps !== this.props){
            this.render()
        }
    }

    render() {
        console.log('serversmap this props',  this.props)
        let { servers } = this.state
        return (
            <div className='hero-container'>{servers.map(server => {
                return (
                <Link><Server server={server} key={servers.id} className='server-container'/></Link>
                )
            })}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return { user: state.user, servers: state.servers, server: state.server };
}

export default connect(
    mapStateToProps,
    { getAllServers}
)(ServerMap);