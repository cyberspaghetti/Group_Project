import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../user/User'
import { getUsers } from '../../ducks/userReducer';

import './UsersMap.css'

// this component maps over ./User which which are the Users that are apart of the specific server
// the specific server id if from props.match.params that are passed down from homepage
class UsersMap extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }
// change to people in the server
    componentDidMount() {
        this.props.getUsers()
            .then(res => {
                this.setState({ users: res.value });
            })
    }

    render() {
        let { users } = this.state
        return (
            <div className='users-container'>{users.map(users => {
                return (
                    <User users={users} key={users.id} />
                )
            })}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return { user: state.user, users: state.user.users };
}

export default connect(
    mapStateToProps,
    { getUsers}
)(UsersMap);