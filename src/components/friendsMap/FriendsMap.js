import React, { Component } from 'react';
import { connect } from 'react-redux';
import Friends from '../friends/Friends'
import Friends2 from '../friends2/Friends2'
import { getFriends, removeFriend } from '../../ducks/friendReducer';

import './FriendsMap.css'

// this component maps over ./Friend which are the friends of the specific user
class FriendsMap extends Component {


    componentDidMount() {
        this.props.getFriends(this.props.user.user.user_id)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.friends !== this.props.friends) {
            this.render()
        }
        
    }

    remove = (user_id, friend_id) => {
        this.props.removeFriend(user_id, friend_id)
    }

    render() {
        let friends = 'loading'
        let friends2 = 'loading'
        if (this.props.friends) {
            return (
                <div className='friend-map-hold'>
            {friends = this.props.friends.map(friends => {
                 return <Friends friends={friends} key={friends.friend_id}  remove={this.remove} />
                })}  
                {friends2 = this.props.friends2 .map(friends2 => {
                     return <Friends2  friends={friends2} key={friends2.friend_id}  remove={this.remove} />
                    })}  
                    </div>
            )
            }
        
        return (
            <div className='friends-container'>{friends}
            </div>
        )
    }

}

function mapStateToProps(state) {
    return { user: state.user, friends: state.friends.friends, friends2: state.friends.friends2 };
}

export default connect(
    mapStateToProps,
    { getFriends, removeFriend }
)(FriendsMap);