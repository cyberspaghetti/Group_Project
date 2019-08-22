import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friend from '../friends/Friends'
import { getFriends } from '../../ducks/friendReducer';


// this component maps over ./Friend which are the friends of the specific user
class FriendsMap extends Component {
    constructor() {
        super()
        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        this.props.getFriends(this.props.user.user.user_id)
            .then(res => {
                this.setState({ friends: res.value });
            })
    }

    render() {
        console.log('userid for friends', this.props);
        let { friends } = this.state
        console.log('this staten in friends', this.props)
        return (
            <div className='friends-container'>{friends.map(friends => {
                return (
                    <Friend friends={friends} key={friends.id} className='friend-container' />
                )
            })}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return { user: state.user, friends: state.friends };
}

export default connect(
    mapStateToProps,
    { getFriends}
)(FriendsMap);