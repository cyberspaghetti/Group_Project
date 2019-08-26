import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friend from '../friends/Friends'
import { getFriends, removeFriend } from '../../ducks/friendReducer';


// this component maps over ./Friend which are the friends of the specific user
class FriendsMap extends Component {


    componentDidMount() {
        this.props.getFriends(this.props.user.user.user_id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.friends.friends !== this.props.friends.friends) {
            this.render()
        }
    }

    remove = (user_id, friend_id) => {
        this.props.removeFriend(user_id, friend_id)
    }

    render() {
        let friends = 'loading'
        if (this.props.friends) {
            friends = this.props.friends.friends.map(friends => {
                return (
                    <Friend friends={friends} key={friends.friend_id} className='friend-container' remove={this.remove} />
                )
            })
        }
        
        return (
            <div className='friends-container'>{friends}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return { user: state.user, friends: state.friends };
}

export default connect(
    mapStateToProps,
    { getFriends, removeFriend }
)(FriendsMap);