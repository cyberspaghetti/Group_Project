import React, { Component } from 'react';
import removeFriend from '../../ducks/friendReducer'

export default class Friend extends Component {

    render() {

        return (
            <div className='image-container'>
                <div>{this.props.friends.user_name}</div>
                <button>Remove</button>
            </div>
        )
    }
}
