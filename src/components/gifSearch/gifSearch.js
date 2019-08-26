import React, { Component } from 'react'
import axios from 'axios'
import Gif from './gif'
import './gif.css'



export default class GifSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            gifs: {
                data: { data: [] }
            }
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.gifs != this.state.gifs)
            this.render()
    }

    search = () => {
        let { search } = this.state
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=4YfuzIBXGL7xgZfoNJuNN2NVfZPoRjFD&limit=10`)
            .then(res => {
                this.setState({ gifs: res });
                console.log(' gifs from gif', res)
            })
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        let { search, gifs } = this.state

        console.log('gif props', this.state)
        return (
            <div className='server-registration-container'>
                <div className='border-of-component'>
                    <h1>GIF
                    <input onChange={this.handleChange} value={search} name='search' />
                        <button onClick={this.search}>search</button>
                    </h1>
                <div className='test'>
                    <div className='gif-container'>{gifs.data.data.map(gifs => {
                        return (
                            <Gif gifs={gifs} key={gifs.id} className='gif-img' />
                        )
                    })}
                    </div>
                </div>
                </div>
            </div>
        )
    }
}





