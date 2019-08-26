import React from 'react';
import './gif.css'
//this is the component for the user it grabs props from the parent module that uses it and displays the specific user information 
export default function Gif(props){ 
        return (
            
            <div className='gif-container'>
                <img src={props.gifs.images.preview_gif.url} className='gif-img'/>
            </div>
        )
    }

