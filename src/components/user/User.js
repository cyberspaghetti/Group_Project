import React, { Component } from 'react';
//this is the component for the user it grabs props from the parent module that uses it and displays the specific user information 
export default class User extends Component {

    render() {
        return (
            <div className='image-container'>
                <img src={this.props.users.user_image} />
                <div>{this.props.users.user_name}</div>
            </div>
        )
    }
}


