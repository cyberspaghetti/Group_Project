import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeFriend, getFriends } from '../../ducks/friendReducer'
//this is the component for the user it grabs props from the parent module that uses it and displays the specific user information 
class Friend extends Component {
    constructor(props) {
        super(props)
        this.sate = {
            currentUser: '',
            friendOfUser: ''
        }
    }



    

    render() {
        let {friends}=this.props
        return (
            <div className='image-container'>
                <div>{friends.user_name}</div>
                <button onClick={() => this.props.remove(this.props.friends.user_id, this.props.friends.friend_id)}>remove</button>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return { user: state.user };
}

export default connect(
    mapStateToProps,
    { removeFriend, getFriends }
)(Friend);

