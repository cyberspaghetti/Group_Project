import React, { Component } from 'react';
import { connect } from 'react-redux';
import Server from './Server'
import { getServers } from '../../ducks/serverReducer';
import { Redirect } from 'react-router-dom';

class ServerMap extends Component {
    constructor() {
        super()
        this.state = {
            servers: []
        }
    }

    componentDidMount() {
        this.props.getServers()
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
        console.log('serversmapped',this.props)
        let { servers } = this.state
        return (
            <div className='hero-container'>{servers.map(server => {
                return (
                    <Server server={server} key={servers.id} className='server-container' ></Server>
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
    { getServers}
)(ServerMap);