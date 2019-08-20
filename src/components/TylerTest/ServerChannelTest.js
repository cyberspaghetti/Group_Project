import React, { Component } from 'react'
import axios from 'axios'
export default class TeamRegistration extends Component {
    constructor() {
        super()
        this.state = {
            server_id: 2,
            server_name: 'test',
            server_image: 'test',
            user_id: 1
        }
    }

   teamSignup = (server_id, server_name, server_image, user_id) => {
       console.log(server_id, server_name, server_image, user_id);
        axios.post('/api/createServerChannel', { server_id, server_name, server_image, user_id })
        .then(res => res.data);
    };


    teamSignu = () => {
        let { server_id, server_name, server_image, user_id } = this.state;
        this.teamSignup(server_id, server_name, server_image, user_id);
        
    };

    render() {

        return (
            <div className='sign-up-page'>
                    <button onClick={this.teamSignu}>Register</button>
            </div>
        )
    }
}

  
  