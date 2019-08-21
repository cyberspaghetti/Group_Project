import React, { Component } from 'react';
//this is the component for the user it grabs props from the parent module that uses it and displays the specific user information 
export default class User extends Component {
    
    render() {
        console.log('props in friends', this.props)
        return (
            <div className='image-container'>
                <div>{this.props.friends.user_name}</div>
            </div>
        )
    }
}

