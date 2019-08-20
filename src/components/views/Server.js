import React, { Component } from 'react';
export default class Server extends Component {

    render() {
        return (
            <div className='image-container'>
                <img src={this.props.server.server_image} className='image-container' alt='' />
                <div>{this.props.server.server_name}</div>
            </div>
        )
    }
}

