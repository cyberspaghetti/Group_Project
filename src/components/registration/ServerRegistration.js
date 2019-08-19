import React, { Component } from 'react'
import { connect } from 'react-redux';
import { serverRegister } from '../../ducks/serverReducer';
import { Redirect, Link } from 'react-router-dom'

class ServerRegistration extends Component {
    constructor() {
        super()
        this.state = {
            server_name: '',
            server_image: ''
        }
    }

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    registerServer = () => {
        let { server_name, server_image } = this.state;
        let { user_id } = this.props.user.user
        this.props.serverRegister(server_name, server_image, user_id);

    };

    render() {
        console.log('props in server register', this.props);
        let { server_name, server_image } = this.state
        // let { error, redirect, user} = this.props;
        // if (!user || error || redirect) return <Redirect to="/login" />;
        return (
            <div className='team-registration'>
                <div className='team-registration-title'>
                    Register Server
            </div>
                <div className='inputs-user'>
                    Server Name:
                <input className='input-user-sub' type="text"
                        value={server_name}
                        name="server_name"
                        onChange={this.handleChange}></input>
                    Server Profile Image:
                <input className='input-user-sub' type="text"
                        value={server_image}
                        name="server_image"
                        onChange={this.handleChange}></input>
                </div>
                <button onClick={this.registerServer}>Register</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { server: state.server, user: state.user };
}

export default connect(
    mapStateToProps,
    { serverRegister }
)(ServerRegistration);