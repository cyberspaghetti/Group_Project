import React, { Component } from 'react';

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


