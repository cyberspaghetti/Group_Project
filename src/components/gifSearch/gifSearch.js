import React, { Component } from "react";
import axios from "axios";
import Gif from "./gif";
import "./gif.css";
import Button from "@material-ui/core/Button";
import { height } from "@material-ui/system";
import { Typography } from "@material-ui/core";
const buttonStyle = {
 background: "#00b9ff",
 color: "white"
};
export default class GifSearch extends Component {
 constructor(props) {
   super(props);
   this.state = {
     search: "",
     gifs: {
       data: { data: [] }
     }
   };
 }
 componentDidUpdate = (prevProps, prevState) => {
   if (prevState.gifs != this.state.gifs) this.render();
 };
 search = e => {
   let { search } = this.state;
   axios
     .get(
       'http://api.giphy.com/v1/gifs/search?q=${search}&api_key=4YfuzIBXGL7xgZfoNJuNN2NVfZPoRjFD&limit=24'
     )
     .then(res => {
       this.setState({ gifs: res, search: "" });
     });
 };
 handleChange = e => {
   const { name, value } = e.target;
   this.setState({ [name]: value });
 };
 render() {
   let { search, gifs } = this.state;
   return (
     <div className='main-search-container'>
       <div className="search">
         <div className="gif-input-container">
           <div className="group">
             <input
               onChange={this.handleChange}
               value={search}
               name="search"
               required
             />
             <span class="highlight" />
             <span class="bar" />
             <label className="label">Search Gifs</label>
           </div>
           <div className="gif-search-button">
             <Button style={buttonStyle} onClick={this.search}>
               rummage thru database
             </Button>
           </div>
         </div>
       </div>
       <div className="gif-container">
         {gifs.data.data.map(gifs => {
           return (
             <Gif
               grabGif={this.props.grabGif}
               gifs={gifs}
               key={gifs.id}
               className="gif"
             />
           );
         })}
       </div>
     </div>
   );
 }
}