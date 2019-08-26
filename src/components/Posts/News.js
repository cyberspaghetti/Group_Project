import React, { Component } from "react";
import CardMap from "./CardMap";
import "./News.css";
import { createPost } from '../../ducks/postReducer'
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import GifSearch from '../gifSearch/gifSearch'
import { stringify } from "querystring";




class News extends Component {
  constructor() {
    super()
    this.state = {
      news_post_title: '',
      news_post_image: '',
      news_post_body: '',
      news_post_date: '',
      display_menu: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.prevState != this.state)
      this.render()
  }

  date = () => {
    let { news_post_date } = this.state
    let date = new Date();
    let dateToString = date.toLocaleDateString();
    return this.setState({ news_post_date: `${dateToString}` })
  }

  showPostMenu = () => {
    this.setState({ display_menu: !this.state.display_menu });

  }

  handleChange = e => {
    console.log('handle', e)
    let { name, value } = e.target
    this.setState({ [name]: value })
    this.date()
  };

  createPost = () => {
    let user_id = this.props.user.user.user_id
    console.log('thisstate in function create', user_id);
    let { news_post_title, news_post_image, news_post_body, news_post_date } = this.state;
    this.props.createPost(user_id, news_post_title, news_post_image, news_post_body, news_post_date);

  };

  grabGif = (gif) => {
    this.setState({ news_post_image: gif })
  }


  render() {

    console.log('opafsjdosfjkdsafj', this.props);
    let { news_post_body, news_post_title, news_post_image } = this.state
    let { display_menu } = this.state
    return (
      <div className="news-background">
        <div className="news-title">
          <Typography variant="h4">News</Typography>
        </div>
        <div >
          <CardMap />
        </div>
        {this.props.children ? this.props.children : null}
        {display_menu
          ?
          <div className='display-menu'>
            <div className='display-info-container'>
              Title
            <input onChange={this.handleChange} name="news_post_title" className="input-title" value={news_post_title}></input>
              Message
              <input name="news_post_body" class="input-body" onChange={this.handleChange} value={news_post_body}></input>
              <button onClick={this.createPost}>Create Post</button>
            </div>
            <div className='gif-search-container'>
              <GifSearch grabGif={this.grabGif} />
            </div>
          </div>
          :
          <button onClick={this.showPostMenu}> add post </button>
        }
      </div>
    );
  }
}


function mapStateToProps(state) {
  return { posts: state.posts, user: state.user };
}
export default connect(
  mapStateToProps,
  { createPost }
)(News);