import React, { Component } from 'react';
import { connect } from 'react-redux';

class Server extends Component {
    render() {
        console.log('in server', this.props);
        return (
                <div className='image-container'>
                        <img src={this.props.server.server_image} className='image-container' alt='' />
                        <div>{this.props.server.server_name}</div>
                </div>
        )
    }

}

function mapStateToProps(state) {
    return state.user;
}

export default connect(
    mapStateToProps,
    null
)(Server);
