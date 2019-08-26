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
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=4YfuzIBXGL7xgZfoNJuNN2NVfZPoRjFD&limit=24`)
            .then(res => {
                this.setState({ gifs: res });
            })
    }
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    render() {
        let { search, gifs } = this.state
        return (
            <div>
                <div className='search'>
                    <div>Image/Gif</div>
                    <div>
                    <input onChange={this.handleChange} value={search} name='search' />
                    <button onClick={this.search}>search</button>
                    </div>
                </div>
                    <div className='gif-container'>{gifs.data.data.map(gifs => {
                        return (
                            <Gif grabGif={this.props.grabGif} gifs={gifs} key={gifs.id} className='gif' />
                        )
                    })}
                    
                </div>
            </div>
        )
    }
}





