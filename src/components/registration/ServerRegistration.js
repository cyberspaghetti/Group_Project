import React, { Component } from 'react'
import { connect } from 'react-redux';
import { serverRegister } from '../../ducks/serverReducer';
import { Redirect, Link } from 'react-router-dom'
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import './serverRegistration.css'

class ServerRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            server_image: '',
            server_name: ''
        }
    }

    handleServerName = value => {
        this.setState({
            server_name: value
        })
    };

    registerServer = () => {
        let { server_name, server_image } = this.state;
        let { user_id } = this.props.user.user
        this.props.serverRegister(server_name, server_image, user_id)
        this.props.addServer()

    };

    

    render() {
        let { server_image } = this.state

        const buttonStyle = {
            background: '#7e8699',
            color: 'white'
        }
        return (
            <div className='server-registration-container'>
            <div className='border-of-component'>
                <title>Register server</title>
                <h1>Server Name</h1>
                <input onChange={e => this.handleServerName(e.target.value)} />
                <h1>Server Image</h1>
                <input value={server_image} onChange={this.handleChange} name="server_image" />
                <Button style={buttonStyle} onClick={this.registerServer}>Register</Button>
            </div>
            </div>
        )
    }
}
// onClick={handleDrawerOpen}
function mapStateToProps(state) {
    return { server: state.server, user: state.user };
}

export default connect(
    mapStateToProps,
    { serverRegister }
)(ServerRegistration);

