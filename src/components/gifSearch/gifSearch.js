import React, { Component } from 'react'
import axios from 'axios'
import Gif from './gif'



export default class GifSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            gifs: {
                data: {data: []}
            }
        }
    }

    componentDidUpdate = (prevProps, prevState) => { 
        if (prevState.gifs != this.state.gifs )
        this.render() 
        }

    search = () =>{
        let {search} = this.state
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=4YfuzIBXGL7xgZfoNJuNN2NVfZPoRjFD&limit=5`)
        .then(res => {
            this.setState({ gifs: res });
            console.log(' gifs from gif', res)
          }) 
    }
    handleServerChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
      };
    
    render() {
        let { search, gifs } = this.state
    
        console.log('gif props',this.state)
        return (
            <div className='server-registration-container'>
            <div className='border-of-component'>
                <title>Register server</title>
                <h1>Search Term</h1>
                <input onChange={this.handleServerChange} value={search} name='search'/>
                <button onClick={this.search}>search</button>
            </div>
            <div className='users-container'>{gifs.data.data.map(gifs => {
                return (
                    <Gif gifs={gifs} key={gifs.id} className='user-container' />
                )
            })}
            </div>
            </div>
        )
    }
}





