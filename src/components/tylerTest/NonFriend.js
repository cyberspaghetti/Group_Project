import React, { Component } from 'react';
import { connect } from 'react-redux'
import addFriend from '../../ducks/friendReducer'
//this is the component for the user it grabs props from the parent module that uses it and displays the specific user information 
function NonFriend(props) {

        function remove(userId, friendId){
            props.addFriend(userId, friendId)
        }

        return (
            <div className='image-container'>
                <div>{this.props.friends.user_name}</div>
                <button onClick={remove}>add</button>
            </div>
        )
    }

export default connect(
    null,
    { addFriend }
)(NonFriend);