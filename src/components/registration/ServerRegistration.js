import React, { Component } from 'react'
import { connect } from 'react-redux';
import { serverRegister } from '../../ducks/serverReducer';
import { Redirect, Link } from 'react-router-dom'
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

class ServerRegistration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            server_name: '',
            server_image: '',
            editing: false
        }
    }

    edit = () => {
        this.setState({ editing: !this.state.editing })
    };

    handleChange = e => {
        let { name, value } = e.target;
        this.setState({ [name]: value });
    };

    registerServer = () => {
        let { server_name, server_image } = this.state;
        let { user_id } = this.props.user.user
        this.props.serverRegister(server_name, server_image, user_id)
        this.edit()

    };




    render() {
        let { server_name, server_image } = this.state
        let { editing } = this.state
        console.log('props from register', this.props)
        const addButtonStyle = {
            background: "#00B9FF",
            color: "white",
        };
        return (
            <div>
                {editing
                    ?
                    <div>
                        <div className='border-of-component'>
                            <title>Register server</title>
                            <h1>Server Name</h1>
                            <input value={server_name} onChange={this.handleChange} name="server_name" />
                            <h1>Server Image</h1>
                            <input value={server_image} onChange={this.handleChange} name="server_image" />
                        </div>
                        <button onClick={this.registerServer}>Register</button>
                    </div>
                    :
                    <div className="add-server-btn">
                        <Fab
                            style={addButtonStyle}
                            onClick={this.edit}
                            aria-label="add">
                            <AddIcon></AddIcon>
                        </Fab>
                    </div>
                }
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

