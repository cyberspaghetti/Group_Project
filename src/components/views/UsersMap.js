import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from './User'
import { getUsers } from '../../ducks/userReducer';

class UsersMap extends Component {
    constructor() {
        super()
        this.state = {
            users: []
        }
    }

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
                console.log(users)
                return (
                    <User users={users} key={users.id} className='user-container' />
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